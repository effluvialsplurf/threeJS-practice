// src/App.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './components/Box'




function App() {
  return (
    <div className="w-screen h-screen bg-[#222]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Box position={[-1.2, 0, 0]} /> 
        <Box position={[1.2, 0, 0]} /> 
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;