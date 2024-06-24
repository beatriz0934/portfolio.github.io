window.addEventListener("scroll", function(){
    let nav = document.querySelector('#navBar')
    nav.classList.toggle('rolagem', window.scrollY > 150 )
})