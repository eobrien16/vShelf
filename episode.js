document.body.onload = loadEpisode();
var episode;

async function loadEpisode() {
    episode = await getEpisode();
    let { number, title, description, height, width, file, available } = episode;
    if(!available) {
        return;
    }
    document.body.appendChild(div([
        div([video(`${cServerURL}${file}`, width, height)], "video"),
        h(2, `${number}. -- ${title}`),
        p(description)
    ]));
}

function getEpisode() {
    return new Promise(async (resolve, reject) => {
        console.log("going")
        manifest.forEach(series => {
            if(series.id === seriesId) {
                series.seasons.forEach(season => {
                    if(season.season === seasonNumber) {
                        season.episodes.forEach(episode => {
                            if(episode.number === `${episodeNumber}`){
                                resolve(episode);
                            } else {
                                return;
                            }
                        });
                    } else {
                        return;
                    }
                });
            } else {
                return;
            }
        });    
    });
}