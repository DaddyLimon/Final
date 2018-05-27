var glxavor = require('./class.js');


module.exports = class XotaGishatich extends glxavor {
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];
        var servandak = this.yntrelVandak(4.5);
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
                this.mernelukyanq++;
            }
            if (exanak == "Dzmer") {
                this.mernelukyanq-=2;
               
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }
        if (this.mernelukyanq <= 0) {
            this.mernel();
        }
    }
 
    utel() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];
        var datarkVandaknererku = this.yntrelVandak(2);
        var norVandakerku = datarkVandakner[Math.floor(Math.random() * datarkVandaknererku.length)];

        if (norVandak) {
           
            this.kyanq++;
            this.mernelukyanq = 10;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in global.gishatichArr) {
                var xotakerObj = global.gishatichArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    global.gishatichArr.splice(i, 1);
                }
            }
        }
        else if (norVandakerku) {
            this.kyanq++;
            this.mernelukyanq = 10;
            matrix[this.y][this.x] = 0;
            matrix[norVandakerku[1]][norVandakerku[0]] = 4;

            this.x = norVandakerku[0];
            this.y = norVandakerku[1];

            for (var i in global.gishatichArr) {
                var xotakerObj = xotakerArr[i];
                if (xotakerObj.x == this.x && xotakerObj.y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            sharjvel_xotagishatich ++;
            this.sharjvel();
        }
        if (this.kyanq >= 1) {
            this.bazmanal();
        }


    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(3);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

        if (norVandak) {
            xotagish_tiv ++;
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;

            var norXotaGishatich = new XotaGishatich(norx, nory);
            global.xotgishatichArr.push(norXotaGishatich);
            this.kyanq = 5;
            this.mernelukyanq = 10;
            for (var i in global.gishatichArr) {
                var xotagishatichObj = global.gishatichArr[i];
                if (xotagishatichObj.x == norx && xotagishatichObj.y == nory) {
                    global.gishatichArr.splice(i, 1);
                }
            }
        }
    }
    mernel() {
        
        matrix[this.y][this.x] = 0;
        for (var i in global.xotgishatichArr) {
            if (this.y == global.xotgishatichArr[i].y && this.x == global.xotgishatichArr[i].x) {
                global.xotgishatichArr.splice(i, 1);

            }
        }

    }

}
