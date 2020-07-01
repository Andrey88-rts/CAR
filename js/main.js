$('.link-call').click(function (e) {
  e.preventDefault();
  $('.popup-backcall').css({
    'opacity': 1,
    'visibility': 'visible',
    'transition': 'all 0.8s'
    
  });  
  
});

$('.button-click').click(function (e) { 
  e.preventDefault();
  $('.popup-fastoffer').css({
    'opacity': 1,
    'visibility': 'visible',
    'transition': 'all 0.8s'
    
  });
});

$('.button-close, .popup-fastoffer, .popup-thanks, .popup-backcall').click(function (e) { 
  e.preventDefault();
  $('.popup-fastoffer, .popup-thanks, .popup-backcall').css({
    'opacity': 0,
    'visibility': 'hidden',
    'transition': 'all 0.8s'    
  });
  
});

$('.button-modal').click(function (e) { 
  e.preventDefault();
  $('.popup-fastoffer').css({
    'opacity': 0,
    'visibility': 'hidden',
    'transition': 'all 0.8s'});
  $('.popup-thanks').css({
    'opacity': 1,
    'visibility': 'visible',
    'transition': 'all 0.8s'
    
  });
  
});

$('.button-form').click(function (e) { 
  e.preventDefault();
  $('.popup-thanks').css({
    'opacity': 1,
    'visibility': 'visible',
    'transition': 'all 0.8s'
  
});
});