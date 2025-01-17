import Phaser from "phaser";

import Constants from "./Constants";
import { STATE_DEFAULT } from "./State"

export default class Scene0 extends Phaser.Scene {
    private fading: boolean;

    constructor() {
        super({ key: 'Scene0' });
        this.fading = false;
    }

    create() {
        this.add.text(this.cameras.main.displayWidth * (1/4), this.cameras.main.displayHeight * (4/10), 'Select KIKI or BOUBA\n to start!', { color: '#2b2f33', fontSize: '42px'});

        const kikiBtn = this.add.text(this.cameras.main.displayWidth * (1/4), this.cameras.main.displayHeight * (7/10), 'KIKI', { color: '#2B2F33', fontSize: '36px'}).setInteractive();
        kikiBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });
        const boubaBtn = this.add.text(this.cameras.main.displayWidth * (2/4), this.cameras.main.displayHeight * (7/10), 'BOUBA', { color: '#2B2F33', fontSize: '36px'}).setInteractive();
        boubaBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            this.scene.start('Scene1', STATE_DEFAULT);
        });
    }
}