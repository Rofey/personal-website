interface IconArrowProps {
  className?: string
  size?: number
  direction?: 'right' | 'left' | 'up' | 'down'
}

export default function IconArrow({ 
  className = '', 
  size = 20, 
  direction = 'right' 
}: IconArrowProps) {
  const rotation = {
    right: 0,
    left: 180,
    up: -90,
    down: 90,
  }[direction]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

