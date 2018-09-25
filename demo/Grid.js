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
        this.nodeColor = '#E3E3E3';

        this.grid();
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
