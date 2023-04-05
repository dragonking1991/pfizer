import BaseModule from './BaseModule'
export default class HandleShowTime extends BaseModule {

  register() {
    this.isInteracted = false
    this.slide = this.el.querySelector('.slide')
    this.timeSlide = ~~(this.slide.getAttribute('data-auto')) || 120000
    this.slideLimit = ~~(this.slide.getAttribute('data-limit')) || 120000

    this.intro = this.el.querySelector('.video-intro')
    this.introVideo = this.intro.querySelector('video')
    this.introTime = ~~(this.introVideo.getAttribute('data-limit'))

    this.rmk = this.el.querySelector('.video-rwe')
    this.rmkVideo = this.rmk.querySelector('video')
    this.rmkTime = ~~(this.rmkVideo.getAttribute('data-limit'))

    this.idxCurrent = 0
    this.sequence = [
      { item: this.slide, time: this.slideLimit },
      { item: this.intro, time: this.introTime * 1000 || this.introVideo.duration * 1000, video: this.introVideo },
      // { item: this.slide, time: this.slideLimit },
      // { item: this.rmk, time: this.rmkTime * 1000 || this.rmkVideo.duration * 1000, video: this.rmkVideo }
    ]

    document.addEventListener('click', (e) => {
      this.isInteracted = true
    });

    this.runSequence()
  }

  runSequence() {
    // clear previous active
    const prev = (this.idxCurrent - 1) >= 0 ? this.sequence[this.idxCurrent - 1] : this.sequence[this.sequence.length - 1]
    prev.item.classList.remove('slide-active')
    // console.log('prev', prev);
    if (prev.video) {
      prev.video.pause();
      prev.video.currentTime = 0;
    }

    // add current active
    this.current = this.sequence[this.idxCurrent]
    this.current.item.classList.add('slide-active')
    this.sequenceTimeout && clearTimeout(this.sequenceTimeout)
    // console.log('current', this.current);

    if (this.current.video) {
      this.clearSlideInterval()
      this.handleCurrentVideo(this.current)
    } else {
      this.handleSlide()
    }

    this.idxCurrent = this.idxCurrent < (this.sequence.length - 1) ? this.idxCurrent + 1 : 0
    // console.log('===idxCurrent', this.idxCurrent);
    this.sequenceTimeout = setTimeout(() => {
      this.runSequence()
    }, this.current.time);
  }

  addSequenceTimeout() {
    this.sequenceTimeout = setTimeout(() => {
      this.runSequence()
    }, this.current.time);
  }

  clearSequenceTimeout() {
    this.sequenceTimeout && clearInterval(this.sequenceTimeout)
  }

  clearSlideInterval() {
    this.slideInterval && clearInterval(this.slideInterval)
  }

  handleSlide() {
    this.slideInterval = setInterval(() => {
      if (this.slide.classList.contains('leaderboard--update')) {
        this.slide.classList.remove('leaderboard--update')
      } else {
        this.slide.classList.add('leaderboard--update')
      }
    }, this.timeSlide)
  }

  handleCurrentVideo(current) {
    const currentVideo = current.video
    const videoTimeLimit = ~~(currentVideo?.getAttribute('data-time-limit')) || ''
    const btnPlayVideo = current.item?.querySelector('button')
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // this.swiper.autoplay.stop();

    if (window.innerWidth > 1024 && !isMobile && this.isInteracted) {
      currentVideo && (currentVideo.muted = false);
    }

    const promise = currentVideo.play();
    if (promise !== undefined) {
      promise.then(() => {
      }).catch(error => {
        // btnPlayVideo.classList.remove('hidden')
        document.addEventListener('click', (e) => {
          // btnPlayVideo.classList.add('hidden')
          this.isInteracted = true
          currentVideo.play()
          // this.addSequenceTimeout()
          if (window.innerWidth > 1024 && !isMobile) {
            currentVideo && (currentVideo.muted = false);
          }
        });
        this.clearSequenceTimeout()
      });
    }

    !this.isInteracted && document.addEventListener('click', (e) => {
      // btnPlayVideo.classList.add('hidden')
      this.isInteracted = true
      if (window.innerWidth > 1024 && !isMobile) {
        currentVideo && (currentVideo.muted = false);
      }
    });


    // currentVideo.addEventListener('pause', (e) => {
    //   this.isStopAutoplay && this.swiper.autoplay.start()
    // });

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
    this.runSequence()
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    } else {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  }

}
