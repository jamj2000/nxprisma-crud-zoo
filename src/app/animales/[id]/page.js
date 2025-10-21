import Animal from '@/components/animals/item'
import { getAnimal } from '@/lib/data'
import { notFound } from 'next/navigation'


async function InfoAnimal({ params }) {
    const { id } = await params
    const animal = await getAnimal(id)

    if (!animal) notFound()

    return (
        <div>
            <h1 className='text-xl'>Información del animal</h1>
            <Animal animal={animal} />
        </div>
    )
}

export default InfoAnimal