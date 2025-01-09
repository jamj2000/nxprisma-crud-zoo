import ListaZoos from '@/components/ListaZoos'
import { Suspense } from 'react'

function Form({ children, action, animal, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={animal?.id} />
            <fieldset disabled={disabled}>
                <legend># {animal?.id}</legend>

                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={animal?.nombre} autoFocus required></input>

                <label htmlFor='especie'>Especie</label>
                <input type='text' id='especie' name='especie'
                    placeholder='Especie'
                    defaultValue={animal?.especie} required></input>
            </fieldset>

            <Suspense fallback={'Loading ...'}>
                <ListaZoos animalId={animal?.id} disabled={disabled} />
            </Suspense>
            {children}
        </form>
    )
}

export default Form