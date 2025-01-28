import React from 'react'

export const MeshGradient: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        background: `
          radial-gradient(at 0% 0%, hsla(var(--primary) / 0.5) 0px, transparent 50%),
          radial-gradient(at 100% 0%, hsla(var(--purple-500) / 0.5) 0px, transparent 50%),
          radial-gradient(at 100% 100%, hsla(var(--primary) / 0.5) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(var(--purple-500) / 0.5) 0px, transparent 50%)
        `,
      }}
      {...props}
    />
  )
}
