function Stairs() {
    this.currentStair = 0;
}

Stairs.prototype = new LadderProto();

function LadderProto() {
    this.up = function () {
        this.currentStair++;
    }

    this.down = function () {
        if (this.currentStair > 0) {
            this.currentStair--;
        }
    }

    this.ShowStair = function () {
        return this.currentStair;
    }

}

const ladder = new Stairs();