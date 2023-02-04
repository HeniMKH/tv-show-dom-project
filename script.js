//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisode(episode){
  const {season,number} = episode;
  const paddedSeason = season.toString().padStart(2,"0");
  const paddedEpisode = number.toString().padStart(2,"0");
 
  return `S${paddedSeason}E${paddedEpisode}`;
}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML="";
  episodeList.forEach((episode) => {
  
  const list = document.createElement("li")
  
  const constParagraph = document.createElement("p");
  constParagraph.innerText = episode.name;
  list.appendChild( constParagraph)
  
  const image = document.createElement("img");
  image.src = episode.image.medium;
  list.appendChild(image);

  const summaryParagraph = document.createElement("p");
  summaryParagraph.innerHTML = episode.summary;
  list.appendChild(summaryParagraph);
  rootElem.appendChild(list)
  }); 
}
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e) => {
  const searchTerms = e.target.value.toLowerCase();
  const filteredEpisodes = getAllEpisodes().filter((episode) => {
    // localeCompare might be neater here
    return (
      episode.summary.toLowerCase().includes(searchTerms) ||
      episode.name.toLowerCase().includes(searchTerms)
    );
  });
  makePageForEpisodes(filteredEpisodes);
});

window.onload = setup;