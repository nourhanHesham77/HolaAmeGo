const nearDist = 0.1;
const farDist = 10000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    nearDist,
    farDist
);

camera.position.x = farDist * -2;
camera.position.z = 500;

const renderer = new THREE.WebGLRenderer(
    {antialias:true}
);

renderer.setClearColor('#4dd0e1');
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

document.querySelector("#canvas-wrapper").appendChild(renderer.domElement);


const cubeSize = 120;
const geometry = new THREE.BoxBufferGeometry(cubeSize, cubeSize, cubeSize);
const material = new THREE.MeshNormalMaterial();

const group = new THREE.Group();
for(let i=0; i<350;i++) {
    const mesh = new THREE.Mesh(geometry, material);
    const dist = farDist / 3;
    const distDouble = dist * 2;
    const tau = 2 * Math.PI;

    mesh.position.x = Math.random() * distDouble - dist;
    mesh.position.y = Math.random() * distDouble - dist;
    mesh.position.z = Math.random() * distDouble - dist;

    mesh.rotation.x = Math.random() * tau;
    mesh.rotation.y = Math.random() * tau;
    mesh.rotation.z = Math.random() * tau;

    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    
    group.add(mesh);
}

scene.add(group);

const loader = new THREE.FontLoader();

let textMesh;
loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    (font) => {
      textMesh = new THREE.Mesh();
      const word = "floating";
      const typoProperties = {
        font: font,
        size: cubeSize,
        height: cubeSize / 2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 6,
        bevelOffset: 1,
        bevelSegments: 8,
      };
  
      const text = new THREE.TextGeometry(word, typoProperties);
      textMesh.geometry = text;
      textMesh.material = material;
      textMesh.position.x = cubeSize * -2;
      textMesh.position.z = cubeSize * -1;
      scene.add(textMesh);
    }
  );



let mouseX = 0;
let mouseY = 0;
const mouseFX = {
    windowHalfX : window.innerWidth / 2,
    windowHalfY : window.innerHeight / 2,
    coordinates : function(coordX, coordY){
        mouseX = (coordX - mouseFX.windowHalfX) * 10;
        mouseY = (coordY - mouseFX.windowHalfY) * 10;
    },
    onMouseMove: function(e) {
        mouseFX.coordinates(e.clientX, e.clientY);
    },
    onTouchMove: function(e) {
        mouseFY.coordinates(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }
};

const canvasWrapper = document.querySelector("#canvas-wrapper");
canvasWrapper.addEventListener("mousemove", mouseFX.onMouseMove, false);
canvasWrapper.addEventListener("touchmove", mouseFX.onTouchMove, false);

const render = () => {
    requestAnimationFrame(render);
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY-camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    const t = Date.now() * 0.001;
    const rx = Math.sin(t * 0.7) * 0.5;
    const ry = Math.sin(t * 0.3) * 0.5;
    const rz = Math.sin(t * 0.2) * 0.5;

    group.rotation.x = rx;
    group.rotation.y = ry;
    group.rotation.z = rz;

    textMesh.rotation.x = rx;
    textMesh.rotation.y = ry;
    textMesh.rotation.z = rz;

    renderer.render(scene, camera);
};
render();