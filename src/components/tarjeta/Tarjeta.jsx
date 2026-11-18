import './Tarjeta.css'
function Tarjeta({
    nombre, profesion, imagen, descripcion
}){
    return (
    <div className='tarjeta'>
        <h2 className='texto'>{nombre}</h2>
        <h3 className='texto'>{profesion}</h3>
        <img className='imagen' src={imagen} alt="Imagen de la card" />
        <p className='texto'>{descripcion}</p>
    </div>
)
}


export default Tarjeta