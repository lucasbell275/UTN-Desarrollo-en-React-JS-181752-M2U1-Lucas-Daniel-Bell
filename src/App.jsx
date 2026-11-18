import React from 'react'
import Tarjeta from './components/tarjeta/Tarjeta'
export default function App() {
  return (
    <div className='container-tarjetas'>
      <Tarjeta nombre={'Pedro'} profesion={'Albañil'} imagen={'https://cdni.iconscout.com/illustration/premium/thumb/trabajador-de-la-construccion-construyendo-una-pared-de-ladrillos-illustration-svg-download-png-12194177.png'} descripcion={'Mejor albañil profesional de todo Lugano, y los mejores asados de la obra '}/>
      <Tarjeta nombre={'Pablo'} profesion={'Pintor'} imagen={'https://cdnai.iconscout.com/ai-image/premium/thumb/ai-pintor-de-casa-con-un-rodillo-naranja-3d-illustration-png-download-jpg-15609956.png'} descripcion={'Pintor a domicilio y pintor autonomo, grafittis, murales, tatuajes, etc.'}/>
      <Tarjeta nombre={'Emiliano'} profesion={'Programador Front-End'} imagen={'https://www.italenters.com/wp-content/uploads/2025/06/programador_vuejs.png'} descripcion={'Programador Front-End a domicilio, online, presencial y en linea. Todo tipo de trabajos, desde y hasta paginas web.'}/>
      <Tarjeta nombre={'Ezequiel'} profesion={'Bicicletero'} imagen={'https://marketplace.canva.com/MnCSM/MAHXbhMnCSM/1/tl/canva-ilustraci%C3%B3n-de-dibujos-animados-de-un-ni%C3%B1o-montando-en-bicicleta.-MAHXbhMnCSM.png'} descripcion={'Todo tipo de bicicletas, mountain bike, playeras, etc. Articulos y accesorios para tu bicicleta.'}/>
    </div>
  )
}