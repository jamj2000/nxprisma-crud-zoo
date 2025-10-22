import { Suspense } from 'react'
import ListaZoos from '@/components/zoos/lista'



export default function Home() {

    return (
        <section>
            <h1 className='text-xl'>Zoológicos</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <ListaZoos />
            </Suspense>
        </section>
    )
}
