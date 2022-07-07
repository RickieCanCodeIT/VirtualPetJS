class VirtualPet {
    constructor(name, furColor, sound) {
        this._name = name;
        this._furColor = furColor;
        this._sound = sound;
        this._hunger = 0;
        this._thirst = 0;
        this._boredom = 0;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get furColor() {
        return this._furColor;
    }

    get sound() {
        return this._sound;
    }

    tick() {
        this._hunger++;
        this._thirst++;
        this._boredom++;
    }

    getStatus() {
        return this._name + ": Hunger: " + this._hunger + " Thirst: " + this._thirst + 
            " Boredom: " + this._boredom;
    }

    feed() {
        this._hunger -= 5;
    }

    drink() {
        this._thirst -= 5;
    }

    play() {
        this._boredom -= 5;
    }
}

export default VirtualPet;