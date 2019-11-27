$("#carouselWithIndicators").carousel({
  interval: 6000
})

function init() {

  $('.add').click(function () {
    
    let btnVal = $(this).attr("value");
    let percent = ($("#my-progress-bar").width() / $('.progress').width()) * 100
    let val = (+btnVal) + Math.round(+percent) + '%';
    $('#my-progress-bar').width(val)
  });

  $('.clear').click(function () {
    $('#my-progress-bar').width(0);
  });

}

$(document).ready(init);