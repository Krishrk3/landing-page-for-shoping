let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");
let collection = [
  { name: "shirt", file: "shirt.html"},
  { name: "tshirt", file: "tshirt.html"},
  { name: "womentop", file: "womentop.html"},
  { name: "casual", file: "casual.html"},
  { name: "traditional", file: "traditional.html"}
];
let resultsContainer = document.getElementById("results-container");

searchButton.addEventListener("click", function() {
  let searchTerm = searchInput.value;
  let results = collection.filter(function(item) {
    return item.name.includes(searchTerm) || item.description.includes(searchTerm);
  });
  displayResults(results);
});

function displayResults(results) {
  resultsContainer.innerHTML = "";
  results.forEach(function(result) {
    let resultElement = document.createElement("div");
    resultElement.innerHTML = `<a href="${result.file}">${result.name}</a>`;
    resultsContainer.appendChild(resultElement);
  });
}

