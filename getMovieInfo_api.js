//
// Sean Kim
//
// Get Movie info from http://www.omdbapi.com/
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var getMovieInfo = function (movie) {
    this.movie = movie;
    for (var i = 0; i < this.movie.length; i++) {
      this.movieURL = "https://www.omdbapi.com/?t=" + this.movie[i] + "&y=&plot=short&apikey=trilogy";
      $.ajax({
        url: this.movieURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);  // to see movie object
        $('table').append('<tr><td>' + response.Title + '</td><td>' + response.Year + '</td><td>' + response.Actors + '</td></tr>');
      });
    }
  }
  var movie3 = ["Mr.+Nobody", "space+jam", "star+wars"];
  getMovieInfo(movie3);