'use client'
import { useActionState, useEffect, useId } from "react"

function Form({ action, title, animal, zoos, disabled = false }) {

    const formId = useId()
    const [state, faction, pending] = useActionState(action, {})

    useEffect(() => {
        if (state?.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state, formId])

    return (
        <form action={faction} id={formId}>
            <input type='hidden' name='id' value={animal?.id} />

            <fieldset disabled={disabled} className="flex flex-col py-4">
                <label htmlFor='nombre' className="mt-4">Nombre</label>
                <input
                    name='nombre'
                    placeholder='Nombre'
                    defaultValue={animal?.nombre} />

                <label htmlFor='especie' className="mt-4">Especie</label>
                <input
                    name='especie'
                    placeholder='Especie'
                    defaultValue={animal?.especie} />

            </fieldset>

            {/* {disabled ? <p>{animal?.zoo?.nombre}</p> : (
                <fieldset>
                    <legend>Zoos</legend>
                    {zoos?.map((zoo) => (
                        <div key={zoo.id}>
                            {animal?.zoo?.id == zoo.id
                                ? <input type='radio' name='zooId' value={zoo.id} defaultChecked />
                                : <input type='radio' name='zooId' value={zoo.id} />
                            }
                            {zoo.nombre}
                        </div>
                    ))}
                </fieldset>
            )
            } */}

            <p className="mb-4">{animal?.zoo?.nombre}</p>

            {!disabled
                &&
                <fieldset className="p-4 bg-slate-200 mb-4">
                    <legend>Elige nuevo zoológico</legend>
                    {zoos?.map((zoo) => (
                        <label key={zoo.id} className="block">
                            <input type='radio' name='zooId' value={zoo.id} />  {zoo.nombre}
                        </label>
                    ))}
                </fieldset>
            }

            <button type='submit' autoFocus>{pending ? 'Actualizando info' : title}</button>
        </form >
    )
}

export default Form