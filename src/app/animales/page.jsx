import Link from 'next/link'
import Image from 'next/image'
import Animales from '@/components/Animales'
import { Suspense } from 'react'


export default async function Home() {
    return (
        <div>
            <Link className='enlace' href="/animales/new">
                <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                Nuevo animal
            </Link>
            <Suspense fallback={
                <>
                    <div className='esqueleto-animal' />
                    <div className='esqueleto-animal' />
                    <div className='esqueleto-animal' />
                </>
            }>
                <Animales />
            </Suspense>           
        </div>
    )
}
