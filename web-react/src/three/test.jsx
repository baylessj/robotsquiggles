import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { Vector } from "twojs-ts";

const rand_gray = () => {
  var value = Math.random() * 0xf + 0x50;
  var grayscale = (value << 16) | (value << 8) | value;
  // return "#" + grayscale.toString(16);
  return grayscale;
};

const TILE_THICKNESS = 2;

const field_tiles = (camera, width, height) => {
  const min_dim = width >= height ? height : width;

  // const tile_length = min_dim / 6;
  const tile_length = 1;
  console.log(width);
  console.log(height);
  console.log(tile_length);

  var geometry = new THREE.BoxGeometry(1, 1, 1);

  let tiles = [];
  for (var i = 0; i < 6; i++) {
    const x = i + 0.5 - 3;
    console.log(x);
    // var x = tile_width * (i + 0.5) + spacer;
    for (var j = 0; j < 6; j++) {
      var y = j + 0.5 - 3;
      var material = new THREE.MeshStandardMaterial({ color: rand_gray() });
      var tile = new THREE.Mesh(geometry, material);

      tile.position.x = x;
      tile.position.y = y;
      tile.position.z = -1;
      tiles.push(tile);
    }
  }
  return tiles;
};

export const App = (props) => {
  const mount = useRef(null);
  const [isAnimating, setAnimating] = useState(true);
  const controls = useRef(null);

  useEffect(() => {
    var curMount = mount.current; // silences warning about changed node
    let width = mount.current.clientWidth;
    let height = window.innerHeight;
    let frameId;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(25, 50, 25);
    scene.add(pointLight);

    const tiles = field_tiles(camera, width, height);
    // console.log(tiles);
    tiles.forEach((t) => scene.add(t));

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    var mouse = new THREE.Vector2();
    var dummyObject = new THREE.Group();
    scene.add(dummyObject);
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.at(1, dummyObject.position);

    function onMouseMove(event) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      console.log(mouse);
    }

    curMount.appendChild(renderer.domElement);
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", onMouseMove);
    start();
    controls.current = { start, stop };

    return () => {
      curMount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      stop();
    };
  });

  useEffect(() => {
    if (isAnimating) {
      controls.current.start();
    } else {
      controls.current.stop();
    }
  }, [isAnimating]);

  return (
    <div
      ref={mount}
      onClick={() => setAnimating(!isAnimating)}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
