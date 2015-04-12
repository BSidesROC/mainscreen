jQuery(document).ready(function() {

  //fetch the score data from the hackerbattleship API
  $.ajax({
    url: 'http://hackerbattleship/statsapi.php?mth=score',
    type: 'GET',
    dataType: 'jsonp'
  })
  .done(function (msg) {
    //alert('suxess' + msg );
    score_rcvr(msg)
  });

  function score_rcvr(data) {
    $.each(data, function(i, field) {
      // sample: <tr><td>Team One</td><td>300</td></tr>
      $('#scores').append('<tr><td>' + i + '</td><td>' + field + '</td></tr>');
    });
  }

  //fetch the grid data from the hackerbattleship API
  $.ajax({
    url: 'http://hackerbattleship/statsapi.php?mth=grid',
    type: 'GET',
    dataType: 'jsonp'
  })
  .done(function (msg) {
    //alert('suxess' + msg );
    grid_rcvr(msg)
  });

  function grid_rcvr(data) {
    // iterate through the JSON data
    $.each(data, function(k,v) {
      $('#grid').append('<li class="' + v + '">' + k + '</li>');
    /*
      var col = 0;
      var maxcols = 7;
      while( col < maxcols ) {
        if( col === 0 ) {
          // start a new row
          $('#grid').append('<ul class="clear">');
        }
        if (col === 7) {
          $('#grid').append('</ul'); // end this row
          col = 0; // reset the counter
        }
        // add the data for this column
        // sample: <li class="hit">A1</li>
        $('#grid').append('<li class="' + v + '">' + k + '</li>');
        // increment the counter
        col++;
      }
    */
    });
    //$('#grid li:nth-child(7)').append('<br>');

    // tweak 'hits'
    $('.hit').html('&nbsp;&nbsp;');
    $('.hit').css('border', 'none');
    $('.hit').css('background-color', 'inherit');

    // tweak 'misses'
    $('.miss').html('&nbsp;&nbsp;');
    $('.miss').css('border', 'none');
    $('.miss').css('background-color', 'inherit');
  }

});
