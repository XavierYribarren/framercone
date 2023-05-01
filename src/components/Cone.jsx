/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import * as THREE from 'three'
import {motion} from 'framer-motion-3d'

function Cone({position, size, coneCol}) {
  return (
<>
<motion.mesh position={position} castShadow>

<cylinderGeometry args={size} receiveShadow />
<meshStandardMaterial color={coneCol} side={THREE.FrontSide} roughness={.7} />
</motion.mesh>
</>
  )
}

export default Cone