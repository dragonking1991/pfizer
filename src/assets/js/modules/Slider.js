import BaseModule from './BaseModule'
import Swiper from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      on: {
        slideChangeTransitionStart: function () {
          const previousSlide = this.slides[this.previousIndex];
          const previousVideo = previousSlide.querySelector('video');
          if (previousVideo) {
            previousVideo.pause();
          }

          const currentSlide = this.slides[this.activeIndex];
          const currentVideo = currentSlide.querySelector('video');
          if (currentVideo) {
            currentVideo.play();
          }
        }
      }
    })
    console.log(this.swiper);
  }
}
