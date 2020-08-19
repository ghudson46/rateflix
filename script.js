
const searchButtonEl = document.querySelector("#search");
const inputEl = document.querySelector("#inputValue");


searchButtonEl.onclick = function(event) {
  event.preventDefault();
  let movie = inputEl.value;
  console.log(movie);

  const queryUrl = "http://www.omdbapi.com/?s=" + movie + "&apikey=db8b059d";

  $.ajax({
    URL: queryUrl,
    method: 'GET'
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(error);
  })


}








