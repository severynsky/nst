import './assets/main.sass';
import $ from 'jquery';
console.log('hello!');

$('.side-nav-handler').click(() => {
  $('.offscreen-container').toggleClass('active-offscreen');
  $('.side-nav-handler').toggleClass('active-button');
  console.log('hello');
})
