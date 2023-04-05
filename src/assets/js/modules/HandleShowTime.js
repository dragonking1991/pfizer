import BaseModule from './BaseModule'
export default class HandleShowTime extends BaseModule {

  register() {
    this.slide = this.el.querySelector('.slide')
    this.timeSlide = this.slide.getAttribute('data-auto') || 120000
    this.slideLimit = this.slide.getAttribute('data-limit') || 120000

    this.intro = this.el.querySelector('.video-intro')
    console.log(this.intro);
    this.introVideo = this.intro.querySelector('video')
    this.introTime = ~~(this.introVideo.getAttribute('data-limit'))
    this.initSequence = true

    this.rmk = this.el.querySelector('.video-rmk')
    this.rmkVideo = this.rmk.querySelector('video')
    this.rmkTime = ~~(this.rmkVideo.getAttribute('data-limit'))

    this.sequence = [
      { item: this.slide, time: this.slideLimit },
      { item: this.intro, time: this.introTime * 1000 || this.introVideo.duration, video: this.introVideo },
      { item: this.rmk, time: this.rmkTime * 1000 || this.rmkVideo.duration, video: this.rmkVideo }
    ]
    this.idxCurrent = 0
    this.current = this.sequence[this.idxCurrent]
    console.log('init', this.sequence, this.current);

    this.sequenceTimeout = setTimeout(this.runSequence(), this.current.time);
  }

  runSequence() {
    this.sequenceTimeout && clearTimeout(this.sequenceTimeout)
    if (!this.current.item.classList.contains('slide')) {
      this.handleCurrentVideo(this.current.video)
    } else {
      this.slideInterval && clearInterval(this.slideInterval)
      this.handleSlide()
    }

    if (this.initSequence) {
      this.initSequence = false
    } else {
      this.current?.item.classList.remove('slide-active')
      this.idxCurrent = this.idxCurrent < (this.sequence.length - 1) ? this.idxCurrent + 1 : 0
      this.current = this.sequence[this.idxCurrent]
      console.log('runSequence', this.idxCurrent, this.current);
      this.current.item.classList.add('slide-active')
    }

    // console.log('sequenceNext',this.sequenceNext.time, this.idxCurrent);
    this.sequenceTimeout = setTimeout(this.runSequence(), this.current.time);
  }

  handleSlide() {
    console.log('handleSlide', this.timeSlide);
    this.slideInterval = setInterval(() => {
      if (this.slide.classList.contains('leaderboard--update')) {
        this.slide.classList.remove('leaderboard--update')
      } else {
        this.slide.classList.add('leaderboard--update')
      }
    }, this.timeSlide)
  }

  handleCurrentVideo(currentVideo) {
    const videoTimeLimit = ~~(currentVideo?.getAttribute('data-time-limit')) || ''
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // this.swiper.autoplay.stop();
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
        // this.swiper.slideNext();
        // this.swiper.autoplay.start();
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    } else {
      // this.swiper.slideNext();
      // this.swiper.autoplay.start();
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
    // this.isStopAutoplay = false
  }

}
