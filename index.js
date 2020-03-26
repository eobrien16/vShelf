document.body.onload = getSeries();

async function getSeries() {
    manifest.forEach(series => {
        document.body.appendChild(div(
            [
                a(img(`${cServerURL}${series.seasons[0].coverphoto}`, "cover"), `/series.php?series=${series.id}`),
                h(1, `${series.name} (${series.seasons.length} Seasons)`)
            ], 
            "series"
        ));
        document.getElementById('mySidenav').appendChild(a(text(series.name), `/series.php?series=${series.id}`))
    });
}
