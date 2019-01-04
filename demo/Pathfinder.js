class Pathfinder {

    constructor(canvas) {
        
        this.debug = true;
        this.canvas = canvas;
        this.grid = this.grid.bind(this);

        this.board = this.grid();

        this.say("Constructed Pathfinder.js");


        this.tiles = []
        this.tiles[0] = []
        this.tiles[1] = []
        this.tiles[1][0] = 'wall';
        this.tiles[1][1] = 'route';
        this.tiles[1][2] = 'wall';

        var self = this;
        // Run every x and redraw
        var interval = setInterval(function() {
            // retrieve remote items..
            var rand = Math.floor(Math.random() * Math.floor(50));            

            self.grid().draw(self.tiles);
        }, 1000);
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

        this.board.square(x, y, '#f8f8f8');
    }

    say(msg) {
        if (this.debug) {
            console.log(msg);
        }
    }

    update() {

        console.log('drawing..');

        // this.board.draw(items);
    }

    // cells() {
    //     // Draw every of every itteration
    // }

}
 