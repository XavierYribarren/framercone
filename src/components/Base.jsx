/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import * as THREE from 'three'
import { RoundedBox } from '@react-three/drei'
import {motion} from 'framer-motion-3d'

function Base({coneCol, position}) {
  return (
<>
<motion.mesh position={position} >
  <RoundedBox  args={[30,2,30]} radius={1} smoothness={3} receiveShadow>
  <meshStandardMaterial color={coneCol}  roughness={.7} shadowSide={THREE.DoubleSide}/>
</RoundedBox>
</motion.mesh>
</>
  )
}

export default Base