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

        this.grid();
        this.draw();
    }

    draw() {
        this.ctx.fillStyle = this.nodeColor;
        var x = 0;
        for (var i = 0; i < 30; i++ ) {
            this.square(i,x);
            x++;
        }
    }

    square(x,y) {
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

        console.log(Math.floor(x));

        for (var y = 0.5; y < this.canvas.height; y += this.nodeSize)
        {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
        }

        console.log(Math.floor(y));

        return this.ctx.stroke();
    }
  
  }
