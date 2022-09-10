import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r132/three.module.js";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("three", THREE);
    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "#0000FF" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.set(0, 0, -2);
    cube.rotation.set(0, Math.PI / 4, 0);

    const camera = new THREE.PerspectiveCamera({ alpha: true });
    camera.position.set(1, 1, 5);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    renderer.render(scene, camera);

    const video = document.createElement("video");
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;
      video.play();
    });

    video.style.position = "absolute";
    video.style.width = renderer.domElement.width;
    video.style.height = renderer.domElement.height;
    renderer.domElement.style.position = "absolute";

    document.body.appendChild(video);
    document.body.appendChild(renderer.domElement);

        // console.log(canvas);
    // const gl = canvas.getContext("webgl");
    // console.log(gl);
    // if (!gl) {
    //   console.log("WebGL unavailable");
    //   console.log(gl);
    // } else {
    //   gl.clearColor(1, 0, 0, 1);
    //   gl.clear(gl.COLOR_BUFFER_BIT);

    //   const vsSource = document.querySelector("#vertex-data").text;
    //   const fsSource = document.querySelector("#fragment-data").text;

    //   // Compile the shaders into GLSL
    //   const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    //   gl.shaderSource(vertexShader, vsSource);
    //   gl.compileShader(vertexShader);
    //   const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    //   gl.shaderSource(fragmentShader, fsSource);
    //   gl.compileShader(fragmentShader);
    //   console.log("WebGL is good to go");
    // }
  },
  false
);
