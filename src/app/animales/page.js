import { Suspense } from 'react'
import { getAnimales, getZoos } from '@/lib/data'
import ListaAnimales from '@/components/animales/lista'



export default function Home() {
    const animales = getAnimales()
    const zoos = getZoos()

    return (
        <section>
            <h1 className='text-xl'>Animales</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <ListaAnimales animales={animales} zoos={zoos} />
            </Suspense>
        </section>
    )
}
