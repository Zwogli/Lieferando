function render(){
    initHeader();
    initNavbar();
}

function initHeader(){
    generateHTMLHeader();
}

function initNavbar(){
    let navbar = document.getElementById('navbar');
    navbar.innerHTML = '';
    navbar.innerHTML += generateHtmlNavbar();
}