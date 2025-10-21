'use server'
import prisma from '@/lib/prisma'

// Obtener array con IDs de todos los zoos
export async function getZoosIds() {
    const zoosIds = await prisma.zoo.findMany({
        select: { id: true }
    })
    return zoosIds.map(zoo => zoo.id)
}



// ANIMALES

export async function getAnimales() {
    try {
        const animales = await prisma.animal.findMany({
            include: { zoo: true }
        })
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
            include: { zoo: true }
        })

        console.log(animal);
        return animal;
    } catch (error) {
        // console.log(error);  
        return null;
    }
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
            include: { animales: true }
        })

        console.log(zoo);
        return zoo;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}