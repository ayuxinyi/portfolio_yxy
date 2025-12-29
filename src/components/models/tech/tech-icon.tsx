import { useEffect, type FC } from "react";
import { techStackIcons } from "../../../constants";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Mesh, MeshStandardMaterial } from "three";

interface Props {
  model: (typeof techStackIcons)[0];
}

export const TechIcon: FC<Props> = ({ model }) => {
  // 加载模型
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Three") {
      scene.scene.traverse(child => {
        if (
          child instanceof Mesh &&
          child.isMesh &&
          child.name === "Object_5"
        ) {
          console.log(333);
          child.material = new MeshStandardMaterial({
            color: "white",
          });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas>
      {/* 点光源，用于照亮模型 */}
      <ambientLight intensity={0.3} />
      {/* 方向光源，用于照亮模型 */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* 环境光，用于照亮模型 */}
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      {/* Float组件，用于模型浮动效果，模型会在Y轴上来回浮动 */}
      {/* - speed: 浮动速度，默认值为5.5 */}
      {/* - rotationIntensity: 旋转强度，默认值为1，值越大，浮动效果越明显 */}
      {/* - floatIntensity: 浮动强度，默认值为0.9 */}
      <Float speed={5.5} rotationIntensity={1} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={model.rotation as [number, number, number]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};
