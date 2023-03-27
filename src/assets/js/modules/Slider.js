import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectFade, Next } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay, EffectFade,])
    const swiperEl = this.el
    this.swiper = new Swiper(swiperEl, {
      slidesPerView: 1, effect: "fade", spaceBetween: 30,
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
          const mySlider = swiperEl.swiper
          if (currentVideo) {
            currentVideo.play();
            currentVideo.addEventListener('ended', (e) => {
              console.log('swiperEl ended',mySlider, e);
              mySlider.slideNext();
            });
            currentVideo.addEventListener('timeupdate', (e) => {
              console.log('swiperEl timeupdate',mySlider, e);
              if (currentVideo.currentTime >= 60) {
                currentVideo.pause();
                currentVideo.currentTime = 0;
                mySlider.slideNext();
              }
            });
          }
        }
      }
    })
  }
}
