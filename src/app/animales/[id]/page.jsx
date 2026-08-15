import { getAnimal } from '@/app/animales/data'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { Button, CardAnimal, FormAnimal } from '../components'
import { deleteAnimal, updateAnimal } from '../actions'
import Modal from '@/components/modal'
import { getZoosIdNombre } from '@/app/zoos/data'


export default function Page({ params }) {
    return (
        <div>
            <h1 className='text-xl'>Información del animal</h1>

            <Suspense fallback={"Obteniendo datos..."}>
                <Content params={params} />
            </Suspense>
        </div >
    )
}




async function Content({ params }) {
    const { id } = await params
    const [
        animal,
        zoosIdNombre
    ] = await Promise.all([
        getAnimal(id),
        getZoosIdNombre()
    ])

    if (!animal) notFound()

    return (
        <CardAnimal animal={animal} >

            <Modal trigger={<Button>EDITAR</Button>}>
                <h2 className='text-2xl'>MODIFICAR ANIMAL</h2>
                <FormAnimal action={updateAnimal} title={"Actualizar animal"} animal={animal} zoosIdNombre={zoosIdNombre} />
            </Modal>

            <Modal trigger={<Button>ELIMINAR</Button>}>
                <h2 className='text-2xl'>ELIMINAR ANIMAL</h2>
                <FormAnimal action={deleteAnimal} title={"Eliminar animal"} animal={animal} zoosIdNombre={zoosIdNombre} disabled />
            </Modal>

        </CardAnimal>
    )
}