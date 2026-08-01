interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 256 256"
      fill="none"
      className={className}
    >
      <rect x="0" y="156" width="64" height="100" fill="white" />
      <rect x="96" y="86" width="64" height="170" fill="white" />
      <rect x="192" y="0" width="64" height="256" fill="white" />
    </svg>
  )
}
