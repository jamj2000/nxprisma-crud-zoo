import { Suspense } from 'react'
import ListaAnimales from '@/components/animales/lista'



export default function Home() {

    return (
        <section>
            <h1 className='text-xl'>Animales</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <ListaAnimales />
            </Suspense>
        </section>
    )
}
