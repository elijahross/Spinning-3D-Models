import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { scene, nodes, materials } = useGLTF("scene.gltf");
  const modelRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const rotationSpeed = 0.002;
      modelRef.current.rotation.y = window.scrollY * rotationSpeed;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <group rotation={[1.4, 0, 0]}>
      <primitive
        object={nodes.GLTF_SceneRootNode}
        ref={modelRef}
        scale={1.0}
        position={[-1, 1.2, -0.4]}
        material={
          new THREE.MeshBasicMaterial({
            color: new THREE.Color("hotpink"),
            transparent: true,
          })
        }
      />
    </group>
  );
};

const Bg = () => {
  return (
    <div class="scene">
      <Canvas camera={{ position: [-5, 0.2, -0.2], fov: 30, near: 1, far: 10 }}>
        <Suspense fallback={<> Loading... </>}>
          <ambientLight intensity={1} />
          <directionalLight color="white" position={[-3, 2, 5]} />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Bg;
