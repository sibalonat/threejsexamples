import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.module.js";
import { ARButton } from " .libs/threejs-r132/examples/jsm/webxr/ARButton.js";
// import "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.module.js";
// import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.module.js";
// instead of importing threejs, you use it through the library mindar
// const THREE = window.MINDAR.IMAGE.THREE;
// import { mockWithVideo, mockWithImage } from "./libs/camera-mock.js";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const start = async () => {
      //instead of using promises you use mock with video or image
      // mockWithVideo('./assets/mock-videos/course-banner1.mp4')
      // mockWithImage('./assets/mock-videos/course-banner1.png')
      // navigator.mediaDevices.getUserMedia = () => {
      //   return new Promise((resolve, reject) => {
      //     const video = document.createElement('video');
      //     video.setAttribute('src', './assets/mock-videos/course-banner1.mp4')
      //     video.setAttribute('loop', '')
      //     video.oncanplay = () => {
      //       video.play()
      //       resolve(video.captureStream())
      //     }
      //   })
      // }

      //third

      //custom button three
      // const arButton = document.querySelector('#ar-button');
      // const supported = navigator.xr && await navigator.xr.isSessionSupported('immersive-ar');
      // if (!supported) {
      //   arButton.textContent = 'Not supported'
      //   arButton.disabled = true
      //   return
      // }
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera();
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      document.body.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(0.06, 0.06, 0.06);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, -0.3);
      scene.add(mesh);
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      scene.add(light);

      renderer.xr.enabled = true;
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });

      // part 4
      const arButton = new ARButton.createButton(renderer, {
        optionalFeatures: ["dom-overlay"],
        domOverlay: {
          root: document.body,
        },
      });

      document.body.appendChild(arButton)

      //custom session manager three

      // let currentSession = null;
      // const initialize = async () => {
      //   currentSession = await navigator.xr.requestSession('immersive-ar', {
      //     optionalFeatures: ['dom-overlay'], domOverlay: {
      //       root: document.body
      //     }
      //   });
      //   renderer.xr.enabled = true;
      //   renderer.xr.setReferenceSpaceType('local');
      //   await renderer.xr.setSession(currentSession);

      //   arButton.textContent = 'End'

      //   renderer.setAnimationLoop(() => {
      //     renderer.render(scene, camera)
      //   })
      // }
      // const end = () => {

      //   currentSession.end();
      //   renderer.clear();
      //   renderer.setAnimationLoop(null);

      //   arButton.style.display = 'none'
      // }

      // arButton.addEventListener("click", () => {
      //   if (currentSession) {
      //     end()
      //   } else {
      //     initialize()
      //   }
      // })

      //second step
      //   const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      //     container: document.querySelector('#my-ar-container'),
      //     imageTargetSrc: "./assets/targets/course-banner.mind",
      //   });
      //   const { renderer, scene, camera } = mindarThree;
      //   const geometry = new THREE.PlaneGeometry(1, 1);
      //   const material = new THREE.MeshBasicMaterial({
      //     color: 0x0000ff,
      //     transparent: true,
      //     opacity: 0.5,
      //   });
      //   const plane = new THREE.Mesh(geometry, material);
      //   const anchor = mindarThree.addAnchor(0);
      //   anchor.group.add(plane);

      //   await mindarThree.start();
      //   renderer.setAnimationLoop(() => {
      //     renderer.render(scene, camera);
      //   });
      // };
    };
    start();

    // --- first step

    // console.log("three", THREE);
    // const scene = new THREE.Scene();
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: "#0000FF" });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // cube.position.set(0, 0, -2);
    // cube.rotation.set(0, Math.PI / 4, 0);

    // const camera = new THREE.PerspectiveCamera();
    // camera.position.set(1, 1, 5);

    // const renderer = new THREE.WebGLRenderer({ alpha: true });
    // renderer.setSize(500, 500);
    // renderer.render(scene, camera);

    // const video = document.createElement("video");
    // navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    //   video.srcObject = stream;
    //   video.play();
    // });

    // video.style.position = "absolute";
    // video.style.width = renderer.domElement.width;
    // video.style.height = renderer.domElement.height;
    // renderer.domElement.style.position = "absolute";

    // document.body.appendChild(video);
    // document.body.appendChild(renderer.domElement);
  },
  false
);
