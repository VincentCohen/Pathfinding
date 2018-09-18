class Grid {

    constructor(canvas) {

        this.width  = document.body.clientWidth;
        this.height = document.body.clientHeight;

        canvas.width = this.width;
        canvas.height = this.height;
        this.canvas = canvas;

        this.nodeSize  = 40;
        this.nodeColor = '#E3E3E3';
    }
  
    generate() {
        //
        this.draw();
    }

    draw() {
        //
        console.log(this.canvas);
    }
  
  }
