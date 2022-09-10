// import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.module.js";
// import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.module.js";
// instead of importing threejs, you use it through the library mindar
const THREE = window.MINDAR.IMAGE.THREE;
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
      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: document.querySelector('#my-ar-container'),
        imageTargetSrc: "./assets/targets/course-banner.mind",
      });
      const { renderer, scene, camera } = mindarThree;
      const geometry = new THREE.PlaneGeometry(1, 1);
      const material = new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        transparent: true,
        opacity: 0.5,
      });
      const plane = new THREE.Mesh(geometry, material);
      const anchor = mindarThree.addAnchor(0);
      anchor.group.add(plane);

      await mindarThree.start();
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
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
