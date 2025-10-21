import { Suspense } from 'react'
import { getAnimales } from '@/lib/data'
import ListaAnimales from '@/components/animales/lista'



export default function Home() {
    const animales = getAnimales()

    return (
        <section>
            <h1 className='text-xl'>Animales</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <ListaAnimales animales={animales} />
            </Suspense>
        </section>
    )
}
