import Link from 'next/link'
import Image from 'next/image'
import Animal from '@/components/Animal'
import { getAnimales } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const animales = await getAnimales()
    // console.log(animales);

    return (
        <div>
            <Link className='enlace' href="/animales/new">
                <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                Nuevo animal
            </Link>
            {
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
            }
        </div>
    )
}
