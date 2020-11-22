let data;
let dropdown1; 
let resultP;
const users = {};
let similarityScores = {}
let resultDivs = [];
var dropdowns = [];


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
        dropdown.option('not seen');
        dropdown.title = titles[i];
        dropdown.parent(div);
        dropdowns.push(dropdown);

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
    button.mousePressed(predictRatings);
}

function predictRatings(){
    const newUser  = {};
    for (let i = 0; i < dropdowns.length; i++) {
        const title = dropdowns[i].title;
        let rating = dropdowns[i].value();
        if(rating == 'not seen'){
            rating = null;
        }
        newUser[title] = rating;
    }

    findNearestNeighbors(newUser)
}

function findNearestNeighbors(newUser){

    for (let index = 0; index < resultDivs.length; index++) {
        const div = resultDivs[index];
        div.remove();    
    }
    resultDivs = [];

    const name = dropdown1.value();

    similarityScores = {};
    for (let index = 0; index < data.users.length; index++) {
        const other = data.users[index];
        let similarity = euclideanDistance(newUser, other)
        similarityScores[other.name] = similarity;
        data.users[index].similarityScore = similarity;
    }
    data.users.sort(compareSimilarity);
    

    for (let i = 0; i < data.titles.length; i++) {
        const title = data.titles[i];
        if(newUser[title] == null){
            // const div = createDiv(title); 
            // resultDivs.push(div);
            // div.parent(resultP);

            const k = 5;
            let weightedSum = 0;
            let similaritySum = 0;
            for (let i = 0; i < k; i++) {
                let name = data.users[i].name;
                const sim = data.users[i].similarityScore;
                let ratings = data.users[k];
                var rating = ratings[title];
                if(rating != null){
                    weightedSum += rating*sim;
                    similaritySum += sim;
                }
              
            }
            let stars = nf(weightedSum/similaritySum, 1, 2);



            let div = createDiv(title + ': ' + stars);
            resultDivs.push(div);
            div.parent(resultP);
        }  
    }

}

function compareSimilarity(a, b){
    let score1 = similarityScores[a.name];
    let score2 = similarityScores[b.name];
    return score2 - score1;
}

function euclideanDistance(ratings1, ratings2) {

    const titles = data.titles;

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