abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string
    ){}
    abstract view():void
    //for abstract classes, you can define methods and how they work
    getReelTime():number{
        return 8
    }
}


class InstagramPrototype extends TakePhoto{
 constructor(
    public cameraMode: string,
    public filter: string,
 ){
    super(cameraMode,filter)
 }
 view(): void {
      console.log("see people");       
 }
}

const obj1 = new InstagramPrototype("test","test1")
obj1.getReelTime();