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
    }).catch(error => {
      console.log(error);
    });

  }

});








