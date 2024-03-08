import Phaser from "phaser";

import Constants from "./Constants";
import State, { STATE_DEFAULT } from "./State";

export default class Scene7 extends Phaser.Scene {
    private state: State;
    private fading: boolean;

    constructor() {
        super({ key: 'Scene7' });
        this.state = STATE_DEFAULT;
        this.fading = false;
    }

    init(data: State) {
        this.state = data;
    }

    create() {
        this.cameras.main.fadeIn(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
        this.add.text(
            this.cameras.main.displayWidth * (0.3),
            this.cameras.main.displayHeight * (0.4),
            `Kiki's: ${this.state.kiki}`,
            { color: '#2B2F33', fontSize: '50px'}
        );

        this.add.text(
            this.cameras.main.displayWidth * (0.3),
            this.cameras.main.displayHeight * (0.6),
            `Bouba's: ${this.state.bouba}`,
            { color: '#2B2F33', fontSize: '50px'}
        );
    }
}