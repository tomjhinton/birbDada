import { useState, useMemo, useRef } from "react"
import Piece from "./Piece"
import { Physics, RigidBody } from '@react-three/rapier'
import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
export default function Experience(){

    let [pieces, setPieces] = useState(50)

    let scene = useRef()

    const piecesArr = useMemo(() => {
        const piecesArr = []

        for(let i=0;i<pieces;i++){
            piecesArr.push({
                position:[ ((Math.random() * 4) *(Math.random() < 0.5 ? -1 : 1)),2 + (i * 2),   ((Math.random()* 4) *(Math.random() < 0.5 ? -1 : 1))]
       ,rotation: [0, Math.random() * Math.PI,0 ],
    scale: 2 + Math.random(), pic: `https://picsum.photos/800?random=${Math.floor(Math.random() * pieces)}`, noise: Math.random() *5.
    
        })}
        return piecesArr
    },[])

    useFrame((state, delta) => {
       console.log(Math.sin(state.clock.elapsedTime * .2) * .002)

        state.camera.position.y += Math.sin(state.clock.elapsedTime * .2) * .002
        // state.camera.position.y += Math.cos(delta) * .2
        state.camera.rotation.y += delta * .2
       
        

    })

    return(

        <>

      
        <Physics>
      

        {piecesArr.map((x, index)=>{
            return <Piece key={index}  position={x.position}
            rotation={x.rotation } pic={x.pic } noise={x.noise} scale={x.scale}/>
        })}

    <RigidBody type="fixed">
        <mesh receiveShadow position-y={ - 1.25 }>
            <boxGeometry args={ [ 25, 0.5, 25 ] } />
            <meshStandardMaterial transparent opacity={0} />
        </mesh>
    </RigidBody>    

    <RigidBody type="fixed">
        <mesh receiveShadow position-y={ - 1.25 } position-x={ - 12.5 }>
            <boxGeometry args={ [ .5, 25, 25 ] } />
            <meshStandardMaterial transparent opacity={0} />
        </mesh>
    </RigidBody>    

    <RigidBody type="fixed">
        <mesh receiveShadow position-y={ - 1.25 } position-x={  12.5 }>
            <boxGeometry args={ [ .5, 25, 25 ] } />
            <meshStandardMaterial transparent opacity={0} />
        </mesh>
    </RigidBody>    

    <RigidBody type="fixed">
        <mesh receiveShadow position-y={ - 1.25 } position-z={ - 12.5 }>
            <boxGeometry args={ [ 25, 25, .5 ] } />
            <meshStandardMaterial transparent opacity={0} />
        </mesh>
    </RigidBody>    

    <RigidBody type="fixed">
        <mesh receiveShadow position-y={ - 1.25 } position-z={  12.5 }>
            <boxGeometry args={ [ 25, 25, .5 ] } />
            <meshStandardMaterial transparent opacity={0} />
        </mesh>
    </RigidBody>    

    

    
        </Physics>
       
        </>




    )
}