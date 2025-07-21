import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    className?: string
    href?: string
    variant?: 'default' | 'primary' | 'outline'
    size?: 'default' | 'icon' | 'full'
}

const VariantClasses = {
    default: 'bg-gray-200 border-gray-500 hover:bg-gray-300 active:bg-gray-400/60',
    primary: 'bg-royalBlue-400 text-white hover:bg-royalBlue-300 active:bg-royalBlue-500',
    outline: 'bg-transparent text-royalBlue-400 hover:bg-royalBlue-100 active:bg-royalBlue-200',
}

const SizeClasses = {
    default: '',
    icon: '',
    full: 'flex items-center justify-center w-full'
}

export default function Button({children, className, href, variant = 'default', size = 'default'}: ButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`p-2 border cursor-pointer rounded font-normal transition-all duration-75 ${VariantClasses[variant]} ${SizeClasses[size]} ${className}`}>
        {children}
    </a>
  )
}
