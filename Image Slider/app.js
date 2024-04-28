const slides = document.querySelectorAll(".slide");
// we defined length for the length condition we have to define in if statement:-
const length = slides.length;
//counter is for the  counter to start from 0:-
let counter = 0;

//This function will move the index from 0 to max:-
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    }
};

const goNext = () => {
    if (counter < length - 1) {
        counter++;
        slideImage();
    }
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

