import { Card, Container, Row, Col, Image } from "react-bootstrap"
import venomImage from "../assets/images/superhero/venom.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import flashImage from "../assets/images/superhero/flash.jpg"
import ragnarokImage from "../assets/images/superhero/ragnarok.jpg"
import transformerImage from "../assets/images/superhero/transformer.jpg"
import spiderImage from "../assets/images/superhero/spider.jpg"

const SuperHero =() => {
    return (
        <div>
            <Container>
                <br/> 
                <h1 className="text-white">SUPERHERO MOVIES </h1>
                <br/>

                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={venomImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Venom: Let There Be Carnage</Card.Title>
                        <Card.Text className="text-left">
                        Venom kembali beraksi ketika seorang pembunuh berantai, Cletus Kasady bertransformasi menjadi sosok jahat Carnage. Apakah yang terjadi selanjutnya?
                        </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={batmanImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">The Batman</Card.Title>
                        <Card.Text className="text-left">
                        Ketika Riddler, seorang pembunuh berantai yang sadis mulai membunuh tokoh-tokoh politik penting di Gotham, Batman dituntut untuk menyelidiki korupsi tersembunyi di kota itu dan mempertanyakan keterlibatan keluarganya.
                        </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={flashImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">The Flash</Card.Title>
                        <Card.Text className="text-left">
                        Barry Allen/Flash (Grant Gustin) mungkin tidak pernah mengira akan kehilangan ibu saat usianya masih sangat belia. Sang ibu terbunuh oleh cahaya dan kilat misterius. Seiring waktu, secara rahasia dia mencari tahu dan memecahkan misteri tersebut sekaligus membuktikan ayahnya tidak bersalah. 
                        </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={ragnarokImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Ragnarok N Roll</Card.Title>
                        <Card.Text className="text-left">
                        Film ini Menceritakan tentang penduduk Edda yang mempunyai kehidupan yang tidak seperti biasa, dimana fenomena alam terjadi dengan tidak semestinya seperti kutub yang mencair, musim dingin yang hangat, dan hujan deras.
                        </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={transformerImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Transformers</Card.Title>
                        <Card.Text className="text-left">
                        Mengisahkan sejarah Autobots yang berjuang melindungi Bumi dari serangan jahat Decepticons dengan bantuan seorang remaja bernama Sam Witwicky (Shia LaBeouf). Pertemuan Sam Witwicky dengan Bumble Bee ini sendiri terjadi secara tidak sengaja saat ia membeli mobil pertamanya.
                        </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={spiderImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Spider-Man: Far from Home</Card.Title>
                        <Card.Text className="text-left">
                        Peter Parker (Tom Holland) tengah mengunjungi Eropa untuk liburan panjang bersama temaan-temanya. Sayangnya , 
                        Parker tidak bisa dengan tenang menikmati liburannya, karena Nick Fury datang secara tiba-tiba di kamar hotelnya. 
                        </Card.Text>
                         </Card>
                    </Col>
                    
                </Row>
            </Container>
             
        </div>
    )
}

export default SuperHero