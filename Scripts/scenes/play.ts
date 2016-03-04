// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        
        //Declaration of Roll Button
        private _rollButton : objects.Button;
        
        //Declaration of two dice images
        private _dice1: createjs.Bitmap;
        private _dice2: createjs.Bitmap;
        
        //Declaration of Labels
        private _label1 : objects.Label;
        private _label2 : objects.Label;
        
        //Declaration of numbers on the labels
        private _number1 : number;
        private _number2 : number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add Play Label
           /* this._playLabel = new objects.Label(
                "PLAY SCENE","60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y);
            this.addChild(this._playLabel);
            */

            //Reset Everything
            this._resetAll();
            //Add Image for Dice 1 in the scene
            this._dice1 = new createjs.Bitmap(assets.getResult("1"));
            this._dice1.x = 100;
            this._dice1.y = 100;
            this.addChild(this._dice1);
            
            //Add Image for Dice 1 in the scene
            this._dice2 = new createjs.Bitmap(assets.getResult("1"));
            this._dice2.x = 400;
            this._dice2.y = 100;
            this.addChild(this._dice2);
            
            //Add the Label for Dice 1 Result
            this._label1 = new objects.Label(this._number1.toString(), "bold 20px Cambria", "#000000", 150, 300);
            this.addChild(this._label1);
            
            //Add the Label for Dice 1 Result
            this._label2 = new objects.Label(this._number2.toString(), "bold 20px Cambria", "#000000", 450, 300);
            this.addChild(this._label2);
            
            //Add the Roll Button to the scene
            this._rollButton = new objects.Button("RollButton", 352, 400);
            this.addChild(this._rollButton );
            this._rollButton .on("click", this._rollButtonClick, this); 
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

         /*Method to reset everything */
        private _resetAll():void {
            this._number1 = 1;
            this._number2 = 1;
        }
        
        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        private _rollButtonClick(event: createjs.MouseEvent): void {
            
            /*Play ButtonPress Sound*/
            createjs.Sound.play("ButtonPressSound"); 
            
            /* Generate 2 Random numbers */
            var random1 = Math.floor(Math.random() * 6 + 1);
            var random2 = Math.floor(Math.random() * 6 + 1);
            
            this._label1.text = random1.toString();
            this._label2.text = random2.toString();

            this._dice1.image = assets.getResult(random1.toString());
            this._dice2.image = assets.getResult(random2.toString());
            
        }
        
    }
}