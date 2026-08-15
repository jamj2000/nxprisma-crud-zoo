'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';





export async function createZoo(prevState, formData) {

  // Obtenemos datos
  const nombre = formData.get('nombre')
  let pais = formData.get('pais')
  const hectareas = Number(formData.get('hectareas'))
  const animales = formData.getAll('animales').map(id => ({ id: +id }))


  // Realizamos operación en base de datos
  try {
    await prisma.zoo.create({
      data: {
        nombre,
        pais,
        hectareas,
        animales: { connect: animales }
      },
    })
  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }

  }

  revalidatePath('/zoos')
  return { success: 'Operación realizada con éxito' }
}




export async function updateZoo(prevState, formData) {

  // Obtenemos datos
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  let pais = formData.get('pais')
  const hectareas = Number(formData.get('hectareas'))

  const animales = formData.getAll('animales').map(id => ({ id: +id }))

  // Realizamos operación en base de datos
  try {
    await prisma.zoo.update({
      where: { id },
      data: {
        nombre,
        pais,
        hectareas,
        animales: { set: animales }
      },
    })
  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }
  }

  revalidatePath('/zoos')
  return { success: 'Operación realizada con éxito' }

}



export async function deleteZoo(prevState, formData) {

  // Obtenemos datos
  const id = Number(formData.get('id'))


  // Realizamos operación en base de datos
  try {
    await prisma.zoo.delete({
      where: { id },
    })

  } catch (error) {
    console.log(error);
    return { error: 'Fallo al realizar la operación' }
  }


  redirect('/zoos')
}

