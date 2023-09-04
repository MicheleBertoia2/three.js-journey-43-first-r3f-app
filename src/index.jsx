import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import * as THREE from 'three'
import { clamp } from 'three/src/math/MathUtils'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
        
        <Canvas
            //dpr={ [1, 2] } // default value by r3f
            // flat //tonemapping to ACESFilming on default
            gl={{
                antialias: true,
                // toneMapping: THREE.CineonToneMapping
            }}
            // orthographic
            camera={ { 
                fov: 45,
                // zoom: 100,
                near: 0.1,
                far: 100,
                position: [3, 2, 6]
             } }
        >
            <Experience />
        </Canvas>
)