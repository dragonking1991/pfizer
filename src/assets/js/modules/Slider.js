import BaseModule from './BaseModule'
import Swiper from 'swiper';
// import 'swiper/css';
export default class Slider extends BaseModule {

  register() {
    this.swiper = new Swiper(this.el, {
      slidesPerView: 1,
      spaceBetween: 30,
    })
  }
}
