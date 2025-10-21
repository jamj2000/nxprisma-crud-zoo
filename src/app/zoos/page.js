import { Suspense } from 'react'
import { getZoos } from '@/lib/data'
import ListaZoos from '@/components/zoos/lista'



export default function Home() {
    const zoos = getZoos()

    return (
        <section>
            <h1 className='text-xl'>Zoológicos</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <ListaZoos zoos={zoos} />
            </Suspense>
        </section>
    )
}
