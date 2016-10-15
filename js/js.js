// window.onload = function() {
//   document.body.scrollTop = 0 + 'px';
//   // document.body.setAttribute('style', 'overflow: hidden');
//
//   document.addEventListener('scroll', function(event){
//     console.log('do');
//   });
//
//   console.log(document.getElementsByClassName("show-content").length);
//   for(var i = 0; i < document.getElementsByClassName("show-content").length; i++){
//     document.getElementsByClassName("show-content")[i].addEventListener('click', showContentClick);
//   }
//
//   function showContentClick(){
//     scrollTo(document.getElementById('home-section'), -window.innerHeight , 300);
//   }
//
//   function scrollTo(element, to, duration) {
//     if (duration <= 0) return;
//     var topMargin = element.style.marginTop;
//     if(isNaN(topMargin)) topMargin = 0;
//     var difference = to - topMargin;
//     var perTick = difference / duration * 10;
//     setTimeout(function() {
//         element.style.marginTop = topMargin + perTick + 'px';
//         if (element.offsetTop === to){
//           // document.body.setAttribute('style', 'overflow: hidden');
//           return;
//         }
//         scrollTo(element, to, duration - 10);
//     }, 10);
//   }
//
// };

$(window).ready(function(event){
  console.log('ready');

  $('.fa-close').click(function(e){
    $(this).parent('span').parent('div').css('animation', 'drop-down 1s ease backwards');
  });

  $('#about-me').click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $('#about-section').offset().top
    }, 300);
  });

  $('.elem-to-move-up').each(function(index, value){
    // prepareForAnimation($(this), 'down', 500);
    $(this).addClass('no-transition');
    $(this).css('top', 250 * (index+1) + 'px');
    $(this).css('animation', 'rotate-up-anim .5s forwards ease-out');
    animateUp($(this), 1000, 'top', -10);
  });

  $(window).resize(function(event){
    $('.vertical-separator').each(function(e){
      if($(this) .outerHeight() > parseInt($('.name-title').outerHeight()) +1 ||
        $(this) .outerHeight() < parseInt($('.name-title').outerHeight()) + 1){
                spreadVerticalSeparator(  $(this), 0);
                console.log('finished');
          }
    });
  });

  function animateElements(elem, duration, direction, to){

  }



  function prepareForAnimation(elem, direction, amount){
      elem.css(getStartDirection(direction), amount + 'px');
  }

  function animateUp(elem, duration, direction, to){
    if(duration <= 0) return;
    var marginToAffect = getAnimationDirection(direction);
    console.log('top: ' + marginToAffect);

    if (elem.hasClass('horizontal-separator'))
    {
      // elem.animate({
      //   'top': 0 + 'px'
      // }, duration, function(){
      //   elem.css('opacity', '1');
      //   elem.animate({
      //     'width', '30%'
      //   }, duration);
      // });
      elem.animate({
        'top': 0 + 'px'
      }, duration, function(){
          spreadHorizontalSeparator(elem, duration);
          console.log('finished');
      });
    }
    else if(elem.hasClass('vertical-separator'))
    {
      elem.animate({
        'top': 0 + 'px'
      }, duration, function(){
          spreadVerticalSeparator(elem, duration);
          console.log('finished');
      });
    }
    else {
      elem.animate({
        'top': 0 + 'px',
        'opacity': 1
      }, duration, function(){
        $(this).removeClass('no-transition');
      });
    }
    console.log('top: ' + elem.marginTop);
  }
  function spreadHorizontalSeparator(elem, duration){
    elem.css('opacity', 1);
    elem.animate({
      'width':  '100%'
    }, duration);
  }

  function spreadVerticalSeparator(elem, duration){
    console.log('happen');
    elem.css('opacity', 1);
      elem.css('position', 'absolute');
    if(elem.hasClass('left')){
      elem.css('margin-top', parseInt($('.name-title').outerHeight()) + 1 + 'px');
      elem.animate({
        'margin-top': '0px',
        'height': Math.round(parseInt($('.name-title').outerHeight())) + 2 + 'px'
      }, duration);
    } else {
      console.log('right');
      elem.animate({
        'margin-top': '0px',
        'height': Math.round(parseInt($('.name-title').outerHeight())) + 2 + 'px'
      }, duration);
    }
  }

  function getStartDirection(direction){
    switch(direction){
      case 'left':
        return 'margin-right';
      break;
      case 'right':
        return 'margin-left';
      break;
      case 'top':
        return 'margin-bottom';
      break;
      case 'down':
        return 'margin-top';
      break;
    }
  }

  function getAnimationDirection(direction){
    switch(direction){
      case 'left':
        return 'margin-left';
      break;
      case 'right':
        return 'margin-right';
      break;
      case 'top':
        return 'margin-top';
      break;
      case 'down':
        return 'margin-bottom';
      break;
    }
  }

});
