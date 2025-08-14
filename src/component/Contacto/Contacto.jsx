import { FaWhatsapp } from "react-icons/fa"
import './Contacto.css'

export const Contacto = ({name, number}) =>{
    /*para concatenar texto con variable usar `` se son comillas inversas o algo asi altgr+] y se concatena con $*/
    const enlaceWpp = `https://wa.me/+54${number}`
    return (
            <a href={enlaceWpp} target="_blank" 
            rel="noopener noreferrer"
            className="boton">
                <FaWhatsapp className="wpp" aria-hidden='true'/>
                Contactar con {name}
            </a>
    )
}