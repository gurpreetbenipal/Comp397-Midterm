var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //Add Play Label
            this._playLabel = new objects.Label("ROLL THE DICE", "40px Cambria", "#FFCC00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 200);
            this.addChild(this._playLabel);
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
            this._label1 = new objects.Label(this._number1.toString(), "bold 20px Cambria", "#000000", 165, 300);
            this.addChild(this._label1);
            //Add the Label for Dice 1 Result
            this._label2 = new objects.Label(this._number2.toString(), "bold 20px Cambria", "#000000", 465, 300);
            this.addChild(this._label2);
            //Add the Roll Button to the scene
            this._rollButton = new objects.Button("RollButton", 345, 370);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        /*Method to reset everything */
        Play.prototype._resetAll = function () {
            this._number1 = 1;
            this._number2 = 1;
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            /*Play ButtonPress Sound*/
            createjs.Sound.play("ButtonPressSound");
            /* Generate 2 Random numbers */
            var random1 = Math.floor(Math.random() * 6 + 1);
            var random2 = Math.floor(Math.random() * 6 + 1);
            /*Displaying the random numbers generated on the Labels */
            this._label1.text = random1.toString();
            this._label2.text = random2.toString();
            /*Displaying the image corresponding to those numbers*/
            this._dice1.image = assets.getResult(random1.toString());
            this._dice2.image = assets.getResult(random2.toString());
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map