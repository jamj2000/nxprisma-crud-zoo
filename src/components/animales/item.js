import Link from "next/link"


function Animal({ children, animal }) {
    return (
        <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded">
            <Link prefetch href={`/animals/${animal.id}`}>
                <strong>{animal.nombre}</strong>
            </Link>
            <p>{animal.especie}</p>
            <div className="mt-4 flex gap-4 justify-end">
                {children}
            </div>
        </div>
    )
}

export default Animal