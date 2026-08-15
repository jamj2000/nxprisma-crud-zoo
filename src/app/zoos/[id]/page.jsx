import { getZoo } from '@/app/zoos/data'
import { notFound } from 'next/navigation'
import { Button, CardZoo, FormZoo } from '../components'
import { deleteZoo, updateZoo } from '../actions'
import Modal from '@/components/modal'
import { Suspense } from 'react'


export default function Page({ params }) {
    return (
        <div>
            <h1 className='text-xl'>Información del zoológico</h1>

            <Suspense fallback={"Obteniendo datos..."}>
                <Content params={params} />
            </Suspense>
        </div >
    )
}




async function Content({ params }) {
    const { id } = await params
    const zoo = await getZoo(id)

    if (!zoo) notFound()

    return (
        <CardZoo zoo={zoo} >

            <Modal trigger={<Button>EDITAR</Button>}>
                <h2 className='text-2xl'>MODIFICAR ZOOLÓGICO</h2>
                <FormZoo action={updateZoo} title={"Actualizar zoológico"} zoo={zoo} />
            </Modal>

            <Modal trigger={<Button>ELIMINAR</Button>}>
                <h2 className='text-2xl'>ELIMINAR ZOOLÓGICO</h2>
                <FormZoo action={deleteZoo} title={"Eliminar zoológico"} zoo={zoo} disabled />
            </Modal>

        </CardZoo>
    )
}