"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const pointer = { x: 0, y: 0 };

function Sculpture() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.28;
    group.current.rotation.x = Math.sin(t * 0.35) * 0.18;
    group.current.position.y = Math.sin(t * 0.8) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[1.05, 0.28, 220, 28]} />
        <meshStandardMaterial color="#f4f1ea" metalness={0.92} roughness={0.16} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.85, 1]} />
        <meshBasicMaterial color="#d6ff3f" wireframe transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state) => {
    const x = pointer.x * 0.45;
    const y = 0.15 - pointer.y * 0.25;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y, 0.04);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function TerrainScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0.15, 4.4], fov: 38, near: 0.1, far: 20 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 3]} intensity={2.4} color="#ffffff" />
      <pointLight position={[-3, -1, 2]} intensity={18} color="#d6ff3f" />
      <pointLight position={[2, 2, -2]} intensity={6} color="#9aa6ff" />
      <Sculpture />
      <CameraRig />
    </Canvas>
  );
}
