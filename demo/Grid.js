class Grid {

    constructor() {

        console.log('Constructing Grid.js');
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

        this.grid();
        this.draw();
    }

    draw() {
        var wall = []

        wall[20] = []
        wall[21] = []
        wall[20][21] = 'wall';
        wall[20][22] = 'route';
        wall[20][23] = 'route';
        wall[21][23] = 'wall';

        wall.forEach(function(item, x) {
            
            item.forEach(function(val, y) {
                if (val === 'wall') {
                    this.square(x, y, '#FF0000');
                }

                if (val === 'route') {
                    this.square(x, y, '#E3E3E3');
                }

            }, this);
        }, this);

    }

    square(x,y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(
            x*this.nodeSize, 
            y*this.nodeSize, 
            this.nodeSize, 
            this.nodeSize
        );
    }
  
    grid() {

        for (var x = 0.5; x < this.canvas.width; x += this.nodeSize)
        {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.width);
        }

        for (var y = 0.5; y < this.canvas.height; y += this.nodeSize)
        {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
        }

        return this.ctx.stroke();
    }
 }
