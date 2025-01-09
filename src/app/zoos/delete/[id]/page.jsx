import Form from "@/components/FormZoo"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { deleteZoo } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page(props) {
  const params = await props.params;

  const zoo = await prisma.zoo.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Eliminar zoológico</h3>
      <Form action={deleteZoo} zoo={zoo} disabled={true} >
        <Button title='Eliminar zoológico' />
      </Form>
    </div>
  )
}

export default page