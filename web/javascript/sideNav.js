// Initialize collapse button
$(".button-collapse").sideNav({
    menuWidth: 250,
    onOpen: function(el) {
        $('.hamburger').text('arrow_back');
    }, // A function to be called when sideNav is opened
      onClose: function(el) {
          $('.hamburger').text('menu');
      }
});
