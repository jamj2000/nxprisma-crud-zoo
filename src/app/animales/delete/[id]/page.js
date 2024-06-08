import Form from "@/components/FormAnimal"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { deleteAnimal } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const animal = await prisma.animal.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Eliminar animal</h3>
      <Form action={deleteAnimal} animal={animal} disabled={true} >
        <Button title='Eliminar animal' />
      </Form>
    </div>
  )
}

export default page