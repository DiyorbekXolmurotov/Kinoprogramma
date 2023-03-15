var elUl = document.querySelector("[data-ul]");
var imageUrl = "https://image.tmdb.org/t/p/w500";

for (var i = 0; i < movies.length; i++) {
  var hundred = movies[i];

  var elList = document.createElement("li");
  var elImage = document.createElement("img");
  var elBox = document.createElement("div");
  var elText = document.createElement("p");

  elImage.src = `${imageUrl}${hundred.poster_path}`;
  elText.textContent = `${hundred.title} < ${hundred.vote_average} > ${hundred.release_date}`;

  elList.classList.add("el_list");
  elImage.classList.add("el_image");
  elBox.classList.add("el_box");
  elText.classList.add("el_content");

  elList.appendChild(elImage);
  elList.appendChild(elBox);
  elUl.appendChild(elList);
  elBox.appendChild(elText);
}
