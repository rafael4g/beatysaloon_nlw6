/* toggle incluir ou remover classe show */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
 element.addEventListener('click', function(){
   nav.classList.toggle('show')
 })
}

/* remover a classe show pra direcionar a pagina correta */
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
 }

 /* atalho emmet vscode .card*3>(.icon-)+h3.title+p */

 /* mudar o header da pagina quando der scroll */
 const header = document.querySelector('#header')
 const navHeight = header.offsetHeight

 function changeHeaderWhenScroll(){

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
   header.classList.remove('scroll')
  }
 }


 /* Testimonial Swiper */
 const swiper = new Swiper('.swiper-container', {
   slidesPerView:1,
   pagination:{
     el: '.swiper-pagination',
   },
   mousewheel: true,
   keyboard: true,
   breakpoints:{
     767:{
      slidesPerView: 2,
      setWrapperSize: true
     }
   }
});

/* ScrollReveal: MOstra conteudo ao rolar a pagina */
const scrollReveal = ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .text, #home .image, 
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  {interval: 100}
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme seção na pagina */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerWidth / 8) * 3;

  for( const section of sections) {
    const sectionTop = section.offsetTop /* topo da seção */
    const sectionHeight = section.offsetHeight /* altura da seção */
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= (sectionTop + sectionHeight)

    if(checkpointStart && checkpointEnd){
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }

  }
}


/* When Scroll */
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll();
  backToTop(); 
  activateMenuAtCurrentSection(); 
})



