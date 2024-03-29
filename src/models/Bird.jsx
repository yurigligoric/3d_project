import { useGLTF } from '@react-three/drei'
import React from 'react'
import BirdModel from '../assets/3d/bird.glb'
import character from '../assets/3d/CharacterTest.glb'

const Bird = () => {
    const {scene, animation}  = useGLTF(BirdModel)
    const characterS = useGLTF(character)
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003 ]}>
      <primitive object={scene} />
      <primitive object={characterS.scene} />
    </mesh>
    
  )
}

export default Bird

