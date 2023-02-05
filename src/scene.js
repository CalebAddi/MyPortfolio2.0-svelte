import * as THREE from 'three';
import { Color } from 'three';


const scene = new THREE.Scene(); 
scene.background = new Color('#101010')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Objects
const geometry = new THREE.SphereGeometry(1.8, 64, 64);
const geometry2 = new THREE.SphereGeometry(.5, 64, 64);
const particlesGeometry = new THREE.BufferGeometry;
const particleCount = 12000;

const posArray = new Float32Array(particleCount * 3);

for(let i = 0; i < particleCount * 3; i++) 
{
    posArray[i] = (Math.random() - 0.5) * 14;
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

//---------- Texture Loader ----------//

const earthTexture = new THREE.TextureLoader().load('earth.jpg');
const moonTexture = new THREE.TextureLoader().load('moon.jpg');

//---------- Materials ----------//

const material = new THREE.MeshBasicMaterial({ map: earthTexture });
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });

const particleMaterial = new THREE.PointsMaterial({
    size: .0055,
    color: 0xffffff
});
// material.color = new THREE.Color(0x000);
//----------------------------------//


// Mesh
const sphere = new THREE.Mesh(geometry, material);
const moon = new THREE.Mesh(geometry2, moonMaterial);
const particleMesh = new THREE.Points(particlesGeometry, particleMaterial);

//---------- Lights ----------// 

const lightAmbi = new THREE.AmbientLight( 0xffff );
const light = new THREE.PointLight(0xff0000, 1, 100);
light.position.set(50, 50, 50);
scene.add( lightAmbi, light );


// render
let renderer;
scene.add(particleMesh, sphere);
scene.add(moon)
camera.position.z = 5;

moon.position.x = - 3;
moon.position.y = 1.5;

//---------------------------------------------------------//

document.addEventListener('mousemove', onDocumentMouseMove);

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(e) 
{
    mouseX = (e.clientX - windowHalfX);
    mouseY = (e.clientY - windowHalfY);
}

const clock = new THREE.Clock()

const animate = () => {
    requestAnimationFrame(animate);
    
    targetX = mouseX * .001;
    targetY = mouseY * .001;

    const elapsedTime = clock.getElapsedTime()

        // Update objects
    sphere.rotation.y = .5 * elapsedTime;
    particleMesh.rotation.y = -.1 * elapsedTime;

    if(mouseX > 0 || mouseX < 0) 
    {
        particleMesh.rotation.y = mouseY * (elapsedTime * 0.00007);
        particleMesh.rotation.x = mouseX * (elapsedTime * 0.00007);
    }

    sphere.rotation.y += .5 * (targetX - sphere.rotation.y);
    sphere.position.z += -.002 * (targetY - sphere.rotation.x);

    moon.rotation.y += .05 * (targetX - moon.rotation.y);
    moon.rotation.x += .002 * (targetY - sphere.rotation.x);
    moon.rotation.z += -.002 * (targetY - sphere.rotation.x);

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)
};

const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};

export const createScene = (el) => {
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
    resize();
    animate();
}

window.addEventListener('resize', resize);