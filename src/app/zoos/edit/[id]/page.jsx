import Form from "@/components/FormZoo"
import Button from "@/components/Button"
import prisma from '@/lib/prisma'
import { editZoo } from "@/lib/actions"

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
      <h3>Editar zoológico</h3>
      <Form action={editZoo} zoo={zoo} >
        <Button title='Editar zoológico' />
      </Form>
    </div>
  )
}


export default page