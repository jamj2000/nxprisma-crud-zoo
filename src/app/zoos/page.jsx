import Link from 'next/link'
import Image from 'next/image'
import Zoos from '@/components/Zoos'
import { Suspense } from 'react'


export default async function Home() {
    return (
        <div>
            <Link className='enlace' href="/zoos/new">
                <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                Nuevo zoológico
            </Link>
            <Suspense fallback={
                <>
                    <div className='esqueleto-zoo' />
                    <div className='esqueleto-zoo' />
                    <div className='esqueleto-zoo' />
                </>
            }>
                <Zoos />
            </Suspense>
           
        </div>
    )
}
