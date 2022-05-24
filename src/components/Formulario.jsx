import React, { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente }) => {
      const [nombre, setNombre] = useState('')
      const [propietario, setPropietario] = useState('')
      const [email, setEmail] = useState('')
      const [fecha, setFecha] = useState('')
      const [sintomas, setSintomas] = useState('')

      const [error, setError] = useState(false)


       useEffect(()=> {
         console.log(paciente)
       },[paciente])

      const generarId =()=> {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha
      }

      const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
          console.log('Hay al menos un campo vacio')

          setError(true)  
          return;
        }
        setError(false)
        // Construir Objeto de pacientes
        const objetoPaciente = {
          nombre, 
          propietario, 
          email, 
          fecha, 
          sintomas,
          id: generarId()
        }

        setPacientes([...pacientes, objetoPaciente])

        //Reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
      }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className='font-black text-3xl text-center'>Seguimientos Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10
        ' >
          Añadir Pacientes y {''}
          <span className='text-indigo-600 font-bold texr-lg'>Administralos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-xl rouended-lg py-5 px-5 mb-10' action="">
          
          { error && <Error><p>Todos los campos son obligatorios</p></Error> }

          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="mascota">Nombre Mascota</label>
            <input id="mascota" className='boreder-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Nombre de la Mascota' 
            value={nombre} 
            onChange={(e) => {
              setNombre(e.target.value)
            }}
          />
          </div>
          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre Propietario</label>
            <input id="propietario" className='boreder-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" placeholder='Nombre del Propietario' 
            value={propietario} 
            onChange={(e) => {
              setPropietario(e.target.value)
            }}/>
          </div>
          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
            <input id="email" className='boreder-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" placeholder='Email contacto Propietario' 
            value={email} 
            onChange={(e) => {
              setEmail(e.target.value)
            }}/>
          </div>
          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Alta</label>
            <input id="alta" className='boreder-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" 
            value={fecha} 
            onChange={(e) => {
              setFecha(e.target.value)
            }}/>
          </div>
          <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Sintomas</label>
            <textarea className='boreder-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' name="" id="sintomas"
            value={sintomas} 
            onChange={(e) => {
              setSintomas(e.target.value)
            }}/>
          </div>
          <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' value="Agregar Paciente"/>
        </form>

    </div>
  )
}

export default Formulario