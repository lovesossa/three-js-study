import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function model() {
	let scene;
	let camera;
	let renderer;
	let container = document.querySelector('.canvas');

	let rotationVal = 10;
	let rotationStep = 0.15;

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	const canvas = renderer.domElement;
	container.appendChild(canvas);

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);

	// ---------------------------------------------View settings
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
	camera.position.z = 500;
	camera.position.y = 50;
	camera.position.x = 0;

	scene.rotation.y = rotationVal;

	const controls = new OrbitControls(camera, canvas);
	controls.enableZoom = false;
	controls.update();
	controls.enableDamping = true;
	controls.minDistance = 40;
	// ---------------------------------------------View settings###

	// ---------------------------------------------Lights
	const ambient = new THREE.AmbientLight(0xffffff, 1);
	scene.add(ambient);

	let light = new THREE.PointLight(0xc4c4c4, 1);
	light.position.set(0, 300, 500);
	scene.add(light);

	let light2 = new THREE.PointLight(0xc4c4c4, 1);
	light2.position.set(500, 300, 500);
	scene.add(light2);

	let light3 = new THREE.PointLight(0xc4c4c4, 1);
	light3.position.set(0, 300, -500);
	scene.add(light3);

	let light4 = new THREE.PointLight(0xc4c4c4, 1);
	light4.position.set(-500, 300, 500);
	scene.add(light4);
	// ---------------------------------------------Lights###

	// ---------------------------------------------Load model
	const loader = new GLTFLoader();
	loader.load(
		'model/scene.gltf',
		gltf => {
			scene.add(gltf.scene);
		},
		(error) => {
			console.log(`Error: ${error}`);
		},
	);
	// ---------------------------------------------Load model###

	// ---------------------------------------------Handlers
	function onHandleScroll(e) {
		if (e.deltaY < 0) {
			rotationVal += rotationStep;
		}
		if (e.deltaY > 0) {
			rotationVal -= rotationStep;
		}
		scene.rotation.y = rotationVal.toFixed(2);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	// ---------------------------------------------Handlers###

	// ---------------------------------------------Events
	window.addEventListener('wheel', onHandleScroll, false);
	window.addEventListener('resize', onWindowResize, false);
	// ---------------------------------------------Events###

	// ---------------------------------------------Render
	function animate() {
		window.requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}
	animate();
	// ---------------------------------------------Render###
}

export default model;
