global.matrix = [];
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];
var random = require('./class/rand.js');
global.exanak = "Garun";


var side = 10;
global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.xotgishatichArr = [];
global.andzrevArr = [];
andzrevGa = false;
global.arevArr = [];
global.bazm_xotaker = 0;
global.xoteri_tiv = 0;
global.sharjvel_xotaker = 0;
global.sharjvel_gishatich = 0;
global.sharjvel_xotagishatich = 0;



var Grass = require("./class/grass.js");
var glxavor = require("./class/class.js");
var Gishatich = require("./class/gishatich.js");
var tunavorandzrev = require("./class/tunavorandzrev.js");
var XotaGishatich = require("./class/xotagishatich.js");
var Xotaker = require("./class/xotaker.js");
var Arev = require("./class/arev.js");

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(3000);



function DrawInServer() {



    for (var i in grassArr) {
        grassArr[i].bazmanal();

    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
    }
    for (var i in xotgishatichArr) {
        xotgishatichArr[i].utel();
    }
    for (var i in andzrevArr) {
        andzrevArr[i].poxel();
    }
    for (var i in arevArr) {
        arevArr[i].xotajcnel();
    }


    var fs = require('fs');
    var Game = {
        "bazm_xotaker": bazm_xotaker,
        "xoteri_tiv": xoteri_tiv,
        "sharjvel_xotaker": sharjvel_xotaker,
        "sharjvel_gishatich": sharjvel_gishatich,
        "sharjvel_xotagishatich": sharjvel_xotagishatich
    }

    var json = JSON.stringify(Game);

    fs.appendFileSync("game.json", json);


    io.sockets.emit('matrix', matrix, exanak, bazm_xotaker, xoteri_tiv, sharjvel_xotagishatich, sharjvel_gishatich, sharjvel_xotaker);

}



setInterval(DrawInServer, 500);

setInterval(function () {


    if (exanak == "Garun") {
        exanak = "Amar";
    }
    else if (exanak == "Amar") {
        exanak = "Ashun";
    }
    else if (exanak == "Ashun") {
        exanak = "Dzmer";
    }
    else if (exanak == "Dzmer") {
        exanak = "Garun";
    }



}, 2000);

io.on('connection', function (socket) {

    var qanak = 25;
    for (var y = 0; y < qanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < qanak; x++) {
            if (Math.random() < 0.2) {
                matrix[y][x] = 1;
            }
            else if (Math.random() < 0.03) {
                var r = Math.round(Math.random());
                matrix[y][x] = 2 + r / 2;
            }
            else if (Math.random() < 0.02) {
                var r = Math.round(Math.random());
                matrix[y][x] = 3 + r / 2;
            }
            else if (Math.random() < 0.02) {
                var r = Math.round(Math.random());
                matrix[y][x] = 4 + r / 2;
            }
            else if (Math.random() < 0.005) {
                matrix[y][x] = 5;
            }
            else if (Math.random() < 0.002) {
                matrix[y][x] = 6;
            }
            else {
                matrix[y][x] = 0;
            }
        }
    }
    var k = 0;
    setInterval(function () {
        k++;
        if (k % 20 == 0 && andzrevGa == false) {

            andzrevArr.length = 0;

            for (var y = 0; y < qanak; y++) {
                for (var x = 0; x < qanak; x++) {
                    if (matrix[y][x] == 5) {
                        matrix[y][x] = 0;
                    }
                }
            }
            andzrevGa = true;
            function timeoutandzrev() {

                var emptyCells = [];

                for (var y = 0; y < qanak; y++) {
                    for (var x = 0; x < qanak; x++) {
                        if (matrix[y][x] == 0) {
                            emptyCells.push([y, x]);
                        }
                    }
                }

                var count = 5;
                for (var i in emptyCells) {
                    if (count) {
                        var norVandak = emptyCells.splice(random(emptyCells.length - 1), 1)

                        var x = norVandak[0][1];
                        var y = norVandak[0][0];

                        matrix[y][x] = 5;

                        var gr = new tunavorandzrev(x, y);
                        andzrevArr.push(gr);

                        count--;
                    }
                }

                andzrevGa = false;
            }
            if (k > 10) {
                k = 0;
                timeoutandzrev();
            }
        }

    }, 500);

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2 || matrix[y][x] == 2.5) {
                var ser = (Math.round(matrix[y][x]) == matrix[y][x]) ? "arakan" : "igakan";
                var gr = new Xotaker(x, y, ser);
                xotakerArr.push(gr);
            }
            else if (matrix[y][x] == 3) {
                var gr = new Gishatich(x, y);
                gishatichArr.push(gr);
            }
            else if (matrix[y][x] == 4) {
                var gr = new XotaGishatich(x, y);
                xotgishatichArr.push(gr);
            }
            else if (matrix[y][x] == 5) {
                var gr = new tunavorandzrev(x, y);
                andzrevArr.push(gr);
            }
            else if (matrix[y][x] == 6) {
                var gr = new Arev(x, y);
                arevArr.push(gr);
            }

        }
    }



});

