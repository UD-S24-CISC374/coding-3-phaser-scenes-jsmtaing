import Phaser from "phaser";

import Constants from "./Constants";
import State, { STATE_DEFAULT } from "./State";

export default class Scene1 extends Phaser.Scene {
    private state: State;
    private fading: boolean;

    constructor() {
        super({ key: 'Scene1' });
        this.state = STATE_DEFAULT;
        this.fading = false;
    }

    init(data: State) {
        this.state = data;
    }

    create() {
        this.cameras.main.fadeIn(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
        this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'kb_1');

        const kikiBtn = this.add.text(this.cameras.main.displayWidth * (1/4), this.cameras.main.displayHeight * (7/10), 'KIKI', { color: '#2B2F33', fontSize: '36px'}).setInteractive();
        kikiBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.state.kiki++;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });
        const boubaBtn = this.add.text(this.cameras.main.displayWidth * (2/4), this.cameras.main.displayHeight * (7/10), 'BOUBA', { color: '#2B2F33', fontSize: '36px'}).setInteractive();
        boubaBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.state.bouba++;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            this.scene.start('Scene2', this.state);
        });
    }
}