var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/* global $ */

var Pumpkin = function Pumpkin(pie) {
    classCallCheck(this, Pumpkin);

    console.log('You ate ' + pie + ' pie.');
};

var pumpkin = new Pumpkin('banana cream');

$(document).ready(function () {
    var menu = $('nav > ul'),
        menuLink = $('#mobile-menu a');
    menuLink.on('click', function () {
        if (menu.hasClass('closed')) {
            menu.removeClass('closed');
            menu.addClass('open');
        } else {
            menu.removeClass('open');
            menu.addClass('closed');
        }
    });
});
