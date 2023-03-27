import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay, EffectFade, Navigation])
    this.next = this.el.querySelector('.swiper-button-next')
    this.prev = this.el.querySelector('.swiper-button-prev')
    console.log(this.el,this.next, this.prev);

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1, effect: "fade", spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 10000,
        pauseOnMouseEnter: false,
        waitForTransition: true
      },
      navigation: {
        nextEl: this.next,
        prevEl: this.prev,
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
      console.log('videoTimeLimit',videoTimeLimit);
      // const mySlider = swiperEl.swiper
      if (currentVideo) {
        currentVideo.play();
        currentVideo.addEventListener('ended', (e) => {
          this.wrapper.slideNext();
        });
        currentVideo.addEventListener('timeupdate', (e) => {
          if (videoTimeLimit && currentVideo.currentTime >= videoTimeLimit) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            console.log('this.wrapper', this.wrapper, this.el);
            // this.wrapper.slideNext();
            console.log('this.next',this.next);
            this.next.click()
          }
        });
      }
    });
  }
}
