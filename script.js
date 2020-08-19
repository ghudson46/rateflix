$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    getMovies(searchText);
  });

  function getMovies(searchText) {
  
  axios.get("http://www.omdbapi.com/?s=" + searchText + "&type=movie&plot=full&apikey=db8b059d")
    .then(response => {
      console.log(response.data.Search);
      let movies = response.data.Search;
      let output = '';

      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3>
            <div class="well text-center>
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $("#movies").html(output);

    }).catch(error => {
      console.log(error);
    });

  }

});








