class Grid {

    constructor() {
        this.width  = document.body.clientWidth;
        this.height = document.body.clientHeight;

        var canvas = document.getElementById("grid");
        canvas.width = this.width;
        canvas.height = this.height;
        
        this.canvas = canvas;

        this.ctx = canvas.getContext("2d");
        this.ctx.strokeStyle = "#E3E3E3";

        this.nodeSize  = 20;
        this.nodeColor = '#FF0000';

        this.tiles = [];

        this.grid();
    }

    draw(items) {
        items.forEach(function(item, x) {
            
            item.forEach(function(val, y) {
                if (val === 'wall') {
                    this.square(x, y, '#FF0000');
                }

                if (val === 'route') {
                    this.square(x, y, '#f6f6f6');
                }

            }, this);
        }, this);

    }

    square(x,y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            x*this.nodeSize + 1, // Makes sure the square falls within the grid borders
            y*this.nodeSize + 1, 
            this.nodeSize-1, 
            this.nodeSize-1 
        );
    }
  
    grid() {
        this.ctx.strokeStyle = '#f0f0f0';


        var xAxis = Math.floor(this.canvas.width/this.nodeSize);
        var yAxis = Math.floor(this.canvas.height/this.nodeSize);

        for (var x = 0; x < xAxis; x++) {
            this.ctx.moveTo(x*this.nodeSize, 0);
            this.ctx.lineTo(x*this.nodeSize, this.canvas.width);

            this.tiles[x] = [];
            for (var y = 0; y < yAxis; y++) {
                this.tiles[x][y] = [];
            }
        }

        console.log(this.tiles);

        for (var y = 0; y < yAxis; y++) {
            this.ctx.moveTo(0, y*this.nodeSize);
            this.ctx.lineTo(this.canvas.width, y*this.nodeSize);
        }

        return this.ctx.stroke();
    }
 }
