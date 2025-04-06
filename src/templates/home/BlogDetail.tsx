import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, CircularProgress } from '@mui/material';
import getBlogFromFirebase, { BlogItem } from '../../services/BlogService';
import Base64Image from '../../atoms/Base64Image';
import DOMPurify from 'dompurify';
import './blogDetail.scss';

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [BlogItem, setBlogItem] = useState<BlogItem | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogItem = async () => {
            try {
                setLoading(true);
                const BlogData = await getBlogFromFirebase(1000); // Adjust limit if needed
                const item = BlogData.find((Blog) => Blog.id === id);

                if (item) {
                    setBlogItem(item);
                    setError(null); // Clear any previous error
                } else {
                    setError("Blog item not found");
                }
            } catch (error) {
                console.error("Error fetching Blog item:", error);
                setError("Failed to load Blog item. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogItem();
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

    if (!BlogItem) {
        return (
            <Container>
                <p>Blog item not found.</p>
            </Container>
        );
    }

    const sanitizedDescription = DOMPurify.sanitize(BlogItem.description || '');

    return (
        <div className="Blog-detail-page">
            <Container>
                <div className="Blog-detail-header">
                </div>
                {BlogItem.thumbnailImage && (
                    <div className="Blog-detail-image">
                        <Base64Image src={BlogItem.thumbnailImage} alt={BlogItem.title} />
                    </div>
                    
                )}
                <h1>{BlogItem.heading}</h1>

                <div className="Blog-detail-content">
                    <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetail;