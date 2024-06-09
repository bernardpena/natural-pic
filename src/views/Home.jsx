import Gallery from "../components/Gallery";
import { Container, Row } from "react-bootstrap"

export default function Home() {
  return (
    <Container>
      <h1 className="my-4 titulo">Fotos de la Naturaleza</h1>
      <Row xs={1} md={2} lg={4} className="g-3 mb-3">
        <Gallery filtered={'home'} />
      </Row>
    </Container>
  );
}

