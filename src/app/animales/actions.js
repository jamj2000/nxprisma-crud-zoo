'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';








export async function createAnimal(prevState, formData) {

  // Obtenemos datos
  const nombre = formData.get('nombre')
  const especie = formData.get('especie')
  const zooId = formData.get('zooId') && Number(formData.get('zooId'))  // Este valor puede ser nulo


  // Realizamos operación en base de datos
  try {
    await prisma.animal.create({
      data: { nombre, especie, zooId },
    })

  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }
  }


  revalidatePath('/animales')
  return { success: 'Operación realizada con éxito' }

}



export async function updateAnimal(prevState, formData) {

  // Obtenemos datos
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const especie = formData.get('especie')
  const zooId = formData.get('zooId') && Number(formData.get('zooId'))  // Este valor puede ser nulo


  // Realizamos operación en base de datos
  try {
    await prisma.animal.update({
      where: { id },
      data: { nombre, especie, zooId },
    })
  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }
  }


  revalidatePath('/animales')
  return { success: 'Operación realizada con éxito' }
}




export async function deleteAnimal(prevState, formData) {

  // Obtenemos datos
  const id = Number(formData.get('id'))

  // Realizamos operación en base de datos
  try {
    await prisma.animal.delete({
      where: { id },
    })
  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }
  }

  redirect('/animales')
}



