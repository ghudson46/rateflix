
  
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
        if(movie.imdbID !== null || movie.Poster !== "N/A") {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
        } else {
          output += '';       
         };
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
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title} (${movie.Year})</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>Runtime:</strong> ${movie.Runtime}</li>
              <li class="list-group-item"><strong>Critic Score:</strong> ${movie.Ratings[1].Value}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              <li class="list-group-item"><strong>Awards:</strong> ${movie.Awards}</li>
              
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
        <p>rate this movie</p>
        <input type="text" placeholder="give a score 1-100">
        <button id="scoreBtn">Submit Score</button>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      let output =`
      <div class="row">
        <div class="col-md-8">
          <h2>This movie has no available details</h2>
        </div>
      </div>
    `;

    $('#movie').html(output);
    });
}
