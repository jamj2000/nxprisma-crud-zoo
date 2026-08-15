import { Suspense } from 'react'
import { getAnimales } from '@/app/animales/data'
import { getZoosIdNombre } from '@/app/zoos/data'
import { ListAnimales } from './components'



export default function Page() {
    return (
        <section>
            <h1 className='text-xl'>Animales</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <Content />
            </Suspense>
        </section>
    )
}


async function Content() {
    const [
        animales,
        zoosIdNombre
    ] = await Promise.all([
        getAnimales(),
        getZoosIdNombre()
    ])

    return <ListAnimales animales={animales} zoosIdNombre={zoosIdNombre} />
}
