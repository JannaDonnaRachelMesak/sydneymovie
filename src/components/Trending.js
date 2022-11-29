import { Card, Container, Row, Col, Image } from "react-bootstrap"
import johnImage from "../assets/images/trending/john.png"
import desciplemeImage from "../assets/images/trending/descipleme.jpg"
import godzillaImage from "../assets/images/trending/Godzilla.jpg"
import frozenImage from "../assets/images/trending/frosen.jpg"
import braveImage from "../assets/images/trending/brave.jpg"
import baymaxImage from "../assets/images/trending/baymax.jpg"

const Trending =() => {
    return (
        <div>
            <Container>
                <br/> 
                <h1 className="text-white">TRENDING MOVIES </h1>
                <br/>

                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={johnImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">John Wick</Card.Title>
                        <Card.Text className="text-left">
                        Seri ketiga "John Wick" ini akan mengisahkan kelanjutan nasib si pembunuh bayaran usai menghabisi nyawa anggota High Table dalam The Continental. 
                        Ia sendiri diburu dan hidupnya dihargai sebesar USD 14 juta (sekitar Rp 201 miliar). 
                         </Card.Text>
                          <Card.Text className="text-left">Last updated 60 mins ago
                         </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={desciplemeImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Despicable Me</Card.Title>
                        <Card.Text className="text-left">
                        Cerita dimulai ketika penjahat super yang reputasinya bisa dibilang telah mendunia, Gru (Steve Carell) terkejut dengan kabar pencurian Piramida Giza
                        Gru bersama asistennya, Dr Nefario dan sekumpulan Minions sudah berhasil mencuri Piramida Giza dan bulan.
                         </Card.Text>
                          <Card.Text className="text-left">Last updated 70 mins ago
                         </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={godzillaImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Godzilla Resurgence</Card.Title>
                        <Card.Text className="text-left">
                        Film ini akan menceritakan tentang negara Jepang yang jatuh ke dalam sebuah kekacauan yang besar, akibat munculnya seekor monster raksasa. Kecelakaan diketahui terjadi di Tokyo Bay Aqua Line, 
                        yang menyebabkan untuk membuat kabinet darurat 
                         </Card.Text>
                          <Card.Text className="text-left">Last updated 5 mins ago
                         </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={frozenImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Frozen</Card.Title>
                        <Card.Text className="text-left">
                        Demi mencari kakaknya, Elsa, Princess Anna bersama Kristoff dan Olaf si manusia salju, memulai perjalanan berbahaya menembus badai salju ganas - agar kerajaannya terhindar dari musim dingin abadi.
                         </Card.Text>
                          <Card.Text className="text-left">Last updated 60 mins ago
                         </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={braveImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Brave</Card.Title>
                        <Card.Text className="text-left">
                        Film ini menceritakan seorang putri kerajaan Skotlandia bernama Merida yang mendapatkan hadiah ulang tahun berupa busur hingga ia 
                        menjadi seorang pemanah yang sangat terampil di kerajaan Skotlandia. Ayahnya bernama Raja Fergus dan ibunya Ratu Elinor.
                         </Card.Text>
                          <Card.Text className="text-left">Last updated 5 mins ago
                         </Card.Text>
                         </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Image src={baymaxImage} alt="Doctor Movies" />
                        <Card.Title className="text-center">Baymax</Card.Title>
                        <Card.Text className="text-left">
                        Hiro, bocah genius, harus melewati tragedi kematian kakaknya. Kini, bersama teman-temannya yang ia ubah menjadi suprhero berteknologi tinggi, dan Baymax, robot tiup, ia harus menyelamatkan kota.
                         </Card.Text>
                          <Card.Text className="text-left">Last updated 70 mins ago
                         </Card.Text>
                         </Card>
                    </Col>
                    
                </Row>
            </Container>
             
        </div>
    )
}

export default Trending