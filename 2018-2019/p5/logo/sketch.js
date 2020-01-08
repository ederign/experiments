let editor;
let turtle;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    background(0);
    turtle = new Turtle(200, 200, 0);
    editor = select('#code')
    editor.input(goTurtle);
    goTurtle();

}

function draw() {
    // background(0);
}

function execute(commands) {

    for (let command of commands) {
        let name = command.name;
        let args = command.args;
        if (name === 'repeat') {
            for (let i = 0; i < args; i++) {
                execute(command.commands);
            }
        }
        else {
            commandLookUp[name ](args);
        }
    }

}

function goTurtle() {
    background(0);
    push();
    turtle.reset();

    let code = editor.value();
    let parser = new Parser(code);


    let commands = parser.parse();

    execute(commands);

    console.log(commands);
    pop();
}