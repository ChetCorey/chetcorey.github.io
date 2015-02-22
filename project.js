////////////////////////////////////////////////////////////////////////////////
var projects = ['first', 'second', 'third', 'fourth'];
var count = 0;
var maxWidth = $('.project').width();
////////////////////////////////////////////////////////////////////////////////
function moveRight(current, next) {
  $('.project.' + next).css({left: '110%'});
  $('.project.' + current ).animate({
    left: '-110%'}, 1000, "easeInOutQuad"
    );
  $('.project.' + next ).animate({
    left: 0}, 1000, "easeInOutQuad"
    );
};

$( '.left' ).click(function() {
  count %= 4;
  if ($('.project.' + projects[count]).position().left == 0 ){
    var next = (count + 3) % 4
    moveLeft(projects[count], projects[next]);
    count += 3;
  };
});
////////////////////////////////////////////////////////////////////////////////
function moveLeft(current, next) {
  $('.project.' + next).css({ left: "-110%"});
  $('.project.' + current ).animate({
    left: "110%"},  1000, "easeInOutQuad"
    );
  $('.project.' + next ).animate({
    left: 0},  1000, "easeInOutQuad"
    );
};

$( '.right' ).click(function() {
  count %= 4;
  if ($('.project.' + projects[count]).position().left == 0 ){
    moveRight(projects[count], projects[(count + 1) % 4]);
    count += 1;
  };
});
////////////////////////////////////////////////////////////////////////////////


console.log($(window).scrollTop());
$( document ).ready(function() {
  $( window ).scroll(function(){
      $('.prime').animate({
        height:'110px',
        }, 2000, "easeInOutQuad");
      $('.face').animate({
        width: '90px',
        height: '90px',
        margin: '5px',
        left: 0,
        top: 0,
        boxShadow: '4px 4px 4px 0 rgba(0,0,0,.5)',
        }, 2000, "easeInOutQuad");
        $('.project-block').animate({
          top: 0,
          }, 2000, "easeInOutQuad");
   });
});
