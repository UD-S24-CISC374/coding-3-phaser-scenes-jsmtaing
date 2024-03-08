import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
    constructor() {
        super({key: 'Preload' });
    }

    preload(){
        // Images
        this.load
            .image('kb1', 'assets/img/kb_1.png')
            .image('kb2', 'assets/img/kb_2.png')
            .image('kb3', 'assets/img/kb_3.png')
            .image('kb4', 'assets/img/kb_4.png')
            .image('kb5', 'assets/img/kb_5.png')
            .image('kb6', 'assets/img/kb_6.png');
    }

    create() {
        const a_desc: Phaser.Types.Animations.Animation = {
            key: 'a',
            frames: [],
            frameRate: 15,
            repeat: -1
        };

        for (let i = 0; i <= 1; i++){
            (a_desc.frames as Phaser.Types.Animations.AnimationFrame[]).push({key: `a${i}` });
        }
        this.anims.create(a_desc);

        const j_desc: Phaser.Types.Animations.Animation = {
            key: 'j',
            frames: [],
            frameRate: 35,
            repeat: -1
        };
        for (let i = 0; i <= 49; i++) {
            (j_desc.frames as Phaser.Types.Animations.AnimationFrame[]).push({ key: `j${i}` });
        }
        this.anims.create(j_desc);

        this.scene.start('Scene0');
    }
}