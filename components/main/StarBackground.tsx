"use client";
import type { JSX } from 'react';
import React, { useRef, useMemo, Suspense  } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error: maath types are not available
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const StarBackground = (props: JSX.IntrinsicElements["group"]) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate and validate sphere points
  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    
    // Validate no NaN values exist
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.05;
      pointsRef.current.rotation.y -= delta * 0.075;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points
        ref={pointsRef}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
          alphaTest={0.01} // Helps with transparency rendering
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[20] pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 1], fov: 45 }}
      gl={{ antialias: false }}
      performance={{ min: 0.1 }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default React.memo(StarsCanvas);