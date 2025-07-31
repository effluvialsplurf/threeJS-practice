import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import type { ThreeElements } from '@react-three/fiber'
import * as THREE from 'three';

// a box
export default function Box(props: ThreeElements['mesh']) {
  // gives us access to a THREE mesh object
  const meshRef = useRef<THREE.Mesh>(null!);

  // state for hovered and active
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // subscribe this component to the render loop, and rotate it every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  // return the view, which are regular threejs elements in jsx
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}