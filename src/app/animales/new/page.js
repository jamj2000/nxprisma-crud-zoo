import Form from "@/components/FormAnimal"
import Button from "@/components/Button"
import { newAnimal } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
      <h3>Nuevo animal</h3>
      <Form action={newAnimal} animal={null}>
        <Button title='Crear animal' />
      </Form>
    </div>
  )
}

export default page