import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const TestimoniosContent = ({ embedId }) => {
  return (
    <Container >
      <h1 className='pt-3 pb-4 text-center'>Nuestra historia y tesmimonisos</h1>
      <Row >
        <Col>
          <h2 className='pb-3 text-center'>Impresionante</h2>
          <p>
            Jennifer classes are an excellent and easy going way to practice your speaking English
            skills every week. One of the aspects that I valued the most of her classes, is that she
            promotes a safe space so you can feel comfortable expressing and practicing all the things
            you feel are needed to work on. An extra but appreciated other thing is that you also have
            the chance to meet and interact with very nice people, with who you share not only the
            interest of growing in this language but algo experiment the richness in the interaction with
            other perspectives in all the different and interest topics that we touch together every class.
          </p>
          <em>
            <b>María José Escalona Gutiérrez.</b>
          </em>
        </Col>
        <Col>
          <h2 className='pb-3 text-center'>Recomendado</h2>
          <p>
          Hi there 👋🏼, this is Yanci ✌🏼!Before I started classes with Jennifer, I was lacking self confidence to speak and practice English with anyone, loosing any chance to improve at all! Hopefully, I found out about  these speaking classes with a Canadian native speaker, which sounded tremendously challenging for myself but took the opportunity anyway! Thanks God ! I can say that I found not only a wonderful teacher and human being but also great  classmates that wanted to improve, love and learn everything about the language as well! I’ve been taught that making mistakes and keep trying are wonderful tools to succeed! Nowadays, I can say my fluency and communication skills are improving! I’ve learned about topics that wouldn’t picture myself chatting about! It completely has fulfilled my expectations in this journey to be a fluent English speaker!
          </p>
          <em>
            <b>Yanci Quirós Hernández</b>
          </em>
        </Col>
      </Row>
      <Row className='p-5 text-center '>
        <Col className="video-responsive">
          <h2>VIDEO GOES HERE</h2>
          <iframe
            width="600"
            height="400"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Col>
      </Row>

      <Row className='pb-4'>
        <Col>
          <h2 className='pb-3 text-center'>Impresionante</h2>
          <p>
            Jennifer classes are an excellent and easy going way to practice your speaking English
            skills every week. One of the aspects that I valued the most of her classes, is that she
            promotes a safe space so you can feel comfortable expressing and practicing all the things
            you feel are needed to work on. An extra but appreciated other thing is that you also have
            the chance to meet and interact with very nice people, with who you share not only the
            interest of growing in this language but algo experiment the richness in the interaction with
            other perspectives in all the different and interest topics that we touch together every class.
          </p>
          <em>
            <b>Sabrosillo Loasiga</b>
          </em>
        </Col>

        <Col>
          <h2 className='pb-3 text-center'>Recomendado</h2>
          <p>
            Jennifer classes are an excellent and easy going way to practice your speaking English
            skills every week. One of the aspects that I valued the most of her classes, is that she
            promotes a safe space so you can feel comfortable expressing and practicing all the things
            you feel are needed to work on. An extra but appreciated other thing is that you also have
          </p>
          <em>
            <b>Rosa de la concepcion</b>
          </em>
        </Col>
      </Row>
    </Container>
  )
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
}
