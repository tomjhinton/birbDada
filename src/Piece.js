import { Physics , RigidBody} from '@react-three/rapier'
import {  shaderMaterial } from "@react-three/drei";
import { extend , useFrame, useLoader} from "@react-three/fiber";


import vertexShader from './shaders/vertex.js'
import fragmentShader from './shaders/fragment.js'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


export default function Piece(props){

    const picture = useLoader(TextureLoader, props.pic)

    const PieceMaterial = shaderMaterial(
   
        {
            uTime: 0,
            alpha: .1,
            pic: picture,
            noise: props.noise
            
        },
        vertexShader,
        fragmentShader
    
    )
    extend({PieceMaterial})

   

    return(

        <>
        <RigidBody  gravityScale={ .3 }
            restitution={ 0.1 }
            friction={ 10.7 }
        >
       <mesh position={props.position} rotation={props.rotation} scale={props.scale}>
           <boxGeometry args={[1, .5, 1]}/>
           <pieceMaterial transparent
             depthWrite= {false}
             polygonOffset= {true}
            
                />

       </mesh>
       </RigidBody>
        
        </>

    )
}