import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectFade, Navigation, Thumbs, Controller, Parallax } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay, EffectFade])
    const autoSlide = ~~(this.el.getAttribute('data-autoslide')) || ''
    console.log('autoSlide', autoSlide);
    // const videos = this.el.querySelectorAll('video')
    // if(window.innerWidth < 1024) {
    //   videos.forEach(video => {
    //     video.setAttribute('muted', true)
    //   });
    // }

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: autoSlide || 10000,
        // pauseOnMouseEnter: false,
        // waitForTransition: true
      },
    })

    this.swiper?.on('slideChange', (event) => {
      const previousSlide = event.slides[event.previousIndex];
      const previousVideo = previousSlide.querySelector('video');

      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0;
      }

      const currentSlide = event.slides[event.activeIndex];
      const currentVideo = currentSlide.querySelector('video');
      const videoTimeLimit = ~~(currentVideo?.getAttribute('data-time-limit')) || ''

      if (currentVideo) {
        console.log('currentVideo', currentVideo);
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
