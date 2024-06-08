import Link from 'next/link'

export default async function Home() {

  return (
    <section>
      <h1>Página de inicio</h1>
      <hr />
      <h3><Link href={"/zoos"}>Listado de zoológicos</Link></h3>      
      <h3><Link href={"/animales"}>Listado de animales</Link></h3>     
    </section>
  )
}
