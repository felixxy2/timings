/**
 * Spigot Timings Parser
 *
 * Written by Aikar <aikar@aikar.co>
 *
 * @license MIT
 */

$(document).ready(function () {
  $('#paste_toggle').click(function () {
    $('#paste').toggle();
  });
  $('.show_rest').click(function () {
    $(this).parent().find('.hidden').toggle();
  });
  var data = window.timingsData || {
    ranges:[],
    start: 1,
    end: 1
  };
  var values = data.ranges;
  var start = data.start;
  var end = data.end;

  $('#time-selector').slider({
    min: 0,
    max: values.length - 1,
    values: [values.indexOf(start), values.indexOf(end)],
    range: true,
    slide: function(event, ui) {
      start = values[ui.values[0]];
      end = values[ui.values[1]];
      updateRanges();
      goRange();
    }
  });
  updateRanges();

  var redirectTimer = 0;
  function goRange() {
    if (redirectTimer) {
      clearTimeout(redirectTimer);
    }
    redirectTimer = setTimeout(function() {
      window.location = "?id=" + data.id + "&start=" + start + "&end=" + end;
    }, 1000);
  }
  function updateRanges() {
    var startDate = new Date(start*1000);
    var endDate = new Date(end*1000);

    $('#start-time').text(startDate.toLocaleString());
    $('#end-time').text(endDate.toLocaleString());
  }

  $('.button').button();

  setTimeout(function() {
    var adCount = $('.adsbygoogle').length;
    if (adCount) {
      $('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js">').appendTo("body");

      for (var i = 0; i < adCount; i++) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }, 1000)
});
function showInfo(btn) {
  $("#info-" + $(btn).attr('info')).dialog({width: "80%", modal: true});
}