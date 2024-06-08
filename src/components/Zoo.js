

function Zoo ({ children, zoo }) {
    return (
        <div className='card'>
            <p><strong>{zoo.nombre}</strong></p>
            <p>{zoo.pais}</p>
            <p>{zoo.hectareas.toString()} ha</p>
            {children}
        </div>
    )
}

export default Zoo 