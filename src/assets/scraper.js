for(let i=1;i<39;i++){
	fetch(`https://footballapi.pulselive.com/football/standings?compSeasons=79&altIds=true&detail=2&FOOTBALL_COMPETITION=1&gameweekNumbers=1-${i}`)
.then(function(res){if(res.ok){return res.json()}throw new TypeError})
.then(function(res){download(res, `week${i}.json`, 'application/json');})
.catch(function(err){console.log(err);})
}
function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(text)], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}