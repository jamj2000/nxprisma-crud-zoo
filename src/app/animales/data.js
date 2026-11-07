'use server'
import prisma from '@/lib/prisma'
import { cacheTag } from 'next/cache'



export async function getAnimales() {
    'use cache'
    cacheTag('animales')

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
    'use cache'
    cacheTag('animales', 'animales:id-nombre')

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
    'use cache'
    cacheTag('animales', `animal:${id}`)

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
