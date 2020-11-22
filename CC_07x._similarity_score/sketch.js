let data;
let dropdown1; 
let resultP;
const users = {};
let similarityScores = {}
let resultDivs = [];


function preload() {
    data = loadJSON('movies.json');
}

function setup() {
    noCanvas();

    dropdown1 = createSelect(''); 
    resultP = createP();

    let titles = data.titles; 
    for (let i = 0; i < titles.length; i++) {
        let div = createDiv(titles[i])
        let dropdown = createSelect('');
        dropdown.parent(div);

        for (let star = 1; star < 6; star++) {
            dropdown.option(star);
        }
    }

    for (let i = 0; i < data.users.length; i++) {
        const name = data.users[i].name; 
        dropdown1.option(name);
        users[name] = data.users[i];
    }
    var button = createButton('submit');
    button.mousePressed(findNearestNeighbors);
}

function findNearestNeighbors(){

    for (let index = 0; index < resultDivs.length; index++) {
        const div = resultDivs[index];
        div.remove();    
    }
    resultDivs = [];

    const name = dropdown1.value();

    similarityScores = {};
    for (let index = 0; index < data.users.length; index++) {
        const other = data.users[index].name;
        if(other != name){
            let similarity = euclideanDistance(name, other)
            similarityScores[other] = similarity;
            data.users[index].similarityScore = similarity;
        } else{
            similarityScores[other] = -1;
            data.users[index].similarityScore = -1;
        }
    }
    data.users.sort(compareSimilarity);
    
    for (let i = 0; i < 5; i++) {
        let div = createDiv(data.users[i].name + ': ' + data.users[i].similarityScore);
        resultP.parent(div);
        resultDivs.push(div);
    }
}

function compareSimilarity(a, b){
    let score1 = similarityScores[a.name];
    let score2 = similarityScores[b.name];
    return score2 - score1;
}

function euclideanDistance(name1, name2) {
    const ratings1 = users[name1];
    const ratings2 = users[name2];

    const titles = Object.keys(ratings1);

    titles.splice(titles.indexOf('name'), 1);
    titles.splice(titles.indexOf('timestamp'), 1);

    let sumSquares = 0;
 
    for (let index = 0; index < titles.length; index++) {
        const title = titles[index];
        const rating1 = ratings1[title];
        const rating2 = ratings2[title];

        if (rating1 != null && rating2 != null) {
            const diff = rating1 - rating2;
            sumSquares += diff * diff;
        }

    }

    const d = sqrt(sumSquares);

    const similarity = 1 / (1 + d);

    return similarity;
}