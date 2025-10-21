import Link from "next/link"


function Zoo({ children, zoo }) {
    return (
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
}

export default Zoo