import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

export default function CustomObject()
{
  const bufferGeoRef = useRef()

  const verticesCount = 10 * 3

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3)

      for (let i = 0; i < verticesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 3    
      }
     
      return positions
  }, [])

  useEffect(() => {
    bufferGeoRef.current.computeVertexNormals()
  }, [])


  

  return <mesh>
    <bufferGeometry ref={bufferGeoRef}>
      <bufferAttribute 
        attach="attributes-position" 
        count={verticesCount}
        itemSize={3}
        array={positions}
        />
    </bufferGeometry>
    <meshStandardMaterial color={'red'} side={ THREE.DoubleSide }/>
  </mesh>
}