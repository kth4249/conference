import React, { Component, useEffect, useRef } from "react";
import * as THREE from "three";
// class Cube extends Component {
//   componentDidMount() {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     this.mount.appendChild(renderer.domElement);

//     var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var material = new THREE.MeshStandardMaterial({ color: 0x7e31eb });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
//     scene.add(light);
//     camera.position.z = 2;
//     var animate = function () {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       cube.rotation.z += 0.01;
//       renderer.render(scene, camera);
//     };
//     animate();
//   }
//   render() {
//     return <div ref={(ref) => (this.mount = ref)} />;
//   }
// }

function Cube() {
  const mountRef = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshStandardMaterial({ color: 0x7e31eb });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
    camera.position.z = 2;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={mountRef} />;
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Cube />, rootElement);
export default Cube;
