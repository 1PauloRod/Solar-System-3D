import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(74, w/h, 0.01, 1000);
camera.position.z = 300;
camera.position.y = 200;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();

// Ambient Light
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// Starfield
const starsTexture = "planets/stars.jpg";
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture, 
    starsTexture, 
    starsTexture, 
    starsTexture, 
    starsTexture, 
    starsTexture

]);

// Sun
const sunGeometry = new THREE.SphereGeometry(16, 30, 30);
const sunTexture = loader.load("planets/sunmap.jpg");
const sunMaterial = new THREE.MeshBasicMaterial({
    map: sunTexture, 
    color: 0xFBD813
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Glow effect Sun
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 0.85);
bloomPass.threshold = 0;
bloomPass.strength = 2;
bloomPass.radius = 0.1;

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

// Mecury
const mercuryTexture = loader.load("planets/mercurymap.jpg");
const mercuryGeometry = new THREE.SphereGeometry(3.2, 30, 30);
const mercuryMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, 
    map: mercuryTexture
});
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
//sun.add(mercury);
const mercuryObject = new THREE.Object3D();
mercuryObject.add(mercury);
scene.add(mercuryObject);
mercury.position.x = 39;



// Venus 
const venusTexture = loader.load("planets/venusmap.jpg");
const venusGeometry = new THREE.SphereGeometry(7, 30, 30);
const venusMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, 
    map: venusTexture
});
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
//sun.add(venus);
const venusObject = new THREE.Object3D();
venusObject.add(venus);
scene.add(venusObject);
venus.position.x = 72;

// Earth
const earthGeometry = new THREE.SphereGeometry(7.2, 30, 30);
const earthTexture = loader.load("planets/earthmap1k.jpg");
const earthMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, 
    map: earthTexture
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const earthObject = new THREE.Object3D();
earthObject.add(earth);
scene.add(earthObject);
earth.position.x = 100;

// Moon
const moonGeometry = new THREE.SphereGeometry(1.2);
const moonMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.x = 15;
earth.add(moon);

// Mars
const marsTexture = loader.load("planets/mars_1k_color.jpg");
const marsGeometry = new THREE.SphereGeometry(5, 30, 30);
const marsMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF, 
    map: marsTexture
})
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
const marsObject = new THREE.Object3D();
marsObject.add(mars);
scene.add(marsObject);
mars.position.x = 150; 

// Jupiter
const jupiterTexture = loader.load("planets/jupitermap.jpg");
const jupiterGeometry = new THREE.SphereGeometry(10, 30, 30);
const jupiterMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF, 
    map: jupiterTexture
})
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
const jupiterObject = new THREE.Object3D();
jupiterObject.add(jupiter);
scene.add(jupiterObject);
jupiter.position.x = 200;

// Saturn
const saturnTexture = loader.load("planets/saturnmap.jpg");
const saturnGeometry = new THREE.SphereGeometry(8, 30, 30);
const saturnMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF, 
    map: saturnTexture
})
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
const saturnObject = new THREE.Object3D();
saturnObject.add(saturn);
scene.add(saturnObject);
saturn.position.x = 260;

const saturnRingTexture = loader.load("planets/saturnringcolor.jpg")
const saturnRingGeometry = new THREE.RingGeometry(10, 20, 32);
const saturnRingMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, 
    map: saturnRingTexture
});
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnObject.add(saturnRing);
saturnRing.position.x = 260;
saturnRing.rotation.x = 30;

// Uranus
const uranusTexture = loader.load("planets/uranusmap.jpg");
const uranusGeometry = new THREE.SphereGeometry(6, 30, 30);
const uranusMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF, 
    map: uranusTexture
})
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
const uranusObject = new THREE.Object3D();
uranusObject.add(uranus);
scene.add(uranusObject);
uranus.position.x = 330;

const uranusRingTexture = loader.load("planets/uranusringcolour.jpg")
const uranusRingGeometry = new THREE.RingGeometry(10, 20, 32);
const uranusRingMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff, 
    map: uranusRingTexture
});
const uranusRing = new THREE.Mesh(uranusRingGeometry, uranusRingMaterial);
uranusObject.add(uranusRing);
uranusRing.position.x = 330;
uranusRing.rotation.x = 30;

// Neptune
const neptuneTexture = loader.load("planets/neptunemap.jpg");
const neptuneGeometry = new THREE.SphereGeometry(6, 30, 30);
const neptuneMaterial = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF, 
    map: neptuneTexture
})
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
const neptuneObject = new THREE.Object3D();
neptuneObject.add(neptune);
scene.add(neptuneObject);
neptune.position.x = 400;


// Point Light
const pointLight = new THREE.PointLight( 0xFFFFFF, 3000, 1000, 1.8);
scene.add(pointLight);



function animate(){
    requestAnimationFrame(animate);

    sun.rotateY(0.01);

    mercury.rotateY(0.01);
    mercuryObject.rotateY(0.047);

    venus.rotateY(0.008);
    venusObject.rotateY(0.035);


    earth.rotateY(0.04);
    earthObject.rotateY(0.029);
    moon.rotateY(0.04);
    

    mars.rotateY(0.035);
    marsObject.rotateY(0.024);
   
    jupiter.rotateY(0.4);
    jupiterObject.rotateY(0.013);

    saturn.rotateY(0.36);
    saturnObject.rotateY(0.009);

    uranus.rotateY(0.06);
    uranusObject.rotateY(0.006);

    neptune.rotateY(0.04);
    neptuneObject.rotateY(0.005);
    
    
    renderer.render(scene, camera);
    composer.render(); 
}
animate();