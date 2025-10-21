export default function Home() {
  return (
    <section>
      <h1 className='text-xl'>Página de inicio</h1>
      <hr />
      <p>
        Esto es una aplicación de demostración que realiza las 4 operaciones CRUD en una base de datos.
      </p>
      <ul className='list-disc ml-4'>
        <li>C: CREATE</li>
        <li>R: READ</li>
        <li>U: UPDATE</li>
        <li>D: DELETE</li>
      </ul>
    </section>
  )
}
