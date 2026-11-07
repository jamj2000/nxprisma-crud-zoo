'use server'
import prisma from '@/lib/prisma'
import { cacheTag } from 'next/cache'




export async function getZoos() {
    'use cache'
    cacheTag('zoos')

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
    'use cache'
    cacheTag('zoos', 'zoos:id-nombre')

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
    'use cache'
    cacheTag('zoos', `zoo:${id}`)

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