import { Contacto } from './component/Contacto/Contacto'
import { Dato } from './component/Datos/Dato'
import imgKira1 from './assets/imgKira/Kira1.jpg'
import './App.css'

function App() {

  const vacKira = [
    {nom:'Antirrábica',fecha:'2025-01-17'},{nom:'Quíntuple', fecha:'2025-01-17'}
  ]
  
  const mascota = {
    nombre: 'Kira',
    apellido: 'Jurado',
    fnac:'2020-01-01',
    foto: imgKira1,
    vacunas: vacKira,
  }

  return (
    <>
      <Dato mascota= {mascota}/>
      <div className='contactos'>
        <Contacto name='Mamá Natalí' number='3876195075'/>
        <Contacto name='Papá Marcelo' number='3875992360'/>
      </div>
      
    </>
  )
}

export default App
