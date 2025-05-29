import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import HealthStatusCards from './HealthStatusCards';

const Model = ({ rotationY }) => {
  const { scene } = useGLTF('/human_anatomy/scene.gltf');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationY;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.2} />;
};

export default function Anatomy3D() {
  const [rotation, setRotation] = useState(0);

  return (
    <div style={{ padding: '24px' }}>
      {/* Outer Container with Flex Layout */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Left - 3D Model Section */}
        <div
          style={{
            flex: 1.2,
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '100%', height: '400px' }}>
            <Canvas camera={{ position: [0, 30, 70], fov: 57 }}>
              <ambientLight />
              <directionalLight position={[3, 5, 2]} />
              <Suspense fallback={null}>
                <Model rotationY={rotation} />
                <OrbitControls enableRotate={false} />
              </Suspense>
            </Canvas>
          </div>

          {/* Rotation Slider */}
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <input
              type="range"
              min="-3.14"
              max="3.14"
              step="0.01"
              value={rotation}
              onChange={(e) => setRotation(parseFloat(e.target.value))}
              style={{ width: '300px' }}
            />
            <div>Rotate Y-axis: {rotation.toFixed(2)} rad</div>
          </div>
        </div>

        {/* Right - Health Cards Section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            minWidth: '300px',
          }}
        >
          <h3>Health Status</h3>
          <HealthStatusCards />
        </div>
      </div>
    </div>
  );
}
