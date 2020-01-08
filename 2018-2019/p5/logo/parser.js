class Parser {
    constructor(text) {
        this.text = text;
        this.index = 0;
    }

    nextToken() {

        let token = '';
        let char = this.text.charAt(this.index);
        //ignore space
        if (char == ' ') {
            this.index++;
            return this.nextToken();
        }
        //bracked sent back
        if (char === '[' || char === ']') {
            this.index++;
            return char;
        }
        //otherwise accumulate until a space
        while (char !== ' ' && this.hasTokens()) {
            token += char;
            char = this.text.charAt(++this.index);
        }
        return token;

    }

    hasTokens() {
        return this.index < this.text.length;
    }

    getRepeat() {
        let start, end;

        while (this.text.charAt(this.index++) !== '[' && this.hasTokens()) {
            start = (this.index)
        }


        let bracketCount = 1;
        while (bracketCount > 0) {
            let char = this.text.charAt(this.index++);
            if (char === '[') {
                bracketCount++;
            }
            else if (char === ']') {
                bracketCount--;
            }
        }
        end = this.index;

        return this.text.substring(start + 1, end -1);
    }

    parse() {
        let commands = [];
        let movement = /^([fb]d|[lr]t)$/;
        let pen = /^p/;
        let repeat = /^repeat$/;

        while (this.hasTokens()) {
            let token = this.nextToken();
            if (movement.test(token)) {
                let cmd = new Command(token, this.nextToken());
                commands.push(cmd);
            }
            else if (pen.test(token)) {
                let cmd = new Command(token)
            }
            else if (repeat.test(token)) {
                let cmd = new Command(token, this.nextToken());

                let toRepeat = this.getRepeat();
                let subCommands = new Parser(toRepeat);
                cmd.commands = subCommands.parse();
                commands.push(cmd);
            }
        }
        return commands;
    }
}
