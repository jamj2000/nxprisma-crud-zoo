'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// Obtener array con IDs de todos los zoos
async function getZoosIds() {
  const zoosIds = await prisma.zoo.findMany({
    select: { id: true }
  })
  return zoosIds.map(zoo => zoo.id)
}



// ANIMALES

export async function getAnimales() {
  try {
    const animales = await prisma.animal.findMany()
    console.log(animales);
    return animales;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getAnimal(id) {  // obtener animales con su zoo
  try {
    const animal = await prisma.animal.findUnique({
      where: { id },
      include: { zoo: true  }
    })

    console.log(animal);
    return animal;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}



export async function newAnimal(formData) {
  try {
    const nombre = formData.get('nombre')
    const especie = formData.get('especie')
    const zooId = Number(formData.get('zooId'))


    const animal = await prisma.animal.create({
      data: { nombre, especie, zooId },
    })

    console.log(animal);
    revalidatePath('/animales')
  } catch (error) {
    console.log(error);
  }
  redirect('/animales');
}



export async function editAnimal(formData) {
  const id = Number(formData.get('id'))
  const nombre = formData.get('nombre')
  const especie = formData.get('especie')
  const zooId = Number(formData.get('zooId'))

  // Array con IDs de todos los zoos
  const ids = await getZoosIds()
  console.log('IDs ', ids);

  try {
    const animal = await prisma.animal.update({
      where: { id },
      data: {  nombre, especie, zooId },
    })

    console.log(animal);
    revalidatePath('/animales')
  } catch (error) {
    console.log(error);
  }
  redirect('/animales');
}


export async function deleteAnimal(formData) {
  try {
    const id = Number(formData.get('id'))

    const animal = await prisma.animal.delete({
      where: { id },
    })
    console.log(animal);
    revalidatePath('/animales')
  } catch (error) {
    console.log(error);
  }

  redirect('/animales');
}



// ZOOS

export async function getZoos() {
  try {
    const zoos = await prisma.zoo.findMany()
    return zoos;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}



export async function getZoo(id) {  // obtener zoo con animales
  try {
    const zoo = await prisma.zoo.findUnique({
      where: { id },
      include: { animales: true  }
    })

    console.log(zoo);
    return zoo;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}



export async function newZoo(formData) {
  try {
    const nombre = formData.get('nombre')
    let pais = formData.get('pais')
    const hectareas = Number(formData.get('hectareas'))

    const zoo = await prisma.zoo.create({
      data: { nombre, pais, hectareas },
    })

    console.log(zoo);
    revalidatePath('/zoos')
  } catch (error) {
    console.log(error);
  }
  redirect('/zoos');
}



export async function editZoo(formData) {
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
  } catch (error) {
    console.log(error);
  }
  redirect('/zoos');
}



export async function deleteZoo(formData) {
  try {
    const id = Number(formData.get('id'))

    const zoo = await prisma.zoo.delete({
      where: { id },
    })
    console.log(zoo);
    revalidatePath('/zoos')
  } catch (error) {
    console.log(error);
  }

  redirect('/zoos');
}

