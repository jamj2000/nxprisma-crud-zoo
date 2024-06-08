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
}

export default ListaZoos