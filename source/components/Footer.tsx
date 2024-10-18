'use client'

import Link from "next/link"

export default function Footer() {

  return (
    <footer className="w-full p-4 bg-background text-sm">
      <div className="flex justify-between">
        <div>
          <p className="text-muted-foreground">Ruder Plakat + Kontur</p>
          <Link 
            href="https://lineto.com/"
            target="_blank"
            className="hover:text-muted-foreground"
          >
            Lineto Type Foundry
          </Link>
        </div>
        <div>
          <p className="text-muted-foreground">Design and code</p>
          <Link 
            href="https://www.instagram.com/yo.chita/"
            target="_blank"
            className="hover:text-muted-foreground flex justify-end"
          >
            Yoana Tacheva
          </Link>
        </div>
      </div>
    </footer>
  )
}