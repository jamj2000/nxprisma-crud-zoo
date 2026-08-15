'use server'
import prisma from '@/lib/prisma'



export async function getAnimales() {
    try {
        const animales = await prisma.animal.findMany({
            include: { zoo: true },
            orderBy: { updatedAt: 'desc' }
        })
        return animales;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function getAnimalesIdNombre() {
    try {
        const animales = await prisma.animal.findMany({
            select: {
                id: true,
                nombre: true
            }
        })
        return animales;
    } catch (error) {
        console.log(error);
        return null;
    }
}




export async function getAnimal(id) {
    try {
        const animal = await prisma.animal.findUnique({
            where: { id: Number(id) },
            include: { zoo: true }
        })

        return animal;
    } catch (error) {
        console.log(error);
        return null;
    }
}
