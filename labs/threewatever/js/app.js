//Sarah Tejchma

var mat = new BABYLON.StandardMaterial("base", scene);
mat.diffuseTexture = new BABYLON.Texture("textures/texture.png", scene);

var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();
scene.enablePhysics(gravityVector, physicsPlugin);

var ground = BABYLON.MeshBuilder.CreateGround(
  "ground",
  { height: 4, width: 4, subdivisions: 4 },
  scene
);
ground.physicsImpostor = new BABYLON.PhysicsImpostor(
  ground,
  BABYLON.PhysicsImpostor.BoxImpostor,
  { mass: 0, restitution: 0.9 },
  scene
);
ground.physicsImpostor.friction = 10;

var mSphere = BABYLON.MeshBuilder.CreateSphere(
  "myPlane",
  { diameter: 0.3 },
  scene
);
mSphere.physicsImpostor = new BABYLON.PhysicsImpostor(
  myPlane,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 1, restitution: 0 },
  scene
);
mSphere.physicsImpostor.physicsBody.linearDamping = 0.6;
mSphere.physicsImpostor.physicsBody.angularDamping = 0.5;
mSphere.friction = 2;

object.physicsImpostor.applyForce(forceDirection, object.getAbsolutePosition());

var pushDir = BABYLON.Ray.CreateNewFromTo(camera.position, camera.getTarget())
  .direction;

window.addEventListener("click", function() {
  var forceDirection = BABYLON.Ray.CreateNewFromTo(
    camera.position,
    camera.getTarget()
  ).direction;
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  pickResult.physicsImpostor.applyForce(
    forceDirection,
    pickResult.getAbsolutePosition()
  );
});
