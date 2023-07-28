import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Plr from "./Plr/Plr.js";
import Level from "./Level/Level.js";
import Raycast from "./Raycast/Raycast.js";
import Levelcolormap from "./Levelcolormap/Levelcolormap.js";
import Npcs from "./Npcs/Npcs.js";
import Pen from "./Pen/Pen.js";
import SuperSecretSprite from "./SuperSecretSprite/SuperSecretSprite.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Plr: new Plr({
    x: -37.12112130466343,
    y: 88.49358368331379,
    direction: -27,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 150,
    visible: true,
    layerOrder: 2
  }),
  Level: new Level({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Raycast: new Raycast({
    x: 236,
    y: -68.22062704049101,
    direction: 7.5488654495114815,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Levelcolormap: new Levelcolormap({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Npcs: new Npcs({
    x: -33,
    y: 37,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 1,
    size: 225,
    visible: true,
    layerOrder: 3
  }),
  Pen: new Pen({
    x: 141.44352523947063,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 2.5,
    visible: true,
    layerOrder: 4
  }),
  SuperSecretSprite: new SuperSecretSprite({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
