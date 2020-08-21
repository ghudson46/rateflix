
  
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){

  axios.get('https://www.omdbapi.com/?s=' + searchText + '&type=movie&apikey=db8b059d')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {

        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')"  id="movieDetails" href="#"><button>Movie Details</button></a>
            </div>
          </div>
        `;   
         
      });

      $('#movies').html(output);
    })
    .catch((err) => {
      alert('That search yieled 0 results. Check your spelling and punctuation');
    });
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');

  axios.get('https://www.omdbapi.com/?i=' + movieId + '&plot=full&apikey=db8b059d')
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output =`
        <div class="row">
          <div class="col-md-4">
          <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8 movie-info">

          <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank"><button class="imdbBtn">View IMDB</button></a>
            <a href="index.html"><button class="backBtn">Go Back To Search</button></a>
          </div>
        </div>
            
            <div class="info">
              <p><strong>Director:</strong> ${movie.Director}</p>
              <p><strong>Genre:</strong> ${movie.Genre}</p>
              <p><strong>Rated:</strong> ${movie.Rated}</p>
              <p><strong>Runtime:</strong> ${movie.Runtime}</p>
              <p><strong>Critic Score:</strong> ${movie.Ratings[1].Value}</p>
              <p><strong>Actors:</strong> ${movie.Actors}</p>
              <p><strong>Awards:</strong> ${movie.Awards}</p>
              
            </div>
          </div>
        </div>
        
        <input id="scoreValue"type="text" placeholder="rate this movie 1-100">
        <button id="scoreBtn">Submit Score</button>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      let output =`
      <div class="row">
        <div class="col-md-8">
          <h2>This movie has no available details</h2>
          <a href="index.html"><buton class="btn">Return to Search</button></a>
        </div>
      </div>
    `;

    $('#movie').html(output);
    });

    $("#scoreBtn").on("click", function saveScore() {
      localStorage.setItem("userScore", 95);
    });
}
