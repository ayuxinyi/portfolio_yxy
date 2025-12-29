import { Canvas } from "@react-three/fiber";
import { ContactModel } from "./contact-model";
import { OrbitControls } from "@react-three/drei";

export const ContactExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 3, 7], fov: 45, near: 1, far: 1000 }}
      shadows
    >
      <ambientLight intensity={0.5} color="#fff4e6" />
      <directionalLight intensity={2.5} color="#ffd9b3" position={[5, 5, 3]} />
      <directionalLight
        position={[5, 9, 1]}
        intensity={2.5}
        color="#ffd9b3"
        castShadow
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group scale={0.03} position={[0, -1.5, -2]} castShadow>
        <ContactModel />
      </group>
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>
    </Canvas>
  );
};
