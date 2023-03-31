import BaseModule from './BaseModule'
import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay])
    const autoSlide = ~~(this.el.getAttribute('data-autoslide')) || ''
    console.log('autoSlide', autoSlide);

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      loop: true,
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
      const btnPlayVideo = currentSlide.querySelector('button');

      const videoTimeLimit = ~~(currentVideo?.getAttribute('data-time-limit')) || ''
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      btnPlayVideo?.classList.add('hidden')

      if (currentVideo) {
        if (window.innerWidth > 1024 && !isMobile) {
          currentVideo.muted = false;
        }
        this.swiper.autoplay.stop();
        this.isStopAutoplay = true
        const promise = currentVideo.play();
        if (promise !== undefined) {
          promise.then(_ => {
            // Autoplay started!
            // console.log("Autoplay started!");
          }).catch(error => {
            btnPlayVideo.classList.remove('hidden')
            btnPlayVideo.addEventListener('click', (e) => {
              currentVideo.play()
              btnPlayVideo.classList.add('hidden')
            });
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
          });
        }

        currentVideo.addEventListener('pause', (e) => {
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
