import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay, EffectFade])
    const autoSlide = ~~(this.el.getAttribute('data-autoslide')) || ''
    console.log('autoSlide', autoSlide);

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      loop: true,
      preloadImages: true,
      preloadVideos: true,
      cache: true,
      autoplay: {
        delay: autoSlide || 10000,
        disableOnInteraction: false,
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
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (currentVideo) {
        currentVideo.play();
        this.swiper.autoplay.stop();
        this.isStopAutoplay = true

        // if (window.innerWidth > 1024 && !isMobile) {
        //   currentVideo.muted = false;
        // }

        currentVideo.addEventListener('pause', (e) => {
          console.log('pause',this.isStopAutoplay);
          this.isStopAutoplay && this.swiper.autoplay.start()
        });
        currentVideo.addEventListener('ended', (e) => {
          this.handleVideoEnd()
        });

        currentVideo.addEventListener('timeupdate', (e) => {
          if (videoTimeLimit && currentVideo.currentTime >= videoTimeLimit) {
            this.handleVideoEnd(currentVideo)
          }
        });
      }
    });
  }

  handleVideoEnd(video) {
    if (document.fullscreenElement) {
      console.log('fullscreenElement');
      document.exitFullscreen().then(() => {
        this.swiper.slideNext();
        this.swiper.autoplay.start();
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    } else {
      this.swiper.slideNext();
      this.swiper.autoplay.start();
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    this.isStopAutoplay = false
  }
}
