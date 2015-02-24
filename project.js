////////////////////////////////////////////////////////////////////////////////
var projects = ['first', 'second', 'third'];
var project_number = projects.length
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
  count %= project_number;
  if ($('.project.' + projects[count]).position().left == 0 ){
    var next = (count + (project_number - 1)) % project_number
    moveLeft(projects[count], projects[next]);
    count += (project_number - 1);
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
  count %= project_number;
  if ($('.project.' + projects[count]).position().left == 0 ){
    moveRight(projects[count], projects[(count + 1) % project_number]);
    count += 1;
  };
});
////////////////////////////////////////////////////////////////////////////////

$( document ).ready(function() {
  $( window ).scroll(function(){
      $('.prime').animate({
        height:'100px',
        }, 2000, "easeInOutQuad");
      $('.face').animate({
        width: '90px',
        height: '90px',
        margin: '5px',
        left: 0,
        top: 0,
        }, 2000, "easeInOutQuad");
      $('.project-block').animate({
        top: 0,
        }, 2000, "easeInOutQuad");
      $('.info').animate({
        top: '10px',
        left: '100px',
        width: '100px',
        margin: 0,
        }, 2000, "easeInOutQuad");
      $('.icon-large').animate({
        width: '40px',
        height: '40px',
        margin: 0,
        }, 2000, "easeInOutQuad");
   });
});
