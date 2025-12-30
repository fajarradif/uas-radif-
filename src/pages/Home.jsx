import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../services/NewsServices";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/App.css";

function Home() {
    const [newslist, setNewslist] = useState([]);

    useEffect(() => {
        async function getNews() {
            const news = await fetchNews(); //ambil berita umum
            setNewslist(news);
        }
        getNews();
    }, []);
    useEffect(() => {
    async function getNews() {
        const news = await fetchNews();
        console.log("Berita yangg diterima:", news); //debug
        setNewslist(news);
    }
    getNews();
}, []);

    return (
        <Container fluid className="news-container mt-4">
            <h1 className="text-center fw-bold mb-4">Berita Terkini Indonesia</h1>
            <Row className="g-4">
            {newslist
                .filter(news => news.title && news.description && news.urlToImage)
                .map((news, index)=> (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <NewsCard
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
            />
        </Col>
    ))}
    
            </Row>
        </Container>
        );
}

export default Home;