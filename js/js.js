window.onload = function() {
  document.body.scrollTop = 0 + 'px';
  document.body.setAttribute('style', 'overflow: hidden');

  document.addEventListener('scroll', function(event){

  });

  console.log(document.getElementsByClassName("show-content").length);
  for(var i = 0; i < document.getElementsByClassName("show-content").length; i++){
    document.getElementsByClassName("show-content")[i].addEventListener('click', showContentClick);
  }

  function showContentClick(){
    scrollTo(document.getElementById('home-section'), window.innerHeight , 300);
  }

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var topMargin = parseInt(element.style.marginTop);
    console.log('t: ' + topMargin);
    var difference = to - topMargin;
    var perTick = difference / duration * 10;
    setTimeout(function() {
        element.style.marginTop = topMargin + perTick + 'px';
        if (parseInt (element.style.marginTop) === to){
          document.body.setAttribute('style', 'overflow: hidden');
          return;
        }
        scrollTo(element, to, duration - 10);
    }, 10);
  }

};
