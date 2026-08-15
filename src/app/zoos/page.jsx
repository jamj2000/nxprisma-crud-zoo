import { Suspense } from 'react'
import { getAnimalesIdNombre } from '@/app/animales/data'
import { getZoos } from '@/app/zoos/data'
import { ListZoos } from './components'



export default function Page() {
    return (
        <section>
            <h1 className='text-xl'>Zoológicos</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <Content />
            </Suspense>
        </section>
    )
}



async function Content() {
    const [
        zoos,
        animalesIdNombre
    ] = await Promise.all([
        getZoos(),
        getAnimalesIdNombre()
    ])


    return <ListZoos zoos={zoos} animalesIdNombre={animalesIdNombre} />
}
