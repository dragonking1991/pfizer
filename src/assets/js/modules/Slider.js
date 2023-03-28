import BaseModule from './BaseModule'
import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css'
export default class Slider extends BaseModule {

  register() {
    Swiper.use([Autoplay])
    const autoSlide = ~~(this.el.getAttribute('data-autoslide')) || ''
    console.log('autoSlide', autoSlide);
    // const videos = this.el.querySelectorAll('video')
    // if(window.innerWidth > 1024) {
    //   videos.forEach(video => {
    //     video.muted= false
    //   });
    // }

    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: autoSlide || 10000,
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
        // Check if the device is a mobile device
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          // Mute the video and enable autoplay to prevent user interaction
          currentVideo.muted = true;
          currentVideo.autoplay = true;
          currentVideo.setAttribute('playsinline', '');
          currentVideo.setAttribute('muted', '');
        } else {
          // Play the video with sound
          currentVideo.play();
        }
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
          }
        });
      }
    });
  }
}
