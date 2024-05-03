import React from 'react'
import { Card } from 'antd'
import { Image } from 'antd'

export function ImageCard({ size, src }) {
  return (
    <Card>
      <Image 
      src={src}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      />
    </Card>
  )
}

