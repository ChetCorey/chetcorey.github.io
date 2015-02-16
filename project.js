////////////////////////////////////////////////////////////////////////////////
var projects = ['first', 'second', 'third', 'fourth'];
var count = 0;
var maxWidth = $('.project').width();
////////////////////////////////////////////////////////////////////////////////
function moveLeft(current, next) {
  $('.project.' + next).css({right: 0, left: '100%'});
  $('.project.' + current ).animate({
      opacity: 0, right: "100%", width: 0}, {
        queue: false,
        duration: 800
      });
  $('.project.' + next ).animate({
      opacity: 1, left: 0, width: "100%"}, {
        queue: false,
        duration: 800,
        complete: function() {$( '.project.' + current ).css('right', 0)}
      });
};

$( '.left' ).click(function() {
  count %= 4;
  console.log(count);
  if ($('.project.' + projects[count]).width() == maxWidth ){
    var next = (count + 3) % 4
    moveLeft(projects[count], projects[next]);
    count += 3;
  };
});
////////////////////////////////////////////////////////////////////////////////
function moveRight(current, next) {
  $('.project.' + next).css({left: 0, rigth: '100%'});
  $('.project.' + current ).animate({
      opacity: 0, left: "100%", width: 0}, {
        queue: false,
        duration: 800
      });
  $('.project.' + next ).animate({
      opacity: 1, left: 0, width: "100%"}, {
        queue: false,
        duration: 800,
        complete: function() {$( '.project.' + current ).css('left', 0)}
      });
};

$( '.right' ).click(function() {
  count %= 4;
  if ( $('.project.' + projects[count]).width() == maxWidth ){
    moveRight(projects[count], projects[(count + 1) % 4]);
    count += 1;
  };
});
////////////////////////////////////////////////////////////////////////////////
