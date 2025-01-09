'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"

function Navbar() {
    const pathname = usePathname()

    return (
        <nav>
            <div>
                <Link href="/"
                    className={pathname == '/' ? 'item-selected' : ''} >
                    Inicio
                </Link>
                <Link href="/zoos"
                    className={pathname.startsWith('/zoos') ? 'item-selected' : ''} >
                    Zoológicos
                </Link>
                <Link href="/animales"
                    className={pathname.startsWith('/animales') ? 'item-selected' : ''} >
                    Animales
                </Link>
            </div>
            <div>
                <Link href="/acerca"
                    className={pathname.startsWith('/acerca') ? 'item-selected' : ''} >
                    Acerca de ...
                </Link>
            </div>
        </nav>
    )
}

export default Navbar