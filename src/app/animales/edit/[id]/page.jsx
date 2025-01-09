import Form from "@/components/FormAnimal"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { editAnimal } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page(props) {
  const params = await props.params;
  const animal = await prisma.animal.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Editar animal</h3>
      <Form action={editAnimal} animal={animal} >
        <Button title='Editar animal' />
      </Form>
    </div>
  )
}


export default page