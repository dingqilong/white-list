

  Leap.loop(function(frame){
    document.getElementById('output').innerHTML = frame.id
  })
  .use('transform', {
    vr: true
  })
  .use('boneHand', {
    targetEl: document.body
  })
  .use('pinchEvent')
  .use('playback', {recording: 'assets/throw-47fps.json.lz', timeBetweenLoops: 3000});

  Leap.loopController.loopWhileDisconnected = true;

  var boneHand = Leap.loopController.plugins.boneHand;
  var renderer = boneHand.renderer;
  var scene = boneHand.scene;
  var camera = boneHand.camera;


  var vrEffect = new THREE.VREffect(renderer);
  var vrControls = new THREE.VRControls(camera);


  var onkey = function(event) {
    if (event.key === 'z') {
      vrControls.zeroSensor();
    }
    if (event.key === 'f') {
      return vrEffect.setFullScreen(true);
    }
  };

  window.addEventListener("keypress", onkey, true);


  var plotter = new LeapDataPlotter();
  Leap.loopController.on('frame', function(frame){

    var hand = frame.hands[0];

    if (!hand) return;

    plotter.plot('pinchStr', hand.pinchStrength)

  });


  spheres = [];
  for (var i = 0; i < 4; i++){
    var sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 20, 20),
      new THREE.MeshPhongMaterial({
        color: 0xe6e6e6,
        specular: 0xe6e6e6
      })
    );
    sphere.position.set(0,-0.1,-0.39);
    spheres.push(sphere);
    scene.add(sphere);
    sphere.visible = false;

    sphere.lastPosition = sphere.position.clone();
    sphere.pinched = false;
    sphere.tmpPosition = new THREE.Vector3;
  }


  Leap.loopController.on('pinch', function(hand){
    var sphere = spheres.pop();
    sphere.visible = true;
    sphere.pinched = true;
    hand.data('sphere', sphere);

    console.log('pinch');

  }).on('unpinch', function(hand){
    var sphere = hand.data('sphere');
    console.log('unpinch');

    if (!sphere) return;

    sphere.pinched = false;

    spheres.push(sphere);
    hand.data('sphere', null);

  });



  Leap.loopController.on('frameEnd', function(f){});

  Leap.loopController.on('hand', function(hand){

    var sphere = hand.data('sphere');

    if (!sphere) return;

    sphere.pinched = false;

    sphere.lastPosition = sphere.position.clone();

    sphere.position.fromArray(hand.palmPosition);

  });



  // todo - release new plugins V which has this working
  // note - that should become postFrame later
  boneHand.render = function(){

    var sphere;

    for (var i=0; i < spheres.length; i++){

      sphere = spheres[i];

      if (sphere.pinched) continue;

      var newPos = (new THREE.Vector3).subVectors(sphere.position, sphere.lastPosition);

      // Add drag:
      newPos.multiplyScalar(0.96);

      // Add gravity:
//      newPos.y -= 0.0005;


      newPos.add(sphere.position);

      sphere.lastPosition = sphere.position.clone();
      sphere.position.copy(newPos);

    }


    plotter.update();

    vrControls.update();
    vrEffect.render(scene, camera);
  };


