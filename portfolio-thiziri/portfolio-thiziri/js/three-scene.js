/* =============================================
   PORTFOLIO THIZIRI DIB — three-scene.js
   Requiert Three.js chargé avant ce fichier
   ============================================= */

window.addEventListener('DOMContentLoaded', function () {

  /* ===== FOND SPATIAL (étoiles + anneaux) ===== */
  (function initBg() {
    if (typeof THREE === 'undefined') return;
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(1);
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40;

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    // Étoiles
    const sPos = [];
    for (let i = 0; i < 900; i++) {
      sPos.push(
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 160,
        (Math.random() - 0.5) * 100
      );
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.Float32BufferAttribute(sPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.14, transparent: true, opacity: 0.5 });
    const stars   = new THREE.Points(sGeo, starMat);
    scene.add(stars);

    // Anneaux décoratifs
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(22, 0.05, 4, 100),
      new THREE.MeshBasicMaterial({ color: 0x00ffcc, transparent: true, opacity: 0.06 })
    );
    ring1.rotation.x = 1.1;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(32, 0.04, 4, 100),
      new THREE.MeshBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.04 })
    );
    ring2.rotation.x = 0.7;
    ring2.rotation.z = 0.4;
    scene.add(ring2);

    (function loop() {
      requestAnimationFrame(loop);
      ring1.rotation.z += 0.0007;
      ring2.rotation.z -= 0.0004;
      starMat.opacity = 0.4 + 0.1 * Math.sin(Date.now() * 0.0009);
      renderer.render(scene, camera);
    })();
  })();


  /* ===== GLOBE CONTACT ===== */
  (function initContactGlobe() {
    if (typeof THREE === 'undefined') return;
    const canvas = document.getElementById('contactGlobe');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(180, 180);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 4.2;

    const geo = new THREE.SphereGeometry(1.45, 48, 48);

    // Sphère solide
    const solid = new THREE.Mesh(geo,
      new THREE.MeshStandardMaterial({
        color: 0x00ffcc, emissive: 0x002211,
        emissiveIntensity: 0.15,
        roughness: 0.28, metalness: 0.65
      })
    );
    scene.add(solid);

    // Wireframe overlay
    const wire = new THREE.Mesh(geo,
      new THREE.MeshBasicMaterial({
        color: 0x00ffcc, wireframe: true,
        transparent: true, opacity: 0.2
      })
    );
    scene.add(wire);

    // Points de surface
    const pts = [];
    for (let i = 0; i < 250; i++) {
      const phi   = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r     = 1.52;
      pts.push(r * Math.sin(phi) * Math.cos(theta),
               r * Math.sin(phi) * Math.sin(theta),
               r * Math.cos(phi));
    }
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    scene.add(new THREE.Points(dotGeo,
      new THREE.PointsMaterial({ color: 0x00ffcc, size: 0.04, transparent: true, opacity: 0.8 })
    ));

    // Lumières
    scene.add(new THREE.AmbientLight(0x00ffcc, 0.22));
    const pl  = new THREE.PointLight(0x00ffcc, 1.8); pl.position.set(3, 3, 3);   scene.add(pl);
    const pl2 = new THREE.PointLight(0x0044ff, 0.8); pl2.position.set(-3, -2, -2); scene.add(pl2);

    // Interaction souris
    let mx = 0, my = 0;
    canvas.addEventListener('mousemove', e => {
      const r = canvas.getBoundingClientRect();
      mx = ((e.clientX - r.left) / 180 - 0.5) * 2;
      my = ((e.clientY - r.top)  / 180 - 0.5) * 2;
    });

    (function loop() {
      requestAnimationFrame(loop);
      solid.rotation.y += 0.005 + mx * 0.003;
      solid.rotation.x += my * 0.002;
      wire.rotation.y   = solid.rotation.y;
      wire.rotation.x   = solid.rotation.x;
      wire.material.opacity = 0.15 + 0.07 * Math.sin(Date.now() * 0.002);
      renderer.render(scene, camera);
    })();
  })();

});
