let mobilenet;
let dora;
let eder;



function modelReady() {
    console.log("model is ready!");
    mobilenet.predict(dora, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        let label = results[0].className;
        let prob = results[0].probability;
        fill(0);
        textSize(64);
        text(label, 10, height - 50);
        createP(label);
        createP(prob);

    }
}

function imageReady() {
    console.log("image is ready!");
    image(dora, 0, 0);
}

function setup() {
    createCanvas(600, 600);
    background(0);
    dora = createImg('images/dora.png', imageReady);
    dora.hide();
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {


}