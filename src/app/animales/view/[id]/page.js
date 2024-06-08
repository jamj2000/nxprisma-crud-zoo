import Form from "@/components/FormAnimal"
import prisma from '@/lib/prisma'
import { getAnimal } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const animal = await prisma.animal.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Ver animal</h3>
      <Form action={getAnimal} animal={animal} disabled={true} >
      </Form>
    </div>
  )
}

export default page