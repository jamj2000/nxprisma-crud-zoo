import Link from 'next/link'
import Image from 'next/image'
import Zoo from '@/components/Zoo'
import { getZoos } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const zoos = await getZoos()
    // console.log(zoos);

    return (
        <div>
            <Link className='enlace' href="/zoos/new">
                <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                Nuevo zoológico
            </Link>
            {
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
            }
        </div>
    )
}
