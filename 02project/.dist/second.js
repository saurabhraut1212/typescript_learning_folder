"use strict";
class Youtube {
    constructor(camera, filter, burst) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
    }
}
class NewStory {
    constructor(camera, filter, burst, action) {
        this.camera = camera;
        this.filter = filter;
        this.burst = burst;
        this.action = action;
    }
    createStory() {
        console.log('This is function');
    }
}
