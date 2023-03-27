import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay, EffectFade])
    this.swiper = new Swiper(this.el, {
      slidesPerView: 1, effect: "fade",spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 10000,
        pauseOnMouseEnter: false,
        waitForTransition: true
      },
      on: {
        slideChangeTransitionStart: function () {
          const previousSlide = this.slides[this.previousIndex];
          const previousVideo = previousSlide.querySelector('video');
          if (previousVideo) {
            previousVideo.pause();
            previousVideo.currentTime = 0;
          }

          const currentSlide = this.slides[this.activeIndex];
          const currentVideo = currentSlide.querySelector('video');
          if (currentVideo) {
            currentVideo.play();
            currentVideo.addEventListener('ended', function () {
              this.swiper.slideNext();
            });
          }
        }
      }
    })
    console.log(this.swiper);
  }
}
