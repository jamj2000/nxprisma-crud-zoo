'use server'
import prisma from '@/lib/prisma'





export async function getZoos() {
    try {
        const zoos = await prisma.zoo.findMany({
            include: { animales: true },
            orderBy: { nombre: 'asc' }
        })
        return zoos;
    } catch (error) {
        console.log(error);
        return null;
    }
}



export async function getZoosIdNombre() {
    try {
        const zoos = await prisma.zoo.findMany({
            select: {
                id: true,
                nombre: true
            }
        })
        return zoos;
    } catch (error) {
        console.log(error);
        return null;
    }
}



export async function getZoo(id) {
    try {
        const zoo = await prisma.zoo.findUnique({
            where: { id: Number(id) },
            include: { animales: true }
        })

        return zoo;
    } catch (error) {
        console.log(error);
        return null;
    }
}