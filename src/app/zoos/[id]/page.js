import Zoo from '@/components/zoos/item'
import { getZoo } from '@/lib/data'
import { notFound } from 'next/navigation'


async function InfoZoo({ params }) {
    const { id } = await params
    const zoo = await getZoo(id)

    if (!zoo) notFound()

    return (
        <div>
            <h1 className='text-xl'>Información del zoológico</h1>
            <Zoo zoo={zoo} />
        </div>
    )
}

export default InfoZoo