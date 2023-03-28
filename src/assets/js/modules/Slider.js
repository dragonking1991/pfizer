import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectFade, Navigation, Thumbs, Controller, Parallax } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay])

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      // effect: "fade",
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 10000,
        pauseOnMouseEnter: false,
        waitForTransition: true
      },
    })


    this.wrapper = this.el.swiper

    this.swiper?.on('slideChange', (event) => {
      console.log(event);
      const previousSlide = event.slides[event.previousIndex];
      const previousVideo = previousSlide.querySelector('video');
      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0;
      }

      const currentSlide = event.slides[event.activeIndex];
      const currentVideo = currentSlide.querySelector('video');
      const videoTimeLimit = ~~(currentVideo?.getAttribute('data-time-limit')) || ''
      console.log('videoTimeLimit', videoTimeLimit);

      if (currentVideo) {
        currentVideo.play();
        currentVideo.addEventListener('ended', (e) => {
          this.swiper.slideNext();
        });
        currentVideo.addEventListener('timeupdate', (e) => {
          if (videoTimeLimit && currentVideo.currentTime >= videoTimeLimit) {
            this.swiper.slideNext();
            currentVideo.pause();
            currentVideo.currentTime = 0;
          }
        });
      }
    });
  }
}
