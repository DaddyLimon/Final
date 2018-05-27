var glxavor = require('./class.js');

module.exports = class Gishatich extends glxavor {

   sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];
        var servandak = this.yntrelVandak(3.5);
        if(servandak){
            this.bazmanal();
       
        }
        if (norVandak) {
            if (exanak == "Garun") {
                this.mernelukyanq++;
            }
            if (exanak == "Amar") {
                this.mernelukyanq++;
            }
            if (exanak == "Ashun") {
                this.mernelukyanq--;
            }
            if (exanak == "Dzmer") {
                this.mernelukyanq-=4;
            }
    
            
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.mernelukyanq <= 0) {
            this.mernel();
        }


    }

    utel() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

        if (norVandak) {
            this.kyanq++;
            this.mernelukyanq = 20;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in global.xotakerArr) {
                var xotakerObj = global.xotakerArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    global.xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            sharjvel_gishatich ++;
            this.sharjvel();
        }
        if (this.kyanq >= 15) {
            this.bazmanal();
        }

    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

        if (norVandak) {
            gish_tiv ++;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;

            var norGishatich = new Gishatich(norx, nory);
            gishatichArr.push(norGishatich);
            this.kyanq = 5;
            this.mernelukyanq = 20;
            for (var i in global.xotakerArr) {
                var xotakerObj = global.xotakerArr[i];
                if (xotakerObj.x == norx && xotakerObj.y == nory) {
                    global.xotakerArr.splice(i, 1);
                }
            }
        }


    }
    mernel() {
    
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.y == gishatichArr[i].y && this.x == gishatichArr[i].x) {
                gishatichArr.splice(i, 1);

            }
        }

    }
}