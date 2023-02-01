//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeList.forEach((episode) => {
    const episodeContainer = document.createElement("div");
    episodeContainer.className = "episode";

    const episodeName = document.createElement("h2");
    episodeName.textContent = episode.name;
    episodeContainer.appendChild(episodeName);

    const episodeCode = document.createElement("h3");
    episodeCode.textContent = `S${("0" + episode.season).slice(-2)}E${("0" + episode.number).slice(-2)}`;
    episodeContainer.appendChild(episodeCode);

    const episodeImage = document.createElement("img");
    episodeImage.src = episode.image.medium;
    episodeContainer.appendChild(episodeImage);

    const episodeSummary = document.createElement("p");
    episodeSummary.textContent = episode.summary;
    episodeContainer.appendChild(episodeSummary);

    rootElem.appendChild(episodeContainer);
  });

  const link = document.createElement("p");
  link.innerHTML = `Data originally from <a href="https://www.tvmaze.com/">TVMaze.com</a>`;
  rootElem.appendChild(link);
}

window.onload = setup;