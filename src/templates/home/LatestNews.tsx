import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { Container, useMediaQuery, CircularProgress } from '@mui/material';
import AtomLink from '../../atoms/link/link';
import AtomButton from '../../atoms/button/button';
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant';
import './home.scss';
import { DialogArrow, ChevronRight } from '../../helpers/constant/imageUrl';
import AtomCarousel from '../../atoms/carousel/carousel';
import getNewsFromFirebase, { NewsItem } from '../../services/newsService';
import Base64Image from '../../atoms/Base64Image';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

interface LatestNewsProps {
    limit?: number;
}

const LatestNews: React.FC<LatestNewsProps> = ({ limit = 6 }) => {
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`);
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const newsData = await getNewsFromFirebase(limit);
                setNewsItems(newsData);
                setError(null);
            } catch (error) {
                console.error("Error fetching news:", error);
                setError("Failed to load news items. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [limit]);

    const renderNewsItem = (item: NewsItem) => {
        const sanitizedDescription = DOMPurify.sanitize(item.description || '');

        const shortDescription = sanitizedDescription.length > 100
            ? `${sanitizedDescription.substring(0, 100)}...`
            : sanitizedDescription;

        return (
            <div key={item.id} className="news-item">
                {item.thumbnailImage && (
                    <div className="image-container">
                        <Base64Image
                            src={item.thumbnailImage}
                            alt={item.title}
                            className="thumb"
                        />
                    </div>
                )}
                <div className='pl-4 pr-4'>
                    <div className='title'>
                        NEWS & EVENTS
                    </div>
                    <div className='white-section'>
                        <h5>{item.heading}</h5>
                        <p dangerouslySetInnerHTML={{ __html: shortDescription }}></p>
                        <Link
                            to={`/news/${item.id}`}
                            className='read-article'
                        >
                            Read Article
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='latest-news'>
            <Container className='container'>
                <h4>Latest News</h4>

                {loading ? (
                    <div className="loading-container">
                        <CircularProgress />
                    </div>
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : newsItems.length > 0 ? (
                    <AtomCarousel
                        dots={true}
                        speed={3000}
                        infinite={newsItems.length > (breakPoint ? 3 : 1)}
                        autoplay={newsItems.length > (breakPoint ? 3 : 1)}
                        autoplaySpeed={4000}
                        pauseOnHover={true}
                        slidesToShow={breakPoint ? 3 : 1}
                        slidesToScroll={breakPoint ? 3 : 1}
                    >
                        {newsItems.map(renderNewsItem)}
                    </AtomCarousel>
                ) : (
                    <p>No news items available.</p>
                )}

                <Grid container justifyContent={"center"} className="mt-12">
                    <AtomButton
                        variant={'outlined'}
                        size={'large'}
                        endIcon={<img src={ChevronRight} alt='' />}
                    >
                        view more
                    </AtomButton>
                </Grid>
            </Container>
        </div>
    );
};

export default LatestNews;