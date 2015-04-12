jQuery(document).ready(function() {

  fetch_scores(); // gets the scores from the API
  fetch_grid();   // gets the grid from the API

});


function fetch_scores() {
  //fetch the score data from the hackerbattleship API
  $.ajax({
    url: 'http://hackerbattleship/statsapi.php?mth=score',
    type: 'GET',
    dataType: 'jsonp'
  })
  .done(function (msg) {
    score_rcvr(msg)
  });
}

function fetch_grid() {
  //fetch the grid data from the hackerbattleship API
  $.ajax({
    url: 'http://hackerbattleship/statsapi.php?mth=grid',
    type: 'GET',
    dataType: 'jsonp'
  })
  .done(function (msg) {
    grid_rcvr(msg)
  });
}

function score_rcvr(data) {
  $.each(data, function(i, field) {
    // sample: <tr><td>Team One</td><td>300</td></tr>
    $('#scores').append('<tr><td>' + i + '</td><td>' + field + '</td></tr>');
  });
}

function grid_rcvr(data) {
  // iterate through the JSON data
  var maxcols = 6;
  var cur = 0;

  $.each(data, function(k,v) {
    if(cur === 0) {
      $('#grid').append('<ul class="clear">');
      $('#grid').append('<li class="' + v + '">' + k + '</li>');
      cur++;
    } else if(cur == maxcols) {
      $('#grid').append('<li class="' + v + '">' + k + '</li>');
      $('#grid').append('</ul>');
      cur = 0;
    } else {
      $('#grid').append('<li class="' + v + '">' + k + '</li>');
      cur++;
    }

    fix_grid()      // re-aligns grid blocks and tweaks hit/miss styles

  });
}

function fix_grid() {
  // tweak 'hits'
  $('.hit').html('&nbsp;&nbsp;');
  $('.hit').css('border', 'none');
  $('.hit').css('background-color', 'inherit');

  // tweak 'misses'
  $('.miss').html('&nbsp;&nbsp;');
  $('.miss').css('border', 'none');
  $('.miss').css('background-color', 'inherit');
}
