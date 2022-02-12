// powered by Quotable
// https://github.com/lukePeavey/quotable
/*document.addEventListener("DOMContentLoaded", () =>{
    const button = document.getElementById("new-quote");
    const quote = document.getElementById("text");
    const cite = document.getElementById("author");
    
    async function updateQuote() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      if(response.ok){
        quote.textContent = data.content;
        cite.textContent = data.author;
      }else{
        quote.textContent = "An error has occured";
        console.log(data);
      }
    }
    
    button.addEventListener("Click", updateQuote);
    updateQuote();
  })*/

  let quotes = [
      {
          quote: "Do one thing every day that scares you.",
          author: "Eleanor Roosevelt"
      },
      {
          quote: "What's meant to be will always find a way",
          author: "Trisha Yearwood"
      },
      {
          quote: "The unexamined life is not worth living.",
          author: "Socrates"
      },
      {
        quote: "Be mindful. Be grateful. Be positive. Be true. Be kind.",
        author: "Roy T. Bennett, The Light in the Heart "
      },
      {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
      },
      {
        quote: "Trust yourself. You know more than you think you do.",
        author: "Benjamin Spock "
      },
      
  ]

  function randomQuote(){
      let randomNum = Math.floor(Math.random() * quotes.length);
      document.getElementById('text').textContent = quotes[randomNum].quote;
  }

  let buttons = document.getElementById('new-quote');
  button.style.color = "red";

  button.addEventListener('click', () => {
      randomQuote();
  });