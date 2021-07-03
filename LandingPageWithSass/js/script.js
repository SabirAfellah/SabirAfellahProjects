const buttonDM = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const selectedTheme = localStorage.getItem('selected-theme');

buttonDM.addEventListener('click', () => {

    document.getElementById("navDM").classList.toggle(darkTheme);
    document.getElementById("Home").classList.toggle(darkTheme);
    document.getElementById("About").classList.toggle(darkTheme);
    document.getElementById("Services").classList.toggle(darkTheme);
    document.getElementById("Menu").classList.toggle(darkTheme);
    document.getElementById("Contact-Us").classList.toggle(darkTheme);
    document.getElementById("footer").classList.toggle(darkTheme);

    
    
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: true
});
sr.reveal(`
    .text-content, .image-content, 
    .desc, .desc-image, 
    .card1, .card2, .card3,
    .menu1, .menu2, .menu3,
    .Contact-Wrapper, .form,
    .socials, .terms, .Contacts`
    ,
    {
    interval: 200
});