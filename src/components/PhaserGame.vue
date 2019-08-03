<template>
  <div ref="phaser">
  </div>
</template>
<script lang="ts">
import "phaser";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class PhaserGame extends Vue
  implements Phaser.Types.Core.GameConfig {
  public type = Phaser.WEBGL;
  public physics = {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  };
  public scene = [new MyScene()];
  public parent?: HTMLElement;
  private game?: Phaser.Game;
  private mounted() {
    this.parent = this.$refs.phaser as HTMLElement;
    this.game = new Phaser.Game(this as Phaser.Types.Core.GameConfig);
  }
}

class MyScene extends Phaser.Scene {
  constructor() {
    super("my-scene");
    console.log(this.events);
  }
  preload() {
    console.log( require("../assets/logo.png"));
    this.load.image("logo", require("../assets/logo.png"));
  }
  create() {
    const logo = this.physics.add.image(400, 100, "logo");
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

  }
  update(time: number, delta: number): void {
   
  }
}
</script>
