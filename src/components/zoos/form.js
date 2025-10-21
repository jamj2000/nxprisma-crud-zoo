'use client'
import { useActionState, useEffect, useId } from "react"

function Form({ action, title, zoo, disabled = false }) {

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
            <input type='hidden' name='id' value={zoo?.id} />

            <fieldset disabled={disabled} className="flex flex-col py-4">
                <label htmlFor='nombre' className="mt-4">Nombre</label>
                <input
                    name='nombre'
                    placeholder='Nombre'
                    defaultValue={zoo?.nombre} />

                <label htmlFor='pais' className="mt-4">País</label>
                <input
                    name='pais'
                    placeholder='País'
                    defaultValue={zoo?.pais} />

                <label htmlFor='hectareas' className="mt-4">Hectareas</label>
                <input
                    type='number'
                    name='hectareas'
                    min='0'
                    step={0.01}
                    placeholder='hectareas'
                    defaultValue={zoo?.hectareas} />
            </fieldset>

            <button type='submit' autoFocus>{title}</button>
        </form>
    )
}

export default Form