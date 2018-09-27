class Pathfinder {

    constructor (canvas) {
        let grid = new Grid(canvas);

        this.addEventListeners()

        // Run every x and redraw
        this.update();
    }

    addEventListeners() {
        document.addEventListener("click", this.add)
    }

    add(event) {
        console.log(event.clientX + '-' + event.clientY);
    }

    update () {
        this.cells();
    }

    cells() {
        // Draw every of every itteration
    }

}
 