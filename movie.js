let rateBtn = $("#scoreBtn");
let score = $("#scoreValue").val();

$("#scoreBtn").on("click", (event) => {
  event.preventDefault();
  console.log(score);
})