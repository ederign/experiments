const commandLookUp = {
    "fd": function (amount) {
        turtle.forward(amount);
    },
    "bd": function (amount) {
        turtle.forward(-amount);
    },
    "rt": function (angle) {
        turtle.right(angle);
    },
    "lt": function (angle) {
        turtle.right(-angle);
    },
    "pu": function () {
        turtle.pen = false;
    },
    "pd": function () {
        turtle.pen = true;
    }
}

class Turtle {

    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    reset() {
        translate(this.x, this.y);
        rotate(this.angle);
        this.pen = true;
    }

    forward(amount) {
        amount = parseInt(amount);
        if (this.pen) {
            stroke(255);
            strokeWeight(1);
            line(0, 0, amount, 0);
        }
        translate(amount, 0);

    }

    right(angle) {
        rotate(angle);
    }
}