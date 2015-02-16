var projectsArray = ['first', 'second', 'third', 'fourth'];
var count = 0;
var maxWidth = $('.project').width();

function moveRight(current, next) {
  console.log("Right " + current + " "+ next);

  if ( $('.project.' + current).width() == maxWidth ){
    $('.project.' + next).css('left', 0);
    $( '.project.' + current ).animate({
        opacity: 0, left: "100%", width: 0}, {
          queue: false,
          duration: 1500});
    $( '.project.' + next ).animate({
        opacity: 1, left: 0, width: "100%"}, {
        queue: false,
        duration: 1500,
        complete: function() {
          $( '.project.' + current ).css('left', 0)}
        }
      );
  };
};

function moveLeft(current, next) {
  console.log("Left " + current + " "+ next);

  if ( $('.project.' + current).width() == maxWidth ){
    $('.project.' + next).css({'right': 0, 'left': "100%"});
    $('.project.' + current).animate({
      opacity: 0, right: "100%", width: 0}, {
      queue: false,
      duration: 1500});
    $( '.project.' + next ).animate({
      opacity: 1, left: 0 , width: "100%"}, {
      queue: false,
      duration: 1500,
      complete: function() {
        $( '.project.' + current ).css('right', 0)}});
  };
};

$( '.left' ).click(function() {
  count %= 4;
  console.log(count);
  if ($('.project.' + projectsArray[count]).width() == maxWidth ){
    var next = (count + 3) % 4
    moveLeft(projectsArray[count], projectsArray[next]);
    count += 3;
  };
});

$( '.right' ).click(function() {
  count %= 4;
  if ( $('.project.' + projectsArray[count]).width() == maxWidth ){
    moveRight(projectsArray[count], projectsArray[(count + 1) % 4]);
    count += 1;
  };
});
