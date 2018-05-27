var socket = io.connect("http://localhost:3000");
var exanak = "Garun";
var side = 20;



function preload() {
    img_xotaker = loadImage('images/xotaker.png');
    img_gishatich = loadImage('images/gishatich.png');
    img_xotagishatich = loadImage('images/xotagishatich.png');
    img_tunavor_andzrev = loadImage('images/tunavor_andzrev.png');
    img_arev = loadImage('images/arev.png');
}

function setup() {
    createCanvas(500, 500);
    background('#acacac');
    noStroke();
}



function drawMatrix(mat, ex) {
    var exanak = ex;
    var matrix = mat;
    var xot_tiv = 0;
    var gish_tiv = 0;
    var xotagish_tiv = 0;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                if (exanak == "Garun") {
                    fill("#00ff80");
                }
                else if (exanak == "Amar") {
                    fill("#00ff00");
                }
                else if (exanak == "Ashun") {
                    fill("#bfff00");
                }
                else if (exanak == "Dzmer") {
                    fill("#808080");
                }


                rect(x * side, y * side, side, side);
            }
      
            else if (matrix[y][x] == 2) {
                image(img_xotaker, x * side, y * side);
            }
            
            else if (matrix[y][x] == 3) {
                image(img_gishatich, x * side, y * side);
            }
            else if (matrix[y][x] == 4) {
                image(img_xotagishatich, x * side, y * side);
            }
            else if (matrix[y][x] == 5) {
                image(img_tunavor_andzrev, x * side, y * side);
            }
            else if (matrix[y][x] == 6) {
                image(img_arev, x * side, y * side);
            }
        }
    }
}
socket.on('matrix', function (matrix, exanak, bazm_xotaker, xoteri_tiv, sharjvel_xotagishatich, sharjvel_gishatich, sharjvel_xotaker) {
    drawMatrix(matrix, exanak);
    exanak_xax.innerHTML = exanak;
    bazmanal_xotaker.innerHTML = bazm_xotaker;
    xoter.innerHTML = xoteri_tiv;
    sharjvel_xotagish.innerHTML = sharjvel_xotagishatich;
    sharjvel_gish.innerHTML = sharjvel_gishatich;
    sharjvel_xotak.innerHTML = sharjvel_xotaker;

    
});


