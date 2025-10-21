'use client'
import { use } from "react"

import Modal from "@/components/modal"
import Form from "@/components/animales/form"
import Animal from "@/components/animales/item"

import { createAnimal, updateAnimal, deleteAnimal } from "@/lib/actions"


function ListaAnimales({ animales, zoos }) {
    const listaAnimales = use(animales)
    const listaZoos = use(zoos)

    return (
        <>
            <Modal openElement={"NUEVO"}>
                <Form action={createAnimal} title={"Crear animal"} animal={null} zoos={listaZoos} />
            </Modal>

            <div className="flex flex-wrap gap-4">
                {listaAnimales.map((animal) => (
                    <Animal key={animal.id} animal={animal} >
                        <Modal openElement={"EDITAR"}>
                            <Form action={updateAnimal} title={"Actualizar animal"} animal={animal} zoos={listaZoos} />
                        </Modal>
                        <Modal openElement={"ELIMINAR"}>
                            <Form action={deleteAnimal} title={"Eliminar animal"} animal={animal} zoos={listaZoos} disabled />
                        </Modal>
                    </Animal>
                ))}
            </div>

        </>
    )
}

export default ListaAnimales