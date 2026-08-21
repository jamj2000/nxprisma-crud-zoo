import Link from "next/link"

function Navbar() {
    return (
        <nav className="flex justify-between text-md md:text-2xl p-2 bg-blue-200 font-bold">
            <div className="flex gap-4">
                <Link href="/">Inicio</Link>
                <Link href="/animales">Animales</Link>
                <Link href="/zoos">Zoológicos</Link>
            </div>
            <div>
                <Link href="/acerca">Acerca de ...</Link>
            </div>
        </nav>
    )
}

export default Navbar