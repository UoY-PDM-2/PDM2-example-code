//creates a level and handles its functions
class LevelTwo{
    levelName;
    elementHelper

    constructor(){
        this.elementHelper = new ElementsHelper();
        this.levelName = 'Level Two'
    }

    draw(){
        fill(0);
        this.elementHelper.AddText(this.levelName, width/2, height/2);
    }
}