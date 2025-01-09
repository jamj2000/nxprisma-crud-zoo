import { PrismaClient } from '@prisma/client'

// DECLARACIÓN DE DATOS
const zoos = [
    {
        nombre: 'Zoológico de New York',
        pais: 'Estados Unidos',
        hectareas: 110.22,
    },
    {
        nombre: 'Zoológico de Amsterdand',
        pais: 'Países bajos',
        hectareas: 20.12,
    },
    {
        nombre: 'Zoológico de Barcelona',
        pais: 'España',
        hectareas: 60.05,
    },
];

const animales = [
    {
        nombre: 'Copito de nieve',
        especie: 'Gorila de montaña',
    },
    {
        nombre: 'Cesar',
        especie: 'León africano',
    },
    {
        nombre: 'Ruperta',
        especie: 'Avestruz',
    },
    {
        nombre: 'Golfredo',
        especie: 'Hipopótamo',
    },

];


const prisma = new PrismaClient();

const load = async () => {
    try {
        // await prisma.$queryRaw`ALTER SEQUENCE zoos_id_seq RESTART WITH 1`;
        // console.log('reset zoo sequence to 1');
        await prisma.zoo.deleteMany({});
        console.log('Borrados los registros de la tabla zoos');

        await prisma.zoo.createMany({
            data: zoos,
        });
        console.log('Añadidos datos a tabla zoos');

        await prisma.animal.deleteMany({});
        console.log('Borrados los registros de la tabla animales');

        await prisma.animal.createMany({
            data: animales,
        });
        console.log('Añadidos datos a tabla animales');

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load()