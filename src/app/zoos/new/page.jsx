import Form from "@/components/FormZoo"
import Button from "@/components/Button"
import { newZoo } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div>
        <h3>Nuevo zoológico</h3>
        <Form action={newZoo} zoo={null}>
          <Button title='Crear zoológico' />
        </Form>
    </div>
  )
}

export default page