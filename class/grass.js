var glxavor = require('./class.js');


module.exports = class Grass extends glxavor {
    constructor(x, y) {
        super(x, y);
        this.multiply = 2;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    bazmanal() {
        if (exanak == "Garun") {
            this.multiply++;
           

        }
        if (exanak == "Amar") {
            this.multiply+=4;
          
        }
        if (exanak == "Ashun") {
            this.multiply++;
         
        }
        if (exanak == "Dzmer") {

            this.multiply--;
        }


        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];
        if (norVandak && this.multiply >= 30) {
            xoteri_tiv ++;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 1;
            var norXot = new Grass(norx, nory);
            global.grassArr.push(norXot);
            this.multiply = 0;
        }


    }

}
