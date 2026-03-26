//creates a level and handles its functions
class LevelOne{
    levelName;
    elementHelper

    constructor(){
        this.elementHelper = new ElementsHelper();
        this.levelName = 'Level One'
    }

    draw(){
        fill(0);
        this.elementHelper.AddText(this.levelName, width/2, height/2);
    }
}