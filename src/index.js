import './assets/main.sass';
import $ from 'jquery';

const offscreenNav = $('.offscreen-container')
const blackCurtain = $('.black-curtain');
let navOpened = false;
$('.side-nav-handler').click( () => {
  if (!navOpened) {
    $('.nav-item').each( (i, el) => {
      $(el).delay((i++) * 180).fadeIn();
    })
    navOpened = true;
  } else {
    $('.nav-item').fadeOut(1);
    navOpened = false;
  }
  offscreenNav.fadeIn(0)
  offscreenNav.toggleClass('active-offscreen');
  blackCurtain.toggleClass('show-curtain');
  $('.side-nav-handler ul').toggleClass('active-button');
})


blackCurtain.click( () => {
  offscreenNav.removeClass('active-offscreen');
  blackCurtain.removeClass('show-curtain');
  $('.side-nav-handler ul').removeClass('active-button');
});

$( 'body' ).mousemove( event => {
  let msg = 'Handler for .mousemove() called at ';
  const mX = Math.round((window.innerWidth/2 - event.pageX));
  const mY = Math.round((window.innerHeight/2 - event.pageY));
  $('.big-feather').css('-webkit-transform', 'translate3d(' + mX/100 + 'px, ' + mY/100 + 'px, 0)')
});
