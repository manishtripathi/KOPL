import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, CircularProgress } from '@mui/material';
import getNewsFromFirebase, { NewsItem } from '../../services/newsService';
import Base64Image from '../../atoms/Base64Image';
import DOMPurify from 'dompurify';
import './newsDetail.scss';

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNewsItem = async () => {
            try {
                setLoading(true);
                const newsData = await getNewsFromFirebase(1000); // Adjust limit if needed
                const item = newsData.find((news) => news.id === id);

                if (item) {
                    setNewsItem(item);
                    setError(null); // Clear any previous error
                } else {
                    setError("News item not found");
                }
            } catch (error) {
                console.error("Error fetching news item:", error);
                setError("Failed to load news item. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchNewsItem();
    }, [id]);

    if (loading) {
        return (
            <Container>
                <div className="loading-container">
                    <CircularProgress />
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <div className="error-message">{error}</div>
            </Container>
        );
    }

    if (!newsItem) {
        return (
            <Container>
                <p>News item not found.</p>
            </Container>
        );
    }

    const sanitizedDescription = DOMPurify.sanitize(newsItem.description || '');

    return (
        <div className="news-detail-page">
            <Container>
                <div className="news-detail-header">
                </div>
                {newsItem.thumbnailImage && (
                    <div className="news-detail-image">
                        <Base64Image src={newsItem.thumbnailImage} alt={newsItem.title} />
                    </div>
                    
                )}
                <h1>{newsItem.heading}</h1>

                <div className="news-detail-content">
                    <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
                </div>
                <div className="back-link">
                    <Link to="/">Back to News</Link>
                </div>
            </Container>
        </div>
    );
};

export default NewsDetail;