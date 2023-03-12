
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const TeachersContent = () => {
  return (

    <Container >
      <h1 className='pt-3 pb-4 text-center'>Los maestros mas extraordinarios</h1>
      <Row className='pt-3 pb-4'>
        <Col sm={8}>
          <h2 className='pb-3 text-center'>Founder</h2>
          <p>
            Como propietaria de este campus, la prioridad desde sus inicios fue la enseninza conciente a partir de los maestros y hacia los estudiantes. Por esta razon, la comprension activa y conciente de todo el equipo de native teacher ha procuparado dar todo el conocimiento que poseemos.
          </p>
          <p>
            ponemos a la orden todos nuestros medios para que nuestros estudiantes alcancen todas sus metas
          </p>
          <p>
            Mi nombre es Teacher Jennifer y les deseo lo mejor en este viaje!
          </p>
        </Col>
        <Col sm={4}>
          <img src="loginimage.jpeg" alt="" width="200px"/>
          <p>
            <em>Teacher Jennifer</em>        
          </p>
        </Col>
      </Row>

      <Row  className='pt-3 pb-4'>
        <Col sm={8}>
          <h2 className='pb-3 text-center'>Teacher</h2>
          <p>
            Mi pasion es enseniar. Cuando se trata de nuevos retos nunca estoy listo pero siempre estoy disponible para enfrentarlos.
          </p>
          <p>
            El reto de nuevos idiomas, el reto a lo nuevo, el reto al etc etc. 
          </p>
          <p>
            Soy Teacher Antonio y mi consejo es: Nunca le tengas miedo a lo nuevo. Enfrenta tus miedos! recuerda que solamente cayendo aprendemos a caminar, correr, etc...
          </p>
        </Col>
        <Col sm={4}>
          <img src="loginimage.jpeg" alt="" width="200px"/>
          <p>
            <em>Teacher Antonio</em>        
          </p>
        </Col>
      </Row>

      <Row  className='pt-3 pb-4'>
        <Col sm={8}>
          <h2 className='pb-3 text-center'>Teacher</h2>
          <p>
            Soy una persona aventurera. Como un buen boy scout siempre estoy listo. Hay retos en la vida que me dan miedo como fue el de empezar a enseniar. Me aterraba el hecho de hablar en publico pero gracias a que decide tomar el primer paso, ahora soy un feliz Teacher de My Native Teacher.
          </p>
          <p>
            Les doy la bienvenida a esta excelente academia. Aprenderan todo lo que necesitan saber sobre vocabulario, gramatica, frases, dialogos cortos como tambien elaborados entre muchos otros trucos para sentirse comodo al hablar.
          </p>
          <p>
            Soy Teacher Patric y esto es lo que les aconsejo para que puedan aprender mejor: Nunca se desanimen. Sean constantes con sus aprendizaje y esto les dara frutos....
          </p>
        </Col>
        <Col sm={4}>
          <img src="loginimage.jpeg" alt="" width="200px"/>
          <p>
            <em>Teacher Patric</em>        
          </p>
        </Col>
      </Row>
    </Container>

  )
}
