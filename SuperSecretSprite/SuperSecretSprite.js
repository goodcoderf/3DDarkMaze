/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SuperSecretSprite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SuperSecretSprite/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./SuperSecretSprite/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "v" }, this.whenKeyVPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyVPressed() {
    if (this.toString(this.stage.vars.mode) === "Normal") {
      this.stage.vars.mode = "Developer";
      this.stage.watchers.cameraDir.visible = true;
      this.stage.watchers.fov.visible = true;
      this.stage.watchers.mode.visible = true;
      this.stage.watchers.dv.visible = true;
    } else {
      this.stage.vars.mode = "Normal";
      this.stage.watchers.cameraDir.visible = false;
      this.stage.watchers.fov.visible = false;
      this.stage.watchers.mode.visible = false;
      this.stage.watchers.dv.visible = false;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.mode = "Normal";
  }
}
