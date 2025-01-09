import { getZoos } from "@/lib/actions"
import Zoo from "@/components/Zoo"
import Image from "next/image"
import Link from "next/link"


async function Zoos() {
    const zoos = await getZoos()

    return (
        zoos.map((zoo) => (
            <Zoo key={zoo.id} zoo={zoo} >
                <Link className='enlace' href={`/zoos/view/${zoo.id}`} >
                    <Image src='/ver.svg' alt='nuevo' width="20" height="20" />
                    Ver
                </Link>
                <Link className='enlace' href={`/zoos/edit/${zoo.id}`} >
                    <Image src='/editar.svg' alt='nuevo' width="20" height="20" />
                    Editar
                </Link>
                <Link className='enlace' href={`/zoos/delete/${zoo.id}`} >
                    <Image src='/eliminar.svg' alt='nuevo' width="20" height="20" />
                    Eliminar
                </Link>
            </Zoo>
        ))
    )
}

export default Zoos