'use client'
import { use } from "react"

import Modal from "@/components/modal"
import Form from "@/components/animales/form"
import Animal from "@/components/animales/item"

import { createAnimal, updateAnimal, deleteAnimal } from "@/lib/actions"


function ListaAnimales({ animales }) {
    const lista = use(animales)

    return (
        <>
            <Modal openElement={"NUEVO"}>
                <Form action={createAnimal} title={"Crear animal"} animal={null} />
            </Modal>

            <div className="flex flex-wrap gap-4">
                {lista.map((animal) => (
                    <Animal key={animal.id} animal={animal} >
                        <Modal openElement={"EDITAR"}>
                            <Form action={updateAnimal} title={"Actualizar animal"} animal={animal} />
                        </Modal>
                        <Modal openElement={"ELIMINAR"}>
                            <Form action={deleteAnimal} title={"Eliminar animal"} animal={animal} disabled />
                        </Modal>
                    </Animal>
                ))}
            </div>

        </>
    )
}

export default ListaAnimales