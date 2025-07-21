import React from 'react'

interface TooltipProps {
    children: React.ReactNode
    message: string
}

export default function Tooltip({ message, children }: TooltipProps) {
  return (
    <div className="group relative flex items-center justify-center">
      {children}
      <span className="absolute top-full mt-2 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  )
}
