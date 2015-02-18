////////////////////////////////////////////////////////////////////////////////
var projects = ['first', 'second', 'third', 'fourth'];
var count = 0;
var maxWidth = $('.project').width();
////////////////////////////////////////////////////////////////////////////////
var currentProject = $(".first h1").text();
$(".content-full header h1").text(currentProject);
// $(".block-left").load("https://www.girldevelopit.com/");

////////////////////////////////////////////////////////////////////////////////
function moveLeft(current, next) {
  console.log(next);
  $('.project .' + next).css({right: 0, left: '100%'});
  $('.project .' + current ).animate({
    opacity: 0, left: '-100%'}, {
      queue: true,
      duration: 1000,
    });
  $('.project .' + next ).animate({
    opacity: 1, left: 0, width: "100%"}, {
      queue: true,
      duration: 1000,
      complete: function() {$( '.project .' + current ).css('right', 0)}
    });
  var currentProject = $("." + next + " h1").text();
  $(".content-full header h1").text(currentProject);
};

$( '.left' ).click(function() {
  count %= 4;
  if ($('.project .' + projects[count]).width() == maxWidth ){
    var next = (count + 3) % 4
    moveLeft(projects[count], projects[next]);
    count += 3;
  };
});
////////////////////////////////////////////////////////////////////////////////
function moveRight(current, next) {
  $('.project .' + next).css({width: 0, left: 0, rigth: '100%'});
  $('.project .' + current ).animate({
      opacity: 0, left: "100%", width: 0}, {
        queue: false,
        duration: 1000
      });
  $('.project .' + next ).animate({
      opacity: 1, right: 0, width: "100%"}, {
        queue: false,
        duration: 1000,
        complete: function() {$( '.project .' + current ).css('left', 0)}
      });
  var currentProject = $("." + next + " h1").text();
  $(".content-full header h1").text(currentProject);
};

$( '.right' ).click(function() {
  count %= 4;
  if ( $('.project .' + projects[count]).width() == maxWidth ){
    moveRight(projects[count], projects[(count + 1) % 4]);
    count += 1;
  };
});
////////////////////////////////////////////////////////////////////////////////
