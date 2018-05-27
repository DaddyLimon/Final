var glxavor = require('./class.js');


module.exports = class Arev extends glxavor {
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 6;

            this.x = norVandak[0];
            this.y = norVandak[1];
        }

    }
    xotajcnel() {
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 6) {
                    matrix[y][x] = 0;
                    var datarkVandakner = this.yntrelVandak(0);
                    var norVandak = datarkVandakner[Math.floor(Math.random() * datarkVandakner.length)];

                    if (norVandak) {
                        var norx = norVandak[0];
                        var nory = norVandak[1];
                        matrix[nory][norx] = 1;
                    }
                }
            }
        }
    }
}