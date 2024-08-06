// Create the List
var options = {
    valueNames: [ 'album', 'artist', 'date' ]
  };
  // Populate the List
  var values = [
    {
      album: 'Sense',
      artist: 'The Lightning Seeds',
      date: 1992
    },
    {
      album: "His 'N' Hers",
      artist: 'Pulp',
      date: 1994
    },
    {
      album: "Heros",
      artist: 'David Bowie',
      date: 1977
    },
    {
      album: "The Pleasure Principle",
      artist: 'Gary Numan',
      date: 1979
    },
    {
      album: "Dare!",
      artist: 'The Human League',
      date: 1981
    },
    {
      album: "Urban Hymns",
      artist: 'The Verve',
      date: 1997
    },
    {
      album: "The La's",
      artist: "The La's",
      date: 1990
    },
    {
      album: "More Songs ABout Buildings and Food",
      artist: 'Talking Heads',
      date: 1978
    },
    {
      album: "Laid",
      artist: 'James',
      date: 1993
    },
    {
      album: "Pills 'N' Thrills and Bellyaches",
      artist: 'Happy Mondays',
      date: 1990
    },
    {
      album: 'Different Class',
      artist: 'Pulp',
      date: 1995
    },
    {
      album: 'Be Here Now',
      artist: 'Oasis',
      date: 1997
    },
    {
      album: 'Soul Mining',
      artist: 'The The',
      date: 1983
    },
    {
      album: 'Parklife',
      artist: 'Blur',
      date: 1994
    },
    {
      album: 'Suede',
      artist: 'Suede',
      date: 1993
    },
    {
      album: 'Stone Roses',
      artist: 'The Stone Roses',
      date: 1989
    },
    {
      album: 'Screamadelica',
      artist: 'Primal Scream',
      date: 1991
    },
    {
      album: "It's Great When You're Straight... Yeah",
      artist: 'Black Grape',
      date: 1995
    },
    {
      album: "(What's The Story) Morning Glory",
      artist: 'Oasis',
      date: 1995
    },
    {
      album: 'Moseley Shoals',
      artist: 'Ocean Colour Scene',
      date: 1996
    }
  ];
  
  // Run the list with default sort
  var albums = new List('albums', options, values);
  albums.sort("album", {
    order: "asc"
  })
  
  // Create Filters
  $('.filter').on('click',function(){
    var $q = $(this).attr('data-filter');
    if($(this).hasClass('active')){
      albums.filter();
      $('.filter').removeClass('active');
    } else {
      albums.filter(function(item) {
        return (item.values().date == $q);
      });
      $('.filter').removeClass('active');
      $(this).addClass('active');
    }
  });
  
  // Return # of items
  var $count = $('.count')
  $count.append(albums.size());
  albums.on('filterComplete', function(){
    $count.text(albums.update().matchingItems.length);
  });