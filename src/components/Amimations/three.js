import * as THREE from "three";

import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let container, stats, clock, gui, mixer, actions, activeAction, previousAction;
let camera, scene, renderer, model, face;

const api = { state: "Idle" };

init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  //   camera = new THREE.PerspectiveCamera(
  //     45,
  //     window.innerWidth / window.innerHeight,
  //     0.25,
  //     100
  //   );
  //   camera.position.set(-5, 3, 10);
  //   camera.lookAt(0, 2, 0);
  // camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.setZ(0);
  camera.position.setX(0);
  camera.position.setY(0);

  scene = new THREE.Scene();

  //   scene.background = new THREE.Color(0xe0e0e0);
  //   scene.fog = new THREE.Fog(0xe0e0e0, 20, 100);

  clock = new THREE.Clock();

  // lights

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 3);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.position.set(0, 20, 100);
  scene.add(dirLight);

  // ground

    // const mesh = new THREE.Mesh(
    //   new THREE.PlaneGeometry(2000, 2000),
    //   new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
    // );
    // mesh.rotation.x = -Math.PI / 2;
    // scene.add(mesh);

    // const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000);
    // grid.material.opacity = 0.2;
    // grid.material.transparent = true;
    // scene.add(grid);

  // model

  const loader = new GLTFLoader();
  loader.load(
    "/RobotExpressive.glb",
    function (gltf) {
      model = gltf.scene;
      scene.add(model);

      model.position.z = -16;
      model.position.y = 0;
      model.position.x = 7;
      createGUI(model, gltf.animations);
    },
    undefined,
    function (e) {
      console.error(e);
    }
  );

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);

  // stats
  stats = new Stats();
  container.appendChild(stats.dom);
}

function createGUI(model, animations) {
  const states = [
    "Idle",
    "Walking",
    "Running",
    "Dance",
    "Death",
    "Sitting",
    "Standing",
  ];
  const emotes = ["Jump", "Yes", "No", "Wave", "Punch", "ThumbsUp"];

  gui = new GUI();

  mixer = new THREE.AnimationMixer(model);

  actions = {};

  for (let i = 0; i < animations.length; i++) {
    const clip = animations[i];
    const action = mixer.clipAction(clip);
    actions[clip.name] = action;

    if (emotes.indexOf(clip.name) >= 0 || states.indexOf(clip.name) >= 4) {
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
    }
  }

  // states

  const statesFolder = gui.addFolder("States");

  const clipCtrl = statesFolder.add(api, "state").options(states);

  clipCtrl.onChange(function () {
    fadeToAction(api.state, 0.5);
  });

  statesFolder.open();

  // emotes

  const emoteFolder = gui.addFolder("Emotes");

  function createEmoteCallback(name) {
    api[name] = function () {
      fadeToAction(name, 0.2);

      mixer.addEventListener("finished", restoreState);
    };

    emoteFolder.add(api, name);
  }

  function restoreState() {
    mixer.removeEventListener("finished", restoreState);

    fadeToAction(api.state, 0.2);
  }

  for (let i = 0; i < emotes.length; i++) {
    createEmoteCallback(emotes[i]);
  }

  emoteFolder.open();

  // expressions

  face = model.getObjectByName("Head_4");

  const expressions = Object.keys(face.morphTargetDictionary);
  const expressionFolder = gui.addFolder("Expressions");

  for (let i = 0; i < expressions.length; i++) {
    expressionFolder
      .add(face.morphTargetInfluences, i, 0, 1, 0.01)
      .name(expressions[i]);
  }

  activeAction = actions["Idle"];
  activeAction.play();

  expressionFolder.open();
}

function fadeToAction(name, duration) {
  previousAction = activeAction;
  activeAction = actions[name];

  if (previousAction !== activeAction) {
    previousAction.fadeOut(duration);
  }

  activeAction
    .reset()
    .setEffectiveTimeScale(1)
    .setEffectiveWeight(1)
    .fadeIn(duration)
    .play();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animate() {
  const dt = clock.getDelta();

  if (mixer) mixer.update(dt);

  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  stats.update();
}

// camera.position.setZ(30);
// camera.position.setX(-3);

let prevtime = 0;
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // moon.rotation.x += 0.05;
  // moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;


  if (t) {
    //rotate model
    // model.rotation.y += 0.1;
    // model.rotation.y -= 0.001;
    // model.position.z = -16 - (t / 100) * 1.4;

  camera.rotation.y = - (t / 700) ;
  // moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  // moon.rotation.z += 0.05;

    //set animation to runnig
    console.log(api.state);

    if (api.state != "Walking") {
        
      fadeToAction("Walking", 1);
      api.state = "Walking";
      // actions["Death"].play();
    }

    if( t>-100){
        model.rotation.y = -t/100;
    }
    if(t< -1300){
      console.log("t",t);
    }
  }

}

//check for hover on a btn
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', function(){
//     // console.log("hovered");
//     //set animation to runnig
//     fadeToAction("Dance", 0.5);
//     api.state = "Dance";
// });

document.body.onscroll = moveCamera;
moveCamera();

//run movecamera after 2 sec
setTimeout(function () {
  HoverIntail();
}, 1000);

function HoverIntail() {
  const elements = document.querySelector(".mantine-qyuqoy");

  function restoreState() {
    mixer.removeEventListener("finished", restoreState);

    fadeToAction(api.state, 0.2);
  }

fadeToAction("Wave", 0.5);
 mixer.addEventListener("finished", restoreState);



  elements.addEventListener("mouseover", function () {
    // console.log("hovered");
    //set animation to runnig
    fadeToAction("Yes", 0.2);

    mixer.addEventListener("finished", restoreState);
    // fadeToAction("Yes", 0.5);
    });
    


    // const elements2 = document.querySelector(".mantine-Text-root");
    // elements2.addEventListener("mouseover", function () {
        

    //     fadeToAction("Wave", 0.5);
    //     mixer.addEventListener("finished", restoreState);
    //     });
    //     //mouse out


        // const cbox = document.querySelectorAll(".mantine-Text-root");
        // console.log(cbox);
        // for (let i = 0; i < cbox.length; i++) {
        //     cbox[i].addEventListener("mouseover", function () {
        //         // console.log("hovered");
        //         //set animation to runnig
        //         fadeToAction("Yes", 0.2);
            
        //         mixer.addEventListener("finished", restoreState);
        //         // fadeToAction("Yes", 0.5);
        //         });
        // }


}
function addStar() {
  const geometry = new THREE.SphereGeometry(0.2, 0, 0);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);


const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(0);
