jQuery(document).ready(function() {

  fetch_scores();                    // initial fetch of the score data
  fetch_grid();                      // initial fetch of the grid data
  gen_sched();                       // initial fetch of the schedule
  setInterval(fetch_scores, 10000);  // gets the scores from the API every 10 secs.
  setInterval(fetch_grid, 10000);    // gets the grid from the API every 10 secs.

  setInterval(gen_sched, 60000);

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
  $('#scorebody').replaceWith('<tbody id="scorebody"></tbody>');
  $.each(data, function(i, field) {
    // sample: <tr><td>Team One</td><td>300</td></tr>
    $('#scorebody').append('<tr><td>' + i + '</td><td>' + field + '</td></tr>');
  });

}

function grid_rcvr(data) {
  // iterate through the JSON data
  var maxcols = 6;
  var cur = 0;

  $('#grid').replaceWith('<div id="grid"></div>');
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

function gen_sched() {

  /*------------------------------------------------------------------------
   * END OF SCHEDULE
   *----------------------------------------------------------------------*/
  var schedule = {
    // Date() params are: (YYYY,MM,DD,hh,mm).
    // WARNING: NO ZERO PADDING
    // WARNING TWO: JavaScript sucks and MM starts at 0 (=jan), 1 (=feb), etc.
    'track1' : {
      'current'   : -1, //this is an iterator, array starts at 0 so we set it to -1
      '0' : {
        'time'    : new Date(2015,3,16,20,07).getTime(),
        'title' : 'Registration &amp; Breakfast',
        'speaker' : 'BSidesROC &amp; ButAPub'
      },
      '1' : {
        'time'    : new Date(2015,3,16,20.08).getTime(),
        'title'   : 'init 5 - Intro Presentation',
        'speaker' : 'BSidesROC Staff'
      },
      '2' : {
        'time'    : new Date(2015,3,16,20,09).getTime(),
        'time'    : '1429965000',
        'title'   : 'Pretending To Be A Terrorist',
        'speaker' : 'Steve Stasiukonis'
      },
      '3' : {
        'time'    : new Date(2015,3,16,20,10).getTime(),
        'title'   : 'Tackling The Hard Problem Of Surveillance: Toward Privacy Protecting Protocols',
        'speaker' : 'Robert Olson'
      },
      '4' : {
        'time'    : new Date(2015,3,16,20,11).getTime(),
        'title'   : 'Big Game Hunting: Internet Data And You',
        'speaker' : 'Silas Cutler'
      },
      '5' : {
        'time'    : new Date(2015,3,12,20,00).getTime(),
        'title'   : 'Lunch',
        'speaker' : 'BSidesROC &amp; ButAPub'
      },
      '6' : {
        'time'    : new Date(2015,3,12,20,00).getTime(),
        'title'   : 'Exploring Layer 2 Network Security In Virtualized Environments - DHCP Attacks',
        'speaker' : 'Ronny Bull'
      },
      '7' : {
        'time'    : new Date(2015,3,12,20,00).getTime(),
        'title'   : 'Multipath TCP - Breaking Today\'s Networks With Tomorrow\'s Protocols',
        'speaker' : 'Kate Pearce'
      },
      '8' : {
        'time'    : new Date(2015,3,12,20,00).getTime(),
        'title'   : 'TBD',
        'speaker' : 'TBD'
      },
      '9' : {
        'time'    : new Date(2015,3,12,20,00).getTime(),
        'title'   : 'breakdown',
        'speaker' : '&nbsp;'
      },
      '10' : {
        'time'    : new Date(2015,3,12,20,00).getTime(),
        'title'   : 'Key Signing Party + Hacker Mixer',
        'speaker' : 'Stealth Mode Sponsor'
      },
      '11' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'closedown - Outro Presentation',
        'speaker' : 'BSidesROC Staff'
      },
      '12' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'init 0 - shutdown',
        'speaker' : 'BSidesROC Staff;'
      }
    },
    'track2' : {
      'current'   : -1, //this is an iterator, array starts at 0 so we set it to -1
      '0' : {
        'time'    : new Date(2015,04,12,20,55).getTime(),
        'title' : 'Registration &amp; Breakfast',
        'speaker' : 'BSidesROC &amp; ButAPub'
      },
      '1' : {
        'time'    : new Date(2015,04,12,20,56).getTime(),
        'title'   : 'init 5 - Intro Presentation',
        'speaker' : 'BSidesROC Staff'
      },
      '2' : {
        'time'    : new Date(2015,04,12,20,57).getTime(),
        'title'   : 'Enterprise Class Vulnerability Management Like A Boss',
        'speaker' : 'Rockie Brockway'
      },
      '3' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'Accidentally Awesome: How You Might Already Be An Effective Pentester',
        'speaker' : 'Mike Lisi'
      },
      '4' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : '0wn The Con',
        'speaker' : 'BSidesROC Staff'
      },
      '5' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'breakdown',
        'speaker' : 'BSidesROC Staff'
      },
      '6' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'Lunch',
        'speaker' : 'BSidesROC &amp; ButAPub'
      },
      '7' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'setup',
        'speaker' : 'BSidesROC Staff'
      },
      '8' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'Practical GPG',
        'speaker' : 'algorythm'
      },
      '9' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'Know Thy Enemy - Web Attacker Attribution',
        'speaker' : 'Chaim Sanders'
      },
      '10' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'IPLOG? A Beginner\'s IDS For The WIN!',
        'speaker' : 'Nathan Gibbs'
      },
      '11' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'Lightning Talks',
        'speaker' : 'YOU!'
      },
      '12' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'breakdown',
        'speaker' : 'BSidesROC Staff'
      },
      '13' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'closedown - Outro Presentation',
        'speaker' : 'BSidesROC Staff'
      },
      '14' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'init 0 - shutdown',
        'speaker' : 'BSidesROC Staff'
      }
    },
    'workshops' : {
      'current'   : -1, //this is an iterator, array starts at 0 so we set it to -1
      '0' : {
        'time'    : new Date(2015,04,12,20,55).getTime(),
        'title' : 'Registration &amp; Breakfast',
        'speaker' : 'BSidesROC &amp; ButAPub'
      },
      '1' : {
        'time'    : new Date(2015,04,12,20,56).getTime(),
        'title'   : 'init 5 - Intro Presentation',
        'speaker' : 'BSidesROC Staff'
      },
      '2' : {
        'time'    : new Date(2015,04,12,20,57).getTime(),
        'title'   : 'SDR Workshop',
        'speaker' : 'Jon Szymaniak &amp; Alex Page'
      },
      '3' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'Lunch',
        'speaker' : 'BSidesROC &amp; ButAPub'
      },
      '4' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'TOR Research Workshop',
        'speaker' : 'antitree'
      },
      '5' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'TBD',
        'speaker' : 'TBD'
      },
      '6' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'breakdown',
        'speaker' : 'BSidesROC Staff'
      },
      '7' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'closedown - Outro Presentation',
        'speaker' : 'BSidesROC Staff'
      },
      '8' : {
        'time'    : new Date(2015,04,12,20,00).getTime(),
        'title'   : 'init 0 - shutdown',
        'speaker' : 'BSidesROC Staff'
      }
    }
  };

  /*------------------------------------------------------------------------
   * END OF SCHEDULE
   *----------------------------------------------------------------------*/

  // define vars for current slots
  var c_t1,
      c_t1_title,
      c_t1_speaker,
      c_t2, c_t2_title,
      c_t2_speaker,
      c_t3,
      c_t3_title,
      c_t3_speaker = '';

  // define vars for next slots
  var n_t1,
      n_t1_title,
      n_t1_speaker,
      n_t2,
      n_t2_title,
      n_t2_speaker,
      n_t3,
      n_t3_title,
      n_t3_speaker = '';

  var date = new Date();
  var YYYY, MM, DD, hh, mm;
  YYYY = date.getFullYear();
  MM = date.getMonth();
  DD = date.getDate();
  hh = date.getHours();
  mm = date.getMinutes();
  t = new Date(YYYY,MM,DD,hh,mm).getTime();


  // figure out where we are on the schedule, based on the current time
  if (schedule.track1.current == -1) {
    // start of the day, increment to the first item
    schedule.track1.current++;
  }

  c_t1 = schedule.track1.current;                 // set t1 iterator to now
  c_t2 = schedule.track1.current;                 // set t2 iterator to now
  c_t3 = schedule.track1.current;                 // set t3 iterator to now

  if( t > schedule.track1[c_t1].time ) {

    // we're past the last item, so set the tracks explicitly to nothing
    //
    // NOW
    c_t1_title = 'Nothing';                      // set t1 now title
    c_t1_speaker = 'No one';                     // set t1 now speaker
    c_t2_title = 'Nothing';                      // set t2 now title
    c_t2_speaker = 'No one';                     // set t2 now speaker
    c_t3_title = 'Nothing';                      // set t3 now title
    c_t3_speaker = 'No one';                     // set t3 now speaker
    //
    // NEXT
    n_t1_title = 'Nothing';                      // set t1 next title
    n_t1_speaker = 'No one';                     // set t1 next speaker
    n_t2_title = 'Nothing';                      // set t2 next title
    n_t2_speaker = 'No one';                     // set t2 next speaker
    n_t3_title = 'Nothing';                      // set t3 next title
    n_t3_speaker = 'No one';                     // set t3 next speaker

  } else {

    // we're somewhere on the schedule, get the data

    // NOW
    c_t1_title = schedule.track1[c_t1].title;     // get t1 now title
    c_t1_speaker = schedule.track1[c_t1].speaker; // get t1 now speaker
    c_t2_title = schedule.track1[c_t2].title;     // get t2 now title
    c_t2_speaker = schedule.track1[c_t2].speaker; // get t2 now speaker
    c_t3 = schedule.track1.current;               // set t3 iterator to now
    c_t3_title = schedule.track1[c_t3].title;     // get t3 now title
    c_t3_speaker = schedule.track1[c_t3].speaker; // get t3 now speaker

    // NEXT
    schedule.track1.current++;                    // increment pointer

    n_t1 = schedule.track1.current;               // set t1 iterator to next
    n_t2 = schedule.track1.current;               // set t2 iterator to next
    n_t3 = schedule.track1.current;               // set t3 iterator to next

    n_t1_title = schedule.track1[n_t1].title;     // get t1 next title
    n_t1_speaker = schedule.track1[n_t1].speaker; // get t1 next speaker
    n_t2_title = schedule.track1[n_t2].title;     // get t2 next title
    n_t2_speaker = schedule.track1[n_t2].speaker; // get t2 next speaker
    n_t3_title = schedule.track1[n_t3].title;     // get t3 next title
    n_t3_speaker = schedule.track1[n_t3].speaker; // get t3 next speaker

  }

  /* relevant li divs:
   *  NOW: t1Now, t2Now, wkNow
   *  NEXT: t1Next, t2Next, wkNext
   */

  // Change NOW list items
  $('#t1Now').replaceWith('<li id="t1Now">' + c_t1_title + ' - ' + c_t1_speaker + '</li>');
  $('#t2Now').replaceWith('<li id="t2Now">' + c_t2_title + ' - ' + c_t2_speaker + '</li>');
  $('#t3Now').replaceWith('<li id="t3Now">' + c_t3_title + ' - ' + c_t3_speaker + '</li>');

  // Change NEXT list items
  $('#t1Next').replaceWith('<li id="t1Next">' + n_t1_title + ' - ' + n_t1_speaker + '</li>');
  $('#t2Next').replaceWith('<li id="t2Next">' + n_t2_title + ' - ' + n_t2_speaker + '</li>');
  $('#t3Next').replaceWith('<li id="t3Next">' + n_t3_title + ' - ' + n_t3_speaker + '</li>');

}
