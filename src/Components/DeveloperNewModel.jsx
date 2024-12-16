/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import Model from './Assets/models/Ready_Player_Me_New_Model.glb'
import idleAnimationFBX from './Assets/models/animations/idle.fbx'
import saluteAnimationFBX from './Assets/models/animations/salute.fbx'
import victoryAnimationFBX from './Assets/models/animations/victory.fbx'
import clappingAnimationFBX from './Assets/models/animations/clapping.fbx'

const DeveloperNewModel = ({ animationName = 'idle', loading, setLoading, ...props }) => {

    const group = useRef() 
    const { nodes, materials } = useGLTF(Model, true)
    const { animations: idleAnimation } = useFBX(idleAnimationFBX)
    const { animations: saluteAnimation } = useFBX(saluteAnimationFBX)
    const { animations: victoryAnimation } = useFBX(victoryAnimationFBX)
    const { animations: clappingAnimation } = useFBX(clappingAnimationFBX)

    idleAnimation[0].name = 'idle'
    saluteAnimation[0].name = 'salute'
    victoryAnimation[0].name = 'victory'
    clappingAnimation[0].name = 'clapping'

    const { actions } = useAnimations([idleAnimation[0], saluteAnimation[0], victoryAnimation[0], clappingAnimation[0]], group)

    useGLTF.preload('/67534550f01b9f87c5d7669d.glb')

  useEffect(()=>{
    actions[animationName].reset().fadeIn(0.5).play()


    return () => actions[animationName].fadeOut(0.5)
    

  },[animationName])

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  )
}


export default DeveloperNewModel