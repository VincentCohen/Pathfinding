class Pathfinder {

    constructor(canvas) {
        
        this.debug = true;
        this.canvas = canvas;
        this.grid = this.grid.bind(this);

        this.board = this.grid();

        this.say("Constructed Pathfinder.js");
        // Run every x and redraw
        // this.update();
    }

    grid() {
        if (!this.gridCached) {
            this.gridCached = new Grid(this.canvas);
        }
        this.say("Pathfinder.Grid()");
        return this.gridCached;
    }

    add(x, y) {
        
        x = Math.floor(x/this.grid().nodeSize);
        y = Math.floor(y/this.grid().nodeSize) || 0;

        this.board.square(x, y, '#E3E3E3');
    }

    say(msg) {
        if (this.debug) {
            console.log(msg);
        }
    }

    // update() {
    //     this.cells();
    // }

    // cells() {
    //     // Draw every of every itteration
    // }

}
 