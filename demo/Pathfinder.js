class Pathfinder {

    constructor(canvas) {
        
        this.debug = true;
        this.canvas = canvas;
        this.grid = this.grid.bind(this);

        this.board = this.grid();

        this.say("Constructed Pathfinder.js");

        var self = this;
        // Run every x and redraw
        var interval = setInterval(function() {
            var rand = Math.floor(Math.random() * Math.floor(50));

            var items = []
            items[rand] = []
            items[rand+1] = []
            items[rand][rand] = 'wall';
            items[rand][rand+1] = 'route';
            items[rand][rand+2] = 'route';
            items[rand+1][rand+3] = 'wall';

            self.grid().draw(items);
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
 