'use server'
import prisma from '@/lib/prisma'
import { getZoosIds } from '@/lib/data';
import { revalidatePath } from 'next/cache';





export async function createAnimal(prevState, formData) {
  try {
    const nombre = formData.get('nombre')
    const especie = formData.get('especie')
    const zooId = formData.get('zooId') && Number(formData.get('zooId'))  // Este valor puede ser nulo

    const animal = await prisma.animal.create({
      data: { nombre, especie, zooId },
    })

    console.log(animal);
    revalidatePath('/animales')
    return { success: 'Operación realizada con éxito' }

  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }

  }

}



export async function updateAnimal(prevState, formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const especie = formData.get('especie')
  const zooId = formData.get('zooId') && Number(formData.get('zooId'))  // Este valor puede ser nulo

  // Array con IDs de todos los zoos
  const ids = await getZoosIds()
  console.log('IDs ', ids);

  try {
    const animal = await prisma.animal.update({
      where: { id },
      data: { nombre, especie, zooId },
    })

    console.log(animal);
    revalidatePath('/animales')
    return { success: 'Operación realizada con éxito' }

  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }

  }

}


export async function deleteAnimal(prevState, formData) {
  try {
    const id = Number(formData.get('id'))

    const animal = await prisma.animal.delete({
      where: { id },
    })
    console.log(animal);
    revalidatePath('/animales')
    return { success: 'Operación realizada con éxito' }

  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }

  }
}




export async function createZoo(prevState, formData) {
  try {
    const nombre = formData.get('nombre')
    let pais = formData.get('pais')
    const hectareas = Number(formData.get('hectareas'))

    const zoo = await prisma.zoo.create({
      data: { nombre, pais, hectareas },
    })

    console.log(zoo);
    revalidatePath('/zoos')
    return { success: 'Operación realizada con éxito' }

  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }

  }
}



export async function updateZoo(prevState, formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  let pais = formData.get('pais')
  const hectareas = Number(formData.get('hectareas'))

  try {
    const zoo = await prisma.zoo.update({
      where: { id },
      data: { nombre, pais, hectareas },
    })
    console.log(zoo);
    revalidatePath('/zoos')
    return { success: 'Operación realizada con éxito' }
  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }

  }

}



export async function deleteZoo(prevState, formData) {
  try {
    const id = Number(formData.get('id'))

    const zoo = await prisma.zoo.delete({
      where: { id },
    })
    console.log(zoo);
    revalidatePath('/zoos')
    return { success: 'Operación realizada con éxito' }

  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }

  }

}

