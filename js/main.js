
// init controller
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: 800,
    offset: 50
})
    .setPin("#wrapper") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller



controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});

$(document).on("click", "a[href^='#']", function(e) {
    var id = $(this).attr("href");
    e.preventDefault();
    controller.scrollTo(id);
});


