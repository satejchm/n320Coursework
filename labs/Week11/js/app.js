//Sarah Tejchma
//lab Week 11
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, box, lesserBox, lesserBoxTwo, light, blueMat, whiteMat, greenMat;

var selectedMesh = null;

//Call the createScene function
var scene = createScene();

function createScene() {
  // Create the scene space
  var scene = new BABYLON.Scene(engine);

  //Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  // Add lights to the scene
  var myLight = new BABYLON.DirectionalLight(
    "dir01",
    new BABYLON.Vector3(0, -0.5, 1.0),
    scene
  );

  //create 3 boxes aligned horizontally
  // Add and manipulate meshes in the scene
  box = BABYLON.MeshBuilder.CreateBox("box", { height: 1 }, scene);

  //second box
  lesserBox = BABYLON.MeshBuilder.CreateBox("box", { height: 1 }, scene);
  lesserBox.position.x = 1.5;

  //third box
  lesserBoxTwo = BABYLON.MeshBuilder.CreateBox("box", { height: 1 }, scene);
  lesserBoxTwo.position.x = -1.5;

  light = new BABYLON.HemisphericLight(
    "HemiLight",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );

  //create blue mat
  blueMat = new BABYLON.StandardMaterial("ground", scene);
  blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  blueMat.emissiveColor = BABYLON.Color3.Blue();

  //create white mat
  whiteMat = new BABYLON.StandardMaterial("ground", scene);
  whiteMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  whiteMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  whiteMat.emissiveColor = BABYLON.Color3.White();

  //create green mat
  greenMat = new BABYLON.StandardMaterial("ground", scene);
  greenMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
  greenMat.emissiveColor = BABYLON.Color3.Green();

  return scene;
}

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function() {
  //sphere.rotate(BABYLON.Axis.Y, .01, BABYLON.Space.WORLD);
  scene.render();
});

//create listener so when you hit the w key, rotate selected object 20 degrees vertically upward
window.addEventListener("keydown", event => {
  if (selectedMesh) {
    if (event.keyCode == 87) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: "+= 1",
        onComplete: checkUp
      });
    }
  }
});

//create listener when s key is pressed, rotate selected object 20 degrees vertically downward
window.addEventListener("keydown", event => {
  if (selectedMesh) {
    if (event.keyCode == 83) {
      TweenLite.to(selectedMesh.rotation, 1, {
        x: "+= -1",
        onComplete: checkUp
      });
    }
  }
});

//do a checkup function to make sure the keydown event is completing, turn green once all 3 are
function checkUp() {
  //console.log(selectedMesh.rotation.x);
  var boxOne = box.rotation.x;
  var boxTwo = lesserBox.rotation.x;
  var boxThree = lesserBoxTwo.rotation.x;

  if (boxOne == boxTwo && boxOne == boxThree) {
    console.log("green");
    box.material = greenMat;
    lesserBox.material = greenMat;
    lesserBoxTwo.material = greenMat;
  }
  console.log(selectedMesh.rotation.x);
}

//when object clicked, change color to blue to indicate it has been selected.
window.addEventListener("click", function() {
  // We try to pick an object
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);

  pickResult.pickedMesh.material = blueMat;

  selectedMesh = pickResult.pickedMesh;

  //if the box has been selected and you select another box, change selected to white
  window.addEventListener("click", event => {
    if (selectedMesh) {
      pickResult.pickedMesh.material = whiteMat;
      selected = null;
    }
  });
});
