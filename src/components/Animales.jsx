import { getAnimales } from "@/lib/actions"
import Animal from "@/components/Animal"
import Link from "next/link"
import Image from "next/image"


async function Animales() {
    const animales = await getAnimales()

    return (
        animales.map((animal) => (
            <Animal key={animal.id} animal={animal} >
                <Link className='enlace' href={`/animales/view/${animal.id}`} >
                    <Image src='/ver.svg' alt='nuevo' width="20" height="20" />
                    Ver
                </Link>
                <Link className='enlace' href={`/animales/edit/${animal.id}`} >
                    <Image src='/editar.svg' alt='nuevo' width="20" height="20" />
                    Editar
                </Link>
                <Link className='enlace' href={`/animales/delete/${animal.id}`} >
                    <Image src='/eliminar.svg' alt='nuevo' width="20" height="20" />
                    Eliminar
                </Link>
            </Animal>
        ))
    )
}

export default Animales