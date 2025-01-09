import Form from "@/components/FormZoo"
import prisma from '@/lib/prisma'
import { getZoo } from "@/lib/actions"

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
      <h3>Ver zoológico</h3>
      <Form action={getZoo} zoo={zoo} disabled={true} >
      </Form>
    </div>
  )
}

export default page