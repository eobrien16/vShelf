document.body.onload = loadSeries();

async function loadSeries() {
    manifest.forEach(series => {
        if(series.id === seriesId){
            document.getElementById('mySidenav').appendChild(a(text(series.name)))
            document.body.appendChild(h(1, series.name));
            series.seasons.forEach(season => {
                if(!season.available) {
                    return;
                }
                document.body.appendChild(div([a(img(`${cServerURL}${seriesId}/${season.coverphoto}`, "cover"), `/season.php?series=${seriesId}&season=${season.season}`), br(), span(`Season ${season.season}`, "title")], "seasoncontainer"));
            });
            return;
        } else {
            document.getElementById('mySidenav').appendChild(a(text(series.name), `/series.php?series=${series.id}`))
            return;
        }
    });
}