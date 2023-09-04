export default function Experience()
{

  return <>
    <mesh scale={1.5} position={[2, 0, 0]} rotation-y={ Math.PI * 0.25 }>
        <boxGeometry/>
        <meshBasicMaterial color='darkOrchid' />
    </mesh>
    <mesh scale={1.5} position={[-2, 0, 0]} >
        <sphereGeometry/>
        <meshBasicMaterial color='orange' />
    </mesh>
    <mesh position-y ={-2} rotation-x={ - Math.PI * 0.5 }  scale={10}>
      <planeGeometry/>
      <meshBasicMaterial color={'green'}/>
    </mesh>
  </>
}