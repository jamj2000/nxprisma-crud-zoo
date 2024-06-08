

function Animal({ children, animal }) {
    return (
        <div className='card'>
            <p><strong>{animal.nombre}</strong></p>
            <p>{animal.especie}</p>
            {children}
        </div>
    )
}

export default Animal