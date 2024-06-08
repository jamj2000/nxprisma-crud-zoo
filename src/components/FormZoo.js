

function Form({ children, action, zoo, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={zoo?.id} />
            <fieldset disabled={disabled}>
                <legend># {zoo?.id}</legend>

                <label htmlFor='nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={zoo?.nombre} autoFocus required />

                <label htmlFor='pais'>Pais</label>
                <input type='text' id='pais' name='pais'
                    placeholder='Pais'
                    defaultValue={zoo?.pais} required />

                <label htmlFor='hectareas'>Hectareas</label>
                <input type='number' id='hectareas' name='hectareas' min='0' step={0.01}
                    placeholder='Hectareas'
                    defaultValue={Number(zoo?.hectareas)} />
            </fieldset>
            
            {children}
        </form >
    )
}

export default Form