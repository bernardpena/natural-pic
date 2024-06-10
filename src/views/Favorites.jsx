import Gallery from "../components/Gallery";
import { Container, Row } from 'react-bootstrap'

export default function Favorites() {

  return (
    <Container>
      <h1 className="py-4 titulo">Fotos favoritas</h1>
      <Row xs={1} md={2} lg={4} className="gallery grid-columns-4 g-3 mb-3">
        <Gallery filtered={'favoritos'} />
      </Row>
    </Container>
  );
}