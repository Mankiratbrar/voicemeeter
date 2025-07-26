import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

export function Search() {
  return (
    <div className="flex items-center w-full max-w-screen space-x-2 max-h-11 rounded-lg border  border-[color:var(--color-border)] 
    bg-[color:var(--color-background)]
    dark:bg-[color:var(--background)] px-3.5 py-1 ml-1 mr-2 mt-1.5 -mb-2 ">
      <SearchIcon className="h-4 w-4" />
      <Input type="search" placeholder="Search For Documentation or Components" className="w-full border-0 h-7 font-semibold" />
    </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}