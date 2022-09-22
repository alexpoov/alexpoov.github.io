
// typewritting

// ES6 Class
class TypeWriter {
    constructor(txtElement, words) {
      this.txtElement = txtElement;
      this.words = words;
      this.wordIndex = 0;
      this.type(true); // show at the beginning
    }
  
    type(show) { // added 'show' param to determine whether to show or hide emoji
      if (!show) {
        this.txtElement.innerText = '';
        if (this.wordIndex == 0) {
            setTimeout(() => this.type(true), 2000); // wait 200ms and show
            return;
          } else {
            setTimeout(() => this.type(true), 750); // wait 750ms and show
            return;
          }
      }
      this.txtElement.innerText = this.words[this.wordIndex];
      this.wordIndex++;
      this.wordIndex %= this.words.length;
      if (this.wordIndex == 0) {
        setTimeout(() => this.type(false), 200); // wait 200ms and hide
      } else {
        setTimeout(() => this.type(false), 1500); // wait 1500ms and hide
      }
    }
  }
    
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
{/* <b>@alexpoov</b> &#127803; */}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, #col_img, .skills__subtitle, #sendemail',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.spotify',{delay: 400}); 
sr.reveal('.network',{delay: 450}); 
sr.reveal('.figma',{delay: 500}); 
sr.reveal('.site',{delay: 550}); 

