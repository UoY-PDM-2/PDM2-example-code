class LevelOne{
    levelName;
    elementHelper

    constructor(){
        this.elementHelper = new ElementsHelper();
        this.levelName = 'Level One'
    }

    draw(){
        fill(100,150,50, 50);
        this.elementHelper.AddRect(0,0, 400,400);
        fill(0);
        this.elementHelper.AddText(this.levelName, width/2, height/2);
    }
}