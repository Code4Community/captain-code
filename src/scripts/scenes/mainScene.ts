import { BoxObject, ExtendedObject3D } from '@enable3d/common/dist/types'
import { Scene3D } from '@enable3d/phaser-extension'


export default class MainScene extends Scene3D {
  cursors: any
  box: ExtendedObject3D
  constructor() {
    super({ key: 'MainScene' })

  }

  init() {
    this.accessThirdDimension()
  }

  create() {
    // creates a nice scene
    this.third.warpSpeed()

    // adds a box
    this.box = this.third.physics.add.box({ x: 1, y: 2 })

    this.cursors = this.input.keyboard.createCursorKeys();
      

    // throws some random object on the scene
    this.third.haveSomeFun()
  }

  update() {
    
    if (this.cursors.left.isDown) {
     this.box.translateX(-20)
    } else if (this.cursors.right.isDown) {
      this.box.translateX(20);
    } 
    else if (this.cursors.up.isDown) {
      this.box.translateZ(-20);
    } 
    else if (this.cursors.down.isDown) {
      this.box.translateZ(20);
    } 
    else if (this.cursors.space.isDown) {
      this.box.translateY(20);
    } 
    else {
      this.box.translateY(-10);
      
    }
  }
}
