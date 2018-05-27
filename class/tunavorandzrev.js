var glxavor = require('./class.js');


module.exports = class tunavorandzrev extends glxavor {

    poxel() {
        this.stanalNorKordinatner();
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 4) {
                    matrix[y][x] = 0;
                    for (var i in xotgishatichArr) {
                        if (y == xotgishatichArr[i].y && x == xotgishatichArr[i].x) {
                            xotgishatichArr.splice(i, 1);

                        }
                    }
                }
            }
        }
    }
}