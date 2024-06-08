import Link from "next/link"

function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/zoos">Zoológicos</Link>
                <Link href="/animales">Animales</Link>
            </div>
            <div>
                <Link href="/acerca">Acerca de ...</Link>
            </div>
        </nav>
    )
}

export default Navbar