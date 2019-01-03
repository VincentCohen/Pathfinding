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

        var items = []

        items[20] = []
        items[21] = []
        items[20][21] = 'wall';
        items[20][22] = 'route';
        items[20][23] = 'route';
        items[21][23] = 'wall';

        this.draw(items);
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
