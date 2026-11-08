'use client'
import Link from "next/link"
import Modal from "@/components/modal"
import { createAnimal, updateAnimal, deleteAnimal } from "@/app/animales/actions"
import { useActionState, useEffect, useId } from "react"




export const Button = ({ children }) => (
    <button type="button" className="my-2 px-4 py-2 bg-slate-600 text-white rounded-md hover:opacity-50 cursor-pointer">
        {children}
    </button>
)




export const CardAnimal = ({ children, animal }) => (
    <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded">

        <Link prefetch href={`/animales/${animal.id}`}>
            <strong>{animal.nombre}</strong>
        </Link>

        <p>{animal.especie}</p>
        <p>{animal.zoo?.nombre}</p>

        <div className="mt-4 flex gap-4 justify-end">
            {children}
        </div>
    </div>
)







export const ListAnimales = ({ animales, zoosIdNombre }) => (
    <div>
        <Modal trigger={<Button>NUEVO</Button>}>
            <h2 className='text-2xl'>REGISTRAR ANIMAL</h2>
            <FormAnimal action={createAnimal} title={"Registrar animal"} animal={null} zoosIdNombre={zoosIdNombre} />
        </Modal>

        <div className="flex flex-wrap gap-4">
            {animales?.map((animal) => (
                <CardAnimal key={animal.id} animal={animal} >

                    <Modal trigger={<Button>EDITAR</Button>}>
                        <h2 className='text-2xl'>MODIFICAR ANIMAL</h2>
                        <FormAnimal action={updateAnimal} title={"Actualizar animal"} animal={animal} zoosIdNombre={zoosIdNombre} />
                    </Modal>

                    <Modal trigger={<Button>ELIMINAR</Button>}>
                        <h2 className='text-2xl'>ELIMINAR ANIMAL</h2>
                        <FormAnimal action={deleteAnimal} title={"Eliminar animal"} animal={animal} zoosIdNombre={zoosIdNombre} disabled />
                    </Modal>

                </CardAnimal>
            ))}
        </div>

    </div>
)






export const FormAnimal = ({ action, title, animal, zoosIdNombre, disabled = false }) => {

    const formId = useId()
    const [state, formAction, pending] = useActionState(action, {})

    useEffect(() => {
        if (state?.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state, formId])

    return (
        <form action={formAction} id={formId} key={JSON.stringify(animal)}>
            <input type='hidden' name='id' value={animal?.id} />

            <fieldset disabled={disabled} className="flex flex-col py-4">

                <label className="mt-4 flex flex-col">
                    <span className="font-bold">Nombre</span>
                    <input
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={animal?.nombre}
                    />
                </label>


                <label className="mt-4 flex flex-col">
                    <span className="font-bold">Especie</span>
                    <input
                        name='especie'
                        placeholder='Especie'
                        defaultValue={animal?.especie}
                    />
                </label>

            </fieldset>


            {disabled ? <p>{animal?.zoo?.nombre}</p> : (
                <fieldset>
                    <legend className="font-bold">Zoológicos disponibles</legend>
                    {zoosIdNombre?.map((zoo) => (
                        <label key={zoo.id} className="flex gap-2">
                            {animal?.zoo?.id == zoo.id
                                ? <input key={`radio-${zoo.id}`} type='radio' name='zooId' value={zoo.id} defaultChecked />
                                : <input type='radio' name='zooId' value={zoo.id} />
                            }
                            {zoo.nombre}
                        </label>
                    ))}
                </fieldset>
            )}


            <button type='submit' className={pending ? 'animate-pulse' : ''} autoFocus>{pending ? 'Actualizando info' : title}</button>
        </form >
    )
}





