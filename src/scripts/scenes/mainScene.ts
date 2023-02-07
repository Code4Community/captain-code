import { Scene3D } from '@enable3d/phaser-extension'
import duck from "../../assets/Duck.glb";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import 
import duck from './Duck.glb';
// import Duck from "../../assets/img/Duck.glb"
// import { GLTFLoader } from '../GLTFLoader.js'
// import { PhysicsLoader } from '@enable3d/phaser-extension'
import { PhysicsLoader } from '@enable3d/ammo-physics'

// console.log(Duck);
// import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';


export default class MainScene extends Scene3D {
  cursors: any
  box: any

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
    // this.third.add.box({ x: 1, y: 2 })

    // adds a box with physics
    // this.third.physics.add.box({ x: -1, y: 2 })

    // throws some random object on the scene
    // this.third.haveSomeFun()


    this.box = this.third.physics.add.box({ x: 5 }, { phong: { color: 'green' } })
    // this.box.position.setX(200)
    // this.box.position


    new GLTFLoader().loadAsync('Duck.glb').then( gltf => {
      const duck: any = gltf.scene.children[0]
      duck.position.z = 6
      this.scene.add(duck, {})
    })

    this.third.physics.debug?.enable()

    this.cursors = this.input.keyboard.createCursorKeys()


  }

  update() {
    if (this.cursors.left.isDown) {
      console.log(this.box.position.z)
    }
  }
}
