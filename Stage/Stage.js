/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("test", "./Stage/costumes/test.png", { x: 480, y: 360 }),
      new Costume("floor", "./Stage/costumes/floor.svg", {
        x: 242.4174174174173,
        y: 179.2492492492495
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.fov = 70;
    this.vars.res = 8;
    this.vars.cameraDir = -27;
    this.vars.dv = 342.75552162286044;
    this.vars.mode = "Developer";

    this.watchers.fov = new Watcher({
      label: "FOV",
      style: "slider",
      visible: true,
      value: () => this.vars.fov,
      setValue: value => {
        this.vars.fov = value;
      },
      step: 1,
      min: 30,
      max: 120,
      x: 246,
      y: 167
    });
    this.watchers.res = new Watcher({
      label: "RES",
      style: "slider",
      visible: true,
      value: () => this.vars.res,
      setValue: value => {
        this.vars.res = value;
      },
      step: 1,
      min: 4,
      max: 16,
      x: 575,
      y: 173
    });
    this.watchers.cameraDir = new Watcher({
      label: "CAMERA DIR",
      style: "normal",
      visible: true,
      value: () => this.vars.cameraDir,
      x: 243,
      y: 126
    });
    this.watchers.dv = new Watcher({
      label: "DV",
      style: "normal",
      visible: true,
      value: () => this.vars.dv,
      x: 576,
      y: 124
    });
    this.watchers.mode = new Watcher({
      label: "Mode",
      style: "normal",
      visible: true,
      value: () => this.vars.mode,
      x: 411,
      y: 129
    });
  }
}
