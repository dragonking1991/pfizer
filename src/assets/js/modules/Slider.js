import BaseModule from './BaseModule'
import Swiper, { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay, EffectCoverflow])
    const autoSlide = ~~(this.el.getAttribute('data-autoslide')) || ''
    const timeUpdateMain = ~~((autoSlide * 4) / 10)
    console.log('autoSlide', autoSlide, timeUpdateMain);

    this.slidechange = 0

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      effect: 'coverflow',
      preloadVideos: true,
      cache: true,
      autoplay: {
        delay: autoSlide || 10000,
        disableOnInteraction: false,
      },
      on: {
        init: (event) => {
          const currentSlide = event.slides[event.activeIndex];
          this.timeout && clearTimeout(this.timeout)
          if (currentSlide.classList.contains('slide--main')) {
            this.timeout = setTimeout(() => {
              currentSlide.classList.add('leaderboard--update')
            }, timeUpdateMain)
          }
        },
      },
    })

    this.swiper?.on('slideChange', (event) => {
      const previousSlide = event.slides[event.previousIndex];
      if (previousSlide?.classList.contains('slide--main')) {
        previousSlide.classList.remove('leaderboard--update')
      }

      const previousVideo = previousSlide.querySelector('video');
      if (previousVideo) {
        previousVideo.pause();
        previousVideo.currentTime = 0;
      }

      const currentSlide = event.slides[event.activeIndex];
      const currentVideo = currentSlide.querySelector('video');
      const btnPlayVideo = currentSlide.querySelector('button');
      btnPlayVideo?.classList.add('hidden')
      currentVideo && this.handleCurrentVideo(currentVideo)

      this.timeout && clearTimeout(this.timeout)
      if (currentSlide.classList.contains('slide--main')) {
        this.timeout = setTimeout(() => {
          currentSlide.classList.add('leaderboard--update')
        }, timeUpdateMain)
      }
    });
  }

  handleCurrentVideo(currentVideo) {
    const videoTimeLimit = ~~(currentVideo?.getAttribute('data-time-limit')) || ''
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    this.swiper.autoplay.stop();
    this.isStopAutoplay = true
    if (window.innerWidth > 1024 && !isMobile) {
      currentVideo.muted = false;
    }

    const promise = currentVideo.play();
    if (promise !== undefined) {
      promise.then(() => {

      }).catch(error => {
        btnPlayVideo.classList.remove('hidden')
        btnPlayVideo.addEventListener('click', (e) => {
          currentVideo.play()
          btnPlayVideo.classList.add('hidden')
        });
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

  handleVideoEnd(video) {
    if (document.fullscreenElement) {
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
