import Phaser from "phaser";
import Load from "./scenes/load";
import Start from "./scenes/start";
import ManyPaths from "./scenes/many-paths";

// Import "phaser-navmesh" for transpiled code and "phaser-navmesh/src" for non-transpiled code
import PhaserNavMesh from "phaser-navmesh/src";

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: "game-container",
  width: 750,
  height: 750,
  backgroundColor: "#fff",
  pixelArt: false,
  plugins: {
    scene: [
      {
        key: "NavMeshPlugin", // Key to store the plugin class under in cache
        plugin: PhaserNavMesh, // Class that constructs plugins
        mapping: "navMeshPlugin", // Property mapping to use for the scene, e.g. this.navMeshPlugin
        start: true
      }
    ]
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: 0
    }
  }
});

game.scene.add("load", Load);
game.scene.add("start", Start);
game.scene.add("many-paths", ManyPaths);
game.scene.start("load");
