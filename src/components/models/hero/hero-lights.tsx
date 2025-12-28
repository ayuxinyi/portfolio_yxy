import { RectAreaLight } from "three";

const HeroLights = () => {
  return (
    <>
      {/* 环境光 */}
      {/* <ambientLight intensity={0.2} color="#1a1a40" /> */}
      {/* 方向光 */}
      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
      {/* 聚光灯 */}
      {/* 
        - position: 设置聚光灯的位置
        - intensity: 设置聚光灯的强度
        - penumbra: 设置聚光灯的软阴影范围,值越大，光线越柔和
        - color: 设置聚光灯的颜色
        - angle: 设置聚光灯的角度
      */}
      <spotLight
        position={[2, 5, 6]}
        intensity={100}
        penumbra={0.2}
        color="white"
        angle={0.15}
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        penumbra={0.5}
        color="#4cc9f0"
        angle={0.3}
      />
      <spotLight
        position={[-3, 5, 5]}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
        angle={0.4}
      />
      {/* 矩形区域光 */}
      <primitive
        object={new RectAreaLight("#A259ff", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      {/* 点光源 */}
      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};
export default HeroLights;
