// $('.project').click(function() {
//
//     $(this).animate({ opacity: 1, border: 0, opacity: 1,
//  visibility: "hidden"}, 1000);
//     // $(this).animate({ "height" : "50px"}, 1000);
//     // $(this).animate({ "top" : "200px"}, 1000);
//     // $(this).animate({ "left" : "0px"}, 1000);
//     // $(this).animate({ "top" : "0px"}, 1000);
//     // $(this).animate({ "width" : "300px", "height" : "300px"}, 1000);
//
// });


////////////////////////////////////////////////////////////////////////////////
//
function projects(current, next) {
  if ( $('.project.' + current).width() == 686 ){
    $( '.project.' + current ).animate({
        opacity: 0, left: "85%", width: 0}, {
          queue: false,
          duration: 1500,
          });
    $( '.project.' + next ).animate({
        opacity: 1, left: 0, width: "85%"}, {
          queue: false,
          duration: 1500,});
  }
};

  // if ($('.project').width() > 0 ){
  //   var pro = $('.project').filter();
  //   alert(pro.text());
  // }

////////////////////////////////////////////////////////////////////////////////
// function myFunction() {
//   // var width = document.getElementById('.project.first').width;
//   var projectFirst = $('.project.first')
//   $('.debugger').html((projectFirst.width()));
//
// }

var proja = ['first', 'second', 'third', 'fourth'];
var count = 0;
$( '.left' ).click(function() {
  projects(proja[count], proja[count + 1]);
  setTimeout(function(){
    count += 1;
}, 1600);

  // projects('second', 'third');
  // projects('third', 'fourth');
  // projects('fourth', 'first');
});
////////////////////////////////////////////////////////////////////////////////
// var window = function projectFinder(current, next) {
//   if ( $('.project.' + current).width() == 686 ){
//     $( '.project.' + current).animate({opacity: 0, left: "85%", width: 0}, {
//         queue: false,
//         duration: 1500,})
//     $( '.project.' + next ).animate({
//       opacity: 1, width: "85%"}, {
//         queue: false,
//         duration: 1500,})
//
//     $( '.project.' + current).animate({left: 0}, {
//         queue: false,
//         duration: 1,})
//     }
// }
//
// window('' + 'first', 'second')
////////////////////////////////////////////////////////////////////////////////
