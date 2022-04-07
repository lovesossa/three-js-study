/* eslint-disable no-undef */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import Observer from 'gsap/Observer';

function model() {
	gsap.registerPlugin(Observer, ScrollSmoother, ScrollTrigger);

	// ScrollSmoother.create({
	// 	wrapper: '.scroll_track',
	// 	content: '.scroll_track_content',
	// });

	//---------------------------------------------

	let scene;
	let camera;
	let renderer;
	let container = document.querySelector('.canvas');

	const objPositionZ = -1.56;

	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	const canvas = renderer.domElement;
	container.appendChild(canvas);

	renderer.setClearColor(0x000000, 0); // the default

	scene = new THREE.Scene();
	// scene.background = new THREE.Color(0xffffff);

	// ---------------------------------------------View settings
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
	camera.position.z = 500;
	camera.position.y = 50;
	camera.position.x = 0;

	scene.rotation.y = objPositionZ;

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
	function objectRotateAnim(dir) {
		const step = 0.12;
		const transitionStep = 0.0018;
		const interval = 15;
		let transition = 0;

		const anim = setInterval(() => {
			if (transition < step) {
				transition += transitionStep;
				scene.rotation.y += transition * dir;
			} else {
				clearInterval(anim);
			}
		}, interval);
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	// ---------------------------------------------Handlers###

	// ---------------------------------------------Events
	// window.addEventListener('wheel', onHandleScroll, false);
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

	const sections = document.querySelectorAll('.heading');
	const images = document.querySelectorAll('.heading_bg');
	const headings = gsap.utils.toArray('.heading_title');
	const outerWrappers = gsap.utils.toArray('.heading_out');
	const innerWrappers = gsap.utils.toArray('.heading_in');
	const splitHeadings = headings.map((heading) => new SplitText(heading, {
		type: 'chars,words,lines',
		linesClass: 'clip-text',
	}));
	const wrap = gsap.utils.wrap(0, sections.length - 1);
	let currentIndex = -1;
	let animating;

	gsap.set(outerWrappers, { yPercent: 100 });
	gsap.set(innerWrappers, { yPercent: -100 });

	function gotoSection(i, direction) {
		let index = wrap(i); // make sure it's valid
		animating = true;
		const fromTop = direction === -1;
		const dFactor = fromTop ? -1 : 1;
		const tl = gsap.timeline({
			defaults: {
				duration: 1.25,
				ease: 'power1.inOut',
			},
			onComplete: () => {
				animating = false;
			},
		});
		if (currentIndex >= 0) { // The first time this function runs, current is -1
			gsap.set(sections[currentIndex], {
				zIndex: 0,
			});
			tl
				.to(images[currentIndex], {
					yPercent: -15 * dFactor,
				})
				.set(sections[currentIndex], {
					autoAlpha: 0,
				});
		}
		gsap.set(sections[index], {
			autoAlpha: 1,
			zIndex: 1,
		});
		tl
			.fromTo([
				outerWrappers[index],
				innerWrappers[index],
			], {
				yPercent: (j) => {
					return j ? (-100 * dFactor) : (100 * dFactor);
				},
			}, {
				yPercent: 0,
			}, 0)
			.fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
			.fromTo(splitHeadings[index].chars, {
				autoAlpha: 0,
				yPercent: 150 * dFactor,
			}, {
				autoAlpha: 1,
				yPercent: 0,
				duration: 1,
				ease: 'power2',
				stagger: {
					each: 0.05,
				},
			}, 0.2);

		currentIndex = index;
	}

	const $model = document.querySelector('.model');
	const tl = gsap.timeline({
		duration: 2,
		ease: 'power2',
	});

	Observer.create({
		target: window,
		type: 'wheel, touch, pointer, scroll',
		wheelSpeed: -1,
		onDown: () => {
			if (!animating) {
				gotoSection(currentIndex - 1, -1);
				objectRotateAnim(-1);
				tl
					.to($model, {
						yPercent: 10,
						duration: 0.8,
					})
					.to($model, {
						yPercent: 0,
						duration: 0.6,
					});
			}
		},
		onUp: (e) => {
			if (!animating) {
				gotoSection(currentIndex + 1, 1);
				objectRotateAnim(1);
				tl
					.to($model, {
						yPercent: -10,
						duration: 0.8,
					})
					.to($model, {
						yPercent: 0,
						duration: 0.6,
					});
			}
		},
		tolerance: 10,
		preventDefault: true,
	});

	gotoSection(0, 1);
}

export default model;
