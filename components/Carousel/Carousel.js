class CarouselLink {
    constructor(carouselElement) {
        this.carousel = carouselElement;

        this.images = this.carousel.querySelectorAll('img');

        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        
        this.index = 0;

        this.images[this.index].style.display = 'flex';

        this.leftButton.addEventListener('click', () => this.leftClick());
        this.rightButton.addEventListener('click', () => this.rightClick());
    }

    leftClick() {
        this.images[this.index].style.display = 'none';
        this.index--;
        if(this.index < 0) {
            this.index = this.images.length - 1;
        }
        this.images[this.index].style.display = 'flex';
    }

    rightClick() {
        this.images[this.index].style.display = 'none';
        this.index++;
        if(this.index >= this.images.length) {
            this.index = 0;
        }
        this.images[this.index].style.display = 'flex';
    }
}

let carousel = document.querySelector('.carousel');
let myCarousel = new CarouselLink(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
