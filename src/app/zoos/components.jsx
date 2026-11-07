'use client'
import Link from "next/link"
import Modal from "@/components/modal"
import { createZoo, updateZoo, deleteZoo } from "@/app/zoos/actions"
import { useActionState, useEffect, useId } from "react"



export const Button = ({ children }) => (
    <button type="button" className="my-2 px-4 py-2 bg-slate-600 text-white rounded-md hover:opacity-50 cursor-pointer">
        {children}
    </button>
)




export const CardZoo = ({ children, zoo }) => (
    <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded">

        <Link prefetch href={`/zoos/${zoo.id}`}>
            <strong>{zoo.nombre}</strong>
        </Link>

        <p>{zoo.pais}</p>
        <p>{zoo.hectareas} ha</p>

        <div className="mt-4 flex gap-4 justify-end">
            {children}
        </div>
    </div>
)





export const ListZoos = ({ zoos, animalesIdNombre }) => (
    <div>
        <Modal trigger={<Button>NUEVO</Button>}>
            <h2 className='text-2xl'>REGISTRAR ZOOLÓGICO</h2>
            <FormZoo action={createZoo} title={"Registrar zoológico"} zoo={null} animalesIdNombre={animalesIdNombre} />
        </Modal>

        <div className="flex flex-wrap gap-4">
            {zoos.map((zoo) => (
                <CardZoo key={zoo.id} zoo={zoo} >

                    <Modal trigger={<Button>EDITAR</Button>}>
                        <h2 className='text-2xl'>MODIFICAR ZOOLÓGICO</h2>
                        <FormZoo action={updateZoo} title={"Actualizar zoológico"} zoo={zoo} animalesIdNombre={animalesIdNombre} />
                    </Modal>

                    <Modal trigger={<Button>ELIMINAR</Button>}>
                        <h2 className='text-2xl'>ELIMINAR ZOOLÓGICO</h2>
                        <FormZoo action={deleteZoo} title={"Eliminar zoológico"} zoo={zoo} animalesIdNombre={animalesIdNombre} disabled />
                    </Modal>

                </CardZoo>
            ))}
        </div>

    </div>
)




export const FormZoo = ({ action, title, zoo, animalesIdNombre, disabled = false }) => {

    const formId = useId()
    const [state, formAction, pending] = useActionState(action, {})

    useEffect(() => {
        if (state?.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state, formId])

    return (
        <form action={formAction} id={formId}>
            <input type='hidden' name='id' value={zoo?.id} />

            <fieldset disabled={disabled} className="flex flex-col py-4">

                <label className="mt-4 flex flex-col">
                    <span className="font-bold">Nombre</span>
                    <input
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={zoo?.nombre}
                    />
                </label>


                <label className="mt-4 flex flex-col">
                    <span className="font-bold">País</span>
                    <input
                        id='pais'
                        name='pais'
                        placeholder='País'
                        defaultValue={zoo?.pais}
                    />
                </label>


                <label className="mt-4 flex flex-col">
                    <span className="font-bold">Hectareas</span>
                    <input
                        type='number'
                        id='hectareas'
                        name='hectareas'
                        min='0'
                        step={0.01}
                        placeholder='hectareas'
                        defaultValue={zoo?.hectareas}
                    />
                </label>

            </fieldset>


            <fieldset>
                <legend className="font-bold">Animales en el zoológico</legend>

                {disabled
                    ? <div>{zoo?.animales?.map(a => <p key={a.nombre}>{a.nombre}</p>)}</div>
                    : animalesIdNombre?.map(({ id, nombre }) => (
                        <label key={id} className="flex gap-2">
                            {zoo?.animales?.some(a => a.id == id)
                                ? <input key={`checkbox-${id}`} type='checkbox' name='animales' value={id} defaultChecked />
                                : <input type='checkbox' name='animales' value={id} />
                            }
                            {nombre}
                        </label>
                    ))
                }

            </fieldset>




            <button type='submit' autoFocus>{pending ? 'Actualizando info' : title}</button>
        </form>
    )
}




