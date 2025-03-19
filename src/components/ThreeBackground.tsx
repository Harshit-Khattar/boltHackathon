import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  const textRefs = useRef<THREE.Sprite[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0.03);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controlsRef.current = controls;

    // Create globe group
    const globeGroup = new THREE.Group();
    globeRef.current = globeGroup;

    // Create sphere geometry for the globe
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.025,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(sphere);

    // Create binary numbers (1s and 0s)
    const binaryGeometry = new THREE.BufferGeometry();
    const binaryCount = 1000;
    const positions = new Float32Array(binaryCount * 3);
    const colors = new Float32Array(binaryCount * 3);

    for (let i = 0; i < binaryCount; i++) {
      const radius = 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = new THREE.Color(0x60a5fa);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    binaryGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    binaryGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const binaryMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.08,
    });

    const binaryPoints = new THREE.Points(binaryGeometry, binaryMaterial);
    globeGroup.add(binaryPoints);

    // Create text sprites for 1s and 0s
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      canvas.width = 64;
      canvas.height = 64;
      context.fillStyle = 'rgba(0, 0, 0, 0)';
      context.fillRect(0, 0, 64, 64);
      context.font = 'bold 32px Arial';
      context.fillStyle = 'rgba(96, 165, 250, 0.3)';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
    }

    const createTextSprite = (text: string) => {
      if (!context) return null;
      
      context.clearRect(0, 0, 64, 64);
      context.fillText(text, 32, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.2,
      });
      
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(0.15, 0.15, 0.15);
      return sprite;
    };

    // Add text sprites around the globe
    const textCount = 200;
    for (let i = 0; i < textCount; i++) {
      const text = i < 100 ? '1' : '0';
      const sprite = createTextSprite(text);
      if (sprite) {
        const radius = 3 + Math.random() * 0.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        sprite.position.set(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );

        globeGroup.add(sprite);
        textRefs.current.push(sprite);
      }
    }

    scene.add(globeGroup);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x60a5fa, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      if (globeRef.current) {
        globeRef.current.rotation.y += 0.0005; // Increased from 0.0002 to 0.0005
        globeRef.current.rotation.x += 0.0003; // Increased from 0.0001 to 0.0003
      }

      // Make text sprites always face the camera
      textRefs.current.forEach(sprite => {
        sprite.quaternion.copy(camera.quaternion);
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store refs for cleanup
    const containerElement = containerRef.current;
    const rendererElement = rendererRef.current;

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerElement && rendererElement) {
        containerElement.removeChild(rendererElement.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ThreeBackground; 