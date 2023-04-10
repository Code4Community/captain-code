import { BoxObject, ExtendedObject3D } from '@enable3d/common/dist/types'
import { Scene3D } from '@enable3d/phaser-extension'
import duck from "../../assets/Duck.glb";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Math } from 'phaser';
// import { GLTFLoader } from '../GLTFLoader.js'
// import { PhysicsLoader } from '@enable3d/phaser-extension'
import { PhysicsLoader } from '@enable3d/ammo-physics'

// console.log(Duck);
// import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';


export default class MainScene extends Scene3D {
  cursors: any
  duck: any
  box: ExtendedObject3D
  buttonPressed: boolean
  directionData:Array<Array<number>>
  direction:integer


    constructor() {
        super({ key: 'MainScene' })
        //2D array for direction data. First two elements of each subarray are x and z decrements, respectively.
    //The third element is the next index if right rotate, and the fourth is next if left rotate
    this.directionData = [[1,0,1,3],[0,1,2,0],[-1,0,3,1],[0,-1,0,2]];
    this.direction = 0;

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

        console.log(this);

         new GLTFLoader().loadAsync(duck).then( gltf => {
            this.duck = gltf.scene.children[0]
            console.log(duck);
            this.duck.position.x = 0;
            this.duck.position.y = 0;
            this.duck.position.z = 0;
            this.duck.rotation.y = Math.PI2/2;
            this.third.scene.add(this.duck);
        })

        this.third.physics.debug?.enable()

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
      if (this.cursors.left.isDown) {
        if(!this.buttonPressed){
            this.direction = this.directionData[this.direction][3];
            this.duck.rotation.y += Math.PI2/4;
            this.buttonPressed = true;
          }
  
  
      } else if (this.cursors.right.isDown) {
        if(!this.buttonPressed){
          this.direction = this.directionData[this.direction][2];
          this.duck.rotation.y += -Math.PI2/4;
          this.buttonPressed = true;
        }
      }
      else if (this.cursors.up.isDown) {
        if(!this.buttonPressed){
          this.duck.position.x = this.duck.position.x - this.directionData[this.direction][0];
          this.duck.position.z = this.duck.position.z - this.directionData[this.direction][1];
          this.buttonPressed = true;
        }
      }  
      else{
        this.buttonPressed = false;
      }
  
    }
}
