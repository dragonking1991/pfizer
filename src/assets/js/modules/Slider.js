import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay])
    const autoSlide = ~~(this.el.getAttribute('data-autoslide')) || ''
    console.log('autoSlide', autoSlide);
    const videos = this.el.querySelectorAll('video')
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (window.innerWidth > 1024 && !isMobile) {
      videos.forEach(video => {
        video.removeAttribute('muted');
      });
    }

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      // effect:'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      loop: true,
      autoplay: {
        delay: autoSlide || 10000,
        stopOnLastSlide: true
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
      // const btnMuted = currentSlide.querySelector('button');

      if (currentVideo) {
        currentVideo.play();
        currentVideo.addEventListener('ended', (e) => {
          this.swiper.slideNext();
        });
        // btnMuted.setAttribute('data-mute', currentVideo.muted)
        // btnMuted.addEventListener('click', (e) => {
        //   btnMuted.setAttribute('data-mute', !currentVideo.muted)
        //   currentVideo.muted = !currentVideo.muted;
        // });
        currentVideo.addEventListener('timeupdate', (e) => {
          if (videoTimeLimit && currentVideo.currentTime >= videoTimeLimit) {
            this.swiper.slideNext();
            currentVideo.pause();
            currentVideo.currentTime = 0;
            this.swiper.params.autoplay = {
              delay: autoSlide || 10000,
              stopOnLastSlide: true
            };
          }
        });
      }
    });
  }
}
