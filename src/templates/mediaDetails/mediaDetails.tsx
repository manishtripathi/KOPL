import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid2'
import { useParams, Link } from 'react-router-dom';
import { Container, useMediaQuery, CircularProgress } from '@mui/material'
import { useNavigate } from "react-router-dom";
import AtomLink from '../../atoms/link/link'
import AtomButton from '../../atoms/button'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import getNewsFromFirebase, { NewsItem } from '../../services/newsService';
import Base64Image from '../../atoms/Base64Image';
import DOMPurify from 'dompurify';
import AtomCarousel from '../../atoms/carousel/carousel'
import { Banner, thumb1, thumb2, Event1, Event2, Event3, DialogArrow, WavePattern } from '../../helpers/constant/imageUrl'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import './mediaDetails.scss'

const MediaDetailsTemplate = () => {

    const { id } = useParams<{ id: string }>();
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
     const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0)
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`)
    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setCurrentTab(newValue)
    }
    // useEffect(() => {
    //     console.log('Route param ID:', id);
    //     const fetchNewsItem = async () => {
    //         try {
    //             setLoading(true);
    //             const newsData = await getNewsFromFirebase(1000);
    //             const item = newsData.find((news) => news.id === id);

    //             if (item) {
    //                 setNewsItem(item);
    //                 setError(null);
    //             } else {
    //                 setError("News item not found");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching news item:", error);
    //             setError("Failed to load news item. Please try again later.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchNewsItem();
    // }, [id]);

    useEffect(() => {
    const fetchNewsItem = async () => {
        try {
            setLoading(true);
            const newsData = await getNewsFromFirebase(1000);
            const item = newsData.find((news) => news.id === id);

            if (item) {
                setNewsItem(item);
                // Exclude current item for 'More Insights'
                const relatedItems = newsData.filter(news => news.id !== id);
                setNewsItems(relatedItems);
                setError(null);
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

    const renderNewsItem = (item: NewsItem) => {
        const sanitizedDescription = DOMPurify.sanitize(item.description || "");
        const shortDescription = sanitizedDescription.length > 100 ? `${sanitizedDescription.substring(0, 100)}...` : sanitizedDescription;

        return (
            <div key={item.id} className='new-item'>
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
                        {item.title}
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
        )
    }


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
        <div className="media-details">
            <Container className='container'>
                <Breadcrumbs aria-label="breadcrumb">
                    <AtomButton>
                        Media
                    </AtomButton>
                    <span>Fostering Strategic Partnerships in Egypt 16th - 18th December 2024</span>
                </Breadcrumbs>
                <h1>{newsItem?.title}</h1>
                <h2>{newsItem?.heading}</h2>

                <img src={newsItem?.thumbnailImage} alt={newsItem.title} className='banner' />
                <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />


                <p className='mt-10 mb-10'>
                    <strong>
                        For inquiries and partnership opportunities, contact us at&nbsp;
                        <AtomLink
                            href="mailto:kop@kumarorganic.net"
                        >
                            kop@kumarorganic.net
                        </AtomLink>
                    </strong>
                </p>
                {/* <Grid container spacing={{ xs: 5, md: 5 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <img src={thumb1} alt='' className='w-100' />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <img src={thumb2} alt='' className='w-100' />
                    </Grid>
                </Grid>                 */}
            </Container>
            <div className='more-insights'>
                <img src={WavePattern} alt='' className='wave-pattern' />
                <Container className='container'>
                  
                    <h4>More Insights</h4>
                    {newsItems.length > 0 ? (
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
                   
                    {/* <AtomCarousel
                        dots={true}
                        speed={3000}
                        infinite={newsItems.length > (breakPoint ? 3 : 1)}
                        autoplay={newsItems.length > (breakPoint ? 3 : 1)}
                        autoplaySpeed={4000}
                        pauseOnHover={true}
                        slidesToShow={breakPoint ? 3 : 1}
                        slidesToScroll={breakPoint ? 3 : 1}
                    >
                        <div>

                      
                            <img src={Event1} alt='' className='thumb' />
                            
                            <div className='pl-4 pr-4'>
                                <div className='title'>
                                    NEWS & EVENTS
                                </div>
                                <div className='white-section'>
                                    <h5>In-Cosmetics Asia 2024 Wrap-Up: Meaningful Connections and Positive Feedback</h5>
                                    <p>We are pleased to share the success of our participation at In-Cosmetics Asia 2024, held from November 5-7 at BITEC, Bangkok. Over these three days, we connected with many industry leaders, brand representatives, and formulators, receiving a warm and positive response to our latest ingredient innovations.</p>
                                    <AtomLink 
                                        href=""
                                        className='read-article'
                                        startIcon={<img src={DialogArrow} alt='' />}
                                    >
                                        Read Article
                                    </AtomLink>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <img src={Event2} alt='' className='thumb' />
                            <div className='pl-4 pr-4'>
                                <div className='title'>
                                    NEWS & EVENTS
                                </div>
                                <div className='white-section'>
                                    <h5>Kumar Organic Products Shines at In-Cosmetics Latin America 2024: A Milestone in Innovation and Partnerships</h5>
                                    <p>We are thrilled to announce the successful participation of Kumar Organic Products Ltd. at In-Cosmetics Latin America 2024, held in São Paulo from September 18-19. The event, a premier platform for personal care ingredients, offered us an opportunity to showcase our innovative solutions, strengthen partnerships, and engage with industry leaders.</p>
                                    <AtomLink 
                                        href=""
                                        className='read-article'
                                        startIcon={<img src={DialogArrow} alt='' />}
                                    >
                                        Read Article
                                    </AtomLink>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <img src={Event3} alt='' className='thumb' />
                            <div className='pl-4 pr-4'>
                                <div className='title'>
                                    NEWS & EVENTS
                                </div>
                                <div className='white-section'>
                                    <h5>Kopdil™ | Minoxidil for Cosmetic Applications</h5>
                                    <p>Thinning hair doesn't need to be your only option…Kumar Organic Product Limited's Kopdil™ (Minoxidil, USP) is a leading product in the fight against hair loss. Kopdil is very effective as an active ingredient in hair care regimens adopted at the earlier signs of hair loss. As a vasodilator, Minoxidil helps to expand the blood vessels in the scalp, when applied topically, bringing more nutrients to the hair follicle and preventing miniaturization of these same follicles. This process is dependent on the ability of Kopdil to facilitate ion transmission through potassium channels. The application of Minoxidil (2,4-Diamino-6-piperidinopyrimidine-3-oxide) is particularly effective at reversing hair loss, combatting Androgenic Alopecia, in the</p>
                                    <AtomLink 
                                        href=""
                                        className='read-article'
                                        startIcon={<img src={DialogArrow} alt='' />}
                                    >
                                        Read Article
                                    </AtomLink>
                                </div>
                            </div>                            
                        </div>                    
                    </AtomCarousel> */}
                   
                </Container>
            </div>
        </div>
    )
}

export default MediaDetailsTemplate