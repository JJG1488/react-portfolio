// import React, { useRef, useState } from 'react';
// import { useFrame } from '@react-three/fiber';

// =========================================================================
// =========================================================================
// == Copy and paste this code into file that you want box to show up in ===
// =========================================================================
// =========================================================================
// 																		====
// import { Canvas } from '@react-three/fiber';							====
// import Box from "../../ThreeJS/three";								====
// <Canvas>																====
// <ambientLight />														====
// <pointLight position={[10, 10, 10]} />								====
// <Box position={[-1.2, 0, 0]} />										====
// <Box position={[1.2, 0, 0]} />										====
// </Canvas>															====
// 																		====
// =========================================================================
// =========================================================================


// const Box = function Box(props) {
	// This reference will give us direct access to the mesh
	// const mesh = useRef()
	// Set up state for the hovered and active state
	// const [hovered, setHover] = useState(false)
	// const [active, setActive] = useState(false)
	// Rotate mesh every frame, this is outside of React without overhead
// 	useFrame(() => (mesh.current.rotation.x += 0.01))

// 	return (
// 		<mesh
// 			{...props}
// 			ref={mesh}
// 			scale={active ? 1.5 : 1}
// 			onClick={(event) => setActive(!active)}
// 			onPointerOver={(event) => setHover(true)}
// 			onPointerOut={(event) => setHover(false)}>
// 			<boxGeometry args={[1, 2, 3]} />
// 			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
// 		</mesh>
// 	)
// }


// export default Box;


