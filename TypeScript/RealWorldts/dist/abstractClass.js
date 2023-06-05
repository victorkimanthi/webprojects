"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //for abstract classes, you can define methods and how they work
    getReelTime() {
        return 8;
    }
}
class InstagramPrototype extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    view() {
        console.log("see people");
    }
}
const obj1 = new InstagramPrototype("test", "test1");
obj1.getReelTime();
