 


function moveDivRight() {

    document.getElementById('slick__slide').style.transform = 'translateX(-50%)';

}

function moveDivLeft(){

    document.getElementById('slick__slide').style.transform = 'translateX(0%)';

}
const qualitySection = document.getElementById('.quality');
const stepsSection = document.querySelector('.steps');
const valuesSection = document.querySelector('.values');
const pricingSection = document.querySelector('.pricing');
const testimonialSection =document.querySelector('.testimonial');
const faqSection = document.querySelector('.FAQ');
const footerSection = document.querySelector('.footer');



document.addEventListener(scroll, ()=>{
const clientHeight = document.documentElement.clientHeight;
const qualitySectionY = qualitySection.getBoundingClientRect().y;
const stepsSectionY = stepsSection.getBoundingClientRect().y;
const valuesSectionY = valuesSection.getBoundingClientRect().y;
const pricingSectionY = pricingSection.getBoundingClientRect().y;
const testimonialSectionY = testimonialSection.getBoundingClientRect().y;
const faqSectionY = faqSection.getBoundingClientRect().y;
const footerSectionY = footerSection.getBoundingClientRect().y;




if(clientHeight > qualitySectionY){

    qualitySection.styles.animation = ('section-pricing 1s')
}

if(clientHeight > stepsSectionY){

    stepsSection.styles.animation = ('section-pricing 2s')
}
if(clientHeight > valuesSectionY){

    valuesSection.styles.animation = ('section-pricing 1s')
}
if(clientHeight > pricingSectionY){

    pricingSection.styles.animation = ('section-pricing 2s')
}
if(clientHeight > testimonialSectionY){

    testimonialSection.styles.animation = ('section-pricing 1s')
}
if(clientHeight > faqSectionY){

    faqSection.styles.animation = ('section-pricing 2s')
}
if(clientHeight > footerSectionY){

    footerSectionY.styles.animation = ('section-pricing 1s')
}






})


