import { getAnimal, getZoos } from '@/lib/actions'

async function ListaZoos({ animalId, disabled }) {
    const zoos = await getZoos()

    let animal = null;
    let zooId = null;
    if (animalId) {
        animal = await getAnimal(animalId)
        zooId = animal.zooId;
    }

    console.log(`ZOOLÓGICO del ANIMAL ${animalId}: `, zooId);

    //// Tenemos 2 alternativas:
    //// - usar inputs tipo radio
    //// - usar options dentro de select


    return (
    <fieldset disabled={disabled}>
        <legend>Zoos</legend>
        {zoos?.map((zoo) => (
            <div key={zoo.id}>
                {zooId == zoo.id
                    ? <input type='radio' name='zooId' value={zoo.id} defaultChecked />
                    : <input type='radio' name='zooId' value={zoo.id} />
                }
                {zoo.nombre}
            </div>
        ))}
    </fieldset>
    )

    //// Si quieres utilizar options dentro de un select, comenta las líneas anteriores y 
    //// y descomenta las siguientes líneas 
    //// IMPORTANTE:  No poner disabled={disabled} en select puesto que no devuelve el valor correctamente

    // if (disabled)
    //     return (
    //         <fieldset>
    //             <input type='hidden' name="zooId" value={zooId} />
    //             <legend>Zoo</legend>
    //             <strong>{zoos.find(p => p.id == zooId).nombre}</strong>
    //         </fieldset>
    //     )
    // else
    //     return (
    //         <select name="zooId" defaultValue={zooId} >
    //             {zoos?.map((zoo) => <option key={zoo.id} value={zoo.id}> {zoo.nombre} </option>
    //             )}
    //         </select>
    //     )

}

export default ListaZoos