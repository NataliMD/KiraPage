import './Dato.css'

export const Dato = ({mascota}) =>{

    /*destructuracion*/
    const {nombre, apellido, fnac, foto, vacunas} = mascota


    const calcularEdad = (fecha) => {
        const hoy = new Date()
        let edad = hoy.getFullYear() -fecha.getFullYear()
        const mes = hoy.getMonth() - fecha.getMonth()
        if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())){
            edad--
        }
        return edad
    }

    const edad = calcularEdad(new Date(fnac))


    return (
        <>
            <h2>{nombre} {apellido}</h2>
            <div className='container'>
                <div className="imagenes">
                    <img src={foto} alt="imagen de kira" />
                </div>
                <div className='info'>
                    <p><b>Nombre: </b>{nombre}</p>
                    <p><b>Apellido: </b>{apellido}</p>
                    <p><b>Edad:</b> {edad} años</p>
                    <p><b>Vacunas:</b></p>
                    <ul>
                        {vacunas.map((vac,i)=>(
                            <li key={i}>{vac.nom} ({vac.fecha})</li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </>
    )
}