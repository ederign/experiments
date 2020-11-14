let data;
let dropdown1;
let dropdown2;
let resultP;
const users = {};


function preload() {
    data = loadJSON('movies.json');
}

function setup() {
    noCanvas();

    dropdown1 = createSelect('');
    dropdown2 = createSelect('');
    resultP = createP();

    for (let i = 0; i < data.users.length; i++) {
        const name = data.users[i].name;
        dropdown1.option(name);
        dropdown2.option(name);
        users[name] = data.users[i];
    }
    var button = createButton('submit');
    button.mousePressed(euclideanSimilarity);
}

function euclideanSimilarity() {
    const ratings1 = users[dropdown1.value()];
    const ratings2 = users[dropdown2.value()];

    const titles = Object.keys(ratings1);

    titles.splice(titles.indexOf('name'), 1);
    titles.splice(titles.indexOf('timestamp'), 1);
    console.log(titles);

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

    resultP.html(similarity);
}