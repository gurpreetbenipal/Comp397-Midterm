// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        
        //Declaration of two dice images
        private _dice1: createjs.Bitmap;
        private _dice2: createjs.Bitmap;
        
        //Declaration of Labels
        private label1 : objects.Label;
        private label2:objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add Play Label
            this._playLabel = new objects.Label(
                "PLAY SCENE","60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y);
            this.addChild(this._playLabel);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}