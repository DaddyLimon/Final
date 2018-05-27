var glxavor = require('./class.js');

module.exports = class Xotaker extends glxavor {
    constructor(x,y,ser){
        super(x,y);
        this.ser = ser;
        this.kyanq = 5;
        this.mernelukyanq = 5;
    }
   

    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];
        var servandak = this.yntrelVandak(2.5);
        if(servandak){
            this.bazmanal();
       
        }
        if (norVandak) {
            this.mernelukyanq--;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.mernelukyanq <= 0) {
            this.mernel();
        }

    }


    utel() {
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

        if (norVandak) {
            if (exanak == "Garun") {
                this.kyanq+=2;
            }
            if (exanak == "Amar") {
                this.kyanq++;
            }
            if (exanak == "Ashun") {
                this.kyanq++;
            }
            if (exanak == "Dzmer") {
                this.kyanq--;
            }
          
            this.mernelukyanq = 10;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in global.grassArr) {
                var xotObj = global.grassArr[i];
                if (xotObj.x == this.x && xotObj.y == this.y) {
                    global.grassArr.splice(i, 1);
                }
            }
        }
        else {
            sharjvel_xotaker ++;
            this.sharjvel();
        }
        if (this.kyanq >= 10) {
            this.bazmanal();
        }

    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

        if (norVandak) {
            bazm_xotaker ++;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;

            var norXotaker = new Xotaker(norx, nory);
            xotakerArr.push(norXotaker);
            this.kyanq = 5;
            this.mernelukyanq = 5;
            for (var i in global.grassArr) {
                var xotObj = global.grassArr[i];
                if (xotObj.x == norx && xotObj.y == nory) {
                    global.grassArr.splice(i, 1);
                }
            }
        }


    }
    mernel() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (this.y == xotakerArr[i].y && this.x == xotakerArr[i].x) {
                xotakerArr.splice(i, 1);

            }
        }

    }

}