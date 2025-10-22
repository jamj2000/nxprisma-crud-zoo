import Modal from "@/components/modal"
import Form from "@/components/zoos/form"
import Zoo from "@/components/zoos/item"

import { createZoo, updateZoo, deleteZoo } from "@/lib/actions"
import { getZoos } from "@/lib/data"


async function ListaZoos() {
    const listaZoos = await getZoos()

    return (
        <>
            <Modal openElement={"NUEVO"}>
                <Form action={createZoo} title={"Crear zoo"} zoo={null} />
            </Modal>

            <div className="flex flex-wrap gap-4">
                {listaZoos.map((zoo) => (
                    <Zoo key={zoo.id} zoo={zoo} >
                        <Modal openElement={"EDITAR"}>
                            <Form action={updateZoo} title={"Actualizar zoo"} zoo={zoo} />
                        </Modal>
                        <Modal openElement={"ELIMINAR"}>
                            <Form action={deleteZoo} title={"Eliminar zoo"} zoo={zoo} disabled />
                        </Modal>
                    </Zoo>
                ))}
            </div>

        </>
    )
}

export default ListaZoos