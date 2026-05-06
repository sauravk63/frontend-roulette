import type { ReactNode } from "react"

type ButtonProps={
    children:ReactNode,
}


export function Button({children}:ButtonProps){
    return<button disabled className="bg-violet-500 hover:bg-violet-600 px-2 py-1 transition-colors rounded disabled:opacity-30 disabled:cursor-not-allowed">
        {children}
    </button>
}