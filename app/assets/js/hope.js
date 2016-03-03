// Using JSONP
$.ajax({
  url: "https://osc.hul.harvard.edu/dash/api/hope/jsonp/", 
  dataType: "jsonp",
  jsonp: "callback",
  jsonpCallback: 'callback',
  success: function( response ) {
    var byYear = {};
    $.each(response, function(index, item) {
      // we're getting a precomposed citation with the link in it.
      // composing it here was not as reliable, and I'm not sure it's
      // safer.
      try {
        byYear[item.year].push(item.linked);
      } catch(err) {
        byYear[item.year] = [];
        byYear[item.year].push(item.linked);
      }
    });
    var years = [];
    for (var key in byYear) {
      years.push(key);
    }
    for (var year in years.reverse()) {
      var h3 = $("<h3/>", {
        text: years[year]
      });
      $("div#hope-awards").append(h3);
      var ul = $("<ul/>");
      for (var citation in byYear[years[year]].sort()) {
        var li = $("<li/>");
        li.html(byYear[years[year]][citation]);
        ul.append(li);
      }
      $("div#hope-awards").append(ul);
    }
  },
  error: function(){
    $("div#hope-awards").append('<p>(Currently unavailable)</p>');
  }
});
