import Phaser from "phaser";

import Preload from "./scenes/Preload";
import Scene0 from "./scenes/Scene0";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";
import Scene4 from "./scenes/Scene4";
import Scene5 from "./scenes/Scene5";
import Scene6 from "./scenes/Scene6";
//import Scene7 from "./scenes/Scene7";

const DEFAULT_WIDTH = 876;
const DEFAULT_HEIGHT = 720;

export const CONFIG = {
    title: "Is it Kiki or Bouba?",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#e3dac9",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [Preload, Scene0, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, //Scene7],
],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 300 },
            fps: 60,
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
};
