import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.180.0/three.module.js'


document.addEventListener("DOMContentLoaded", function () {

  // ======================
  // DROPDOWN BUTTON LOGIC
  // ======================

  const imgBtn = document.querySelector(".img-btn");
  const dropdown = document.querySelector(".dropdown-content");

  imgBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdown.classList.toggle("show");
  });

  window.addEventListener("click", function () {
    dropdown.classList.remove("show");
  });


  // ======================
  // THREE.JS BACKGROUND
  // ======================

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.zIndex = "-1";

  document.body.appendChild(renderer.domElement);


 const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshStandardMaterial({
  color: new THREE.Color("rgb(228, 111, 8)"),
  transparent: true,
  opacity: 0.888,
  metalness: 0.5,
  roughness: 0.3
});

const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);


  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(5, 5, 5);

  scene.add(light);


  camera.position.z = 3;


  function animate() {

    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    cube.rotation.x = time * 0.3;
    cube.rotation.y = time * 0.5;
    cube.rotation.z = time * 0.2;

    renderer.render(scene, camera);

  }

  animate();


  window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

   
  });

});