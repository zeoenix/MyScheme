"use client"

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Particles from './Particles'

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <Suspense fallback={null}>
          <Particles count={1000} />
        </Suspense>
      </Canvas>
    </div>
  )
}

