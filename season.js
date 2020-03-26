document.body.onload = function() {
    loadSeason();
}

async function loadSeason() {
    let currentSeason;
    manifest.forEach(series => {
        if(series.id === seriesId) {
            series.seasons.forEach(season => {
                if(season.season === seasonNumber) {
                    document.body.appendChild(h(1, `${series.name} Season ${seasonNumber}`, "seasontitle"));
                    currentSeason = season;
                } else {
                    return;
                }
            });
        } else {
            return;
        }
    })
    let { episodes } = currentSeason;
    let episodeContainer = div([], "episodes");
    document.body.appendChild(episodeContainer);
    episodes.forEach(episode => {
        if(!episode.available) {
            return;
        }
        episodeContainer.appendChild(createEpisodeDropDown(episode));
    })
}

function createEpisodeDropDown(episodeObject) {
    var { number, title, description, height, width, file } = episodeObject;
    var episodeDropDownObject = div(
        [
            span(`${number}. -- "${title}"`, "noselect episodename"),
            div(
                [
                    span(`File: "${file}"`),
                    br(),
                    span(`Resolution: ${width}x${height} (${height}p)`),
                    br(),
                    a(
                        span(`Click here to watch.`),
                        `/episode.php?series=${seriesId}&season=${seasonNumber}&episode=${number}`,
                        "episodeLink"
                    ),
                    br(),
                    p(description)
                ],
                "dropdown-content"
            )
        ],
        "dropdown episode"
    );
    episodeDropDownObject.children[0].addEventListener("click", function() {
        var { parentNode } = this;
        var { children } = parentNode;
        if(children[1].style.display === "none"){
            children[1].style.display = "block";
        } else {
            children[1].style.display = "none";
        }
    });
    return episodeDropDownObject;
}

