import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const rand_gray = () => {
  var value = Math.random() * 0xf + 0x50;
  return (value << 16) | (value << 8) | value;
};

export const App = (props) => {
  const mount = useRef(null);

  useEffect(() => {
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    mount.current.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    var camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(0, 250, 1000);
    scene.add(camera);

    scene.add(new THREE.AmbientLight(0xf0f0f0));
    const light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(0, 1500, 200);
    light.angle = Math.PI * 0.2;
    light.castShadow = true;
    light.shadow.camera.near = 200;
    light.shadow.camera.far = 2000;
    light.shadow.bias = -0.000222;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add(light);

    const planeGeometry = new THREE.PlaneBufferGeometry(2000, 2000);
    planeGeometry.rotateX(-Math.PI / 2);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });

    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.y = -200;
    plane.receiveShadow = true;
    scene.add(plane);

    const helper = new THREE.GridHelper(2000, 100);
    helper.position.y = -199;
    helper.material.opacity = 0.25;
    helper.material.transparent = true;
    scene.add(helper);

    // Render helper function
    const render = () => {
      renderer.render(scene, camera);
    };
    render();

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.damping = 0.2;
    controls.addEventListener("change", render);

    // transformControl = new TransformControls(camera, renderer.domElement);
    // transformControl.addEventListener("change", render);
    // transformControl.addEventListener("dragging-changed", function (event) {
    //   controls.enabled = !event.value;
    // });
    // scene.add(transformControl);

    // transformControl.addEventListener("objectChange", function () {
    //   updateSplineOutline();
    // });

    // document.addEventListener("pointerdown", onPointerDown, false);
    // document.addEventListener("pointerup", onPointerUp, false);
    // document.addEventListener("pointermove", onPointerMove, false);
  });

  return <div ref={mount} />;
};
