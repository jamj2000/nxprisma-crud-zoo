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

            <fieldset disabled={disabled}>
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

            <button type='submit' autoFocus>{pending ? 'Actualizando info' : title}</button>
        </form>
    )
}

export default Form