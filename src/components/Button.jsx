'use client'
import { useFormStatus } from 'react-dom'

function Button({title}) {
    const { pending } = useFormStatus()
    return (
        <button type='submit' disabled={pending}>
            {pending ? 'Realizando operación...' : title}
        </button>
    )
}

export default Button

