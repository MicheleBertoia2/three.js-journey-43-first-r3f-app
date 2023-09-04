import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from "./CustomObject.jsx"

extend({
  OrbitControls 
})

export default function Experience()
{

  const {camera, gl} = useThree()
  const cubeRef = useRef()
  const groupRef =useRef()

  

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
  })

  return <>

    <orbitControls args={ [ camera, gl.domElement ] } />

    <directionalLight position={ [1, 2, 3] } intensity={1.5}/>
    <ambientLight intensity={0.5} />

    <group ref={groupRef}>
        <mesh ref={cubeRef} scale={1.5} position={[2, 0, 0]} rotation-y={ Math.PI * 0.25 }>
          <boxGeometry/>
          <meshStandardMaterial color='darkOrchid' />
      </mesh>

      <mesh scale={1.5} position={[-2, 0, 0]} >
          <sphereGeometry/>
          <meshStandardMaterial color='orange' />
      </mesh>
    </group>
    

    <mesh position-y ={-2} rotation-x={ - Math.PI * 0.5 }  scale={10}>
      <planeGeometry/>
      <meshStandardMaterial color={'green'}/>
    </mesh>

    <CustomObject />
  </>
}