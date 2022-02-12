const PORT = process.env.PORT || 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

const newspapers =  [
    {
        name: 'cryptonews',
        address: 'https://cryptonews.com/news/',
        base: 'https://cryptonews.com'
    },
    {
        name: 'yahoo.finance',
        address: 'https://finance.yahoo.com/topic/crypto/',
        base: 'https://finance.yahoo.com'
    },
    {
        name:'cryptocurrencynews',
        address: 'https://cryptocurrencynews.com/daily-news/',
        base:'https://cryptocurrencynews.com'
    },
    {
        name: 'fxstreet', 
        address: 'https://www.fxstreet.com/cryptocurrencies/',
        base:''
    },
    {
        name: 'coindesk', 
        address: 'https://www.coindesk.com/markets/',
        base:''
    },
    {
        name: 'cryptonews', 
        address: 'https://cryptonews.net/en/news/bitcoin/',
        base:''
    }

]

const articles = []

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("bitcoin")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: newspaper.base + url,
                    source: newspaper.name
                })
            })

        })
})

app.get('/', (req, res) => {
    res.json('Welcome to my Climate Change News API')
})

app.get('/news', (req, res) => {
    res.json(articles)
})

app.get('/news/:newspaperId', (req, res) => {
    const newspaperId = req.params.newspaperId

    const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
    const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base


    axios.get(newspaperAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("bitcoin")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    source: newspaperId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

