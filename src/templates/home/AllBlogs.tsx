import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Container, CircularProgress, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import getBlogFromFirebase, { BlogItem } from '../../services/BlogService';
import DOMPurify from "dompurify";

const AllBlog: React.FC = () => {
    const [BlogItems, setBlogItems] = useState<BlogItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAllBlog = async () => {
            try {
                setLoading(true);
                const allBlogData = await getBlogFromFirebase(100);
                setBlogItems(allBlogData);
                setError(null);
            } catch (err) {
                console.error("Error fetching all Blog:", err);
                setError("Failed to load Blog. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllBlog();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography variant="h4" align="center" color="primary" fontWeight="bold" gutterBottom>
                Latest Blog
            </Typography>

            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
                    <CircularProgress size={50} />
                </Box>
            ) : error ? (
                <Typography variant="h6" color="error" align="center">
                    {error}
                </Typography>
            ) : (
                <Grid container spacing={4}>
                    {BlogItems.map((item) => {
                        const sanitizedDescription = DOMPurify.sanitize(item.description || "");
                        const shortDescription = sanitizedDescription.length > 120
                            ? `${sanitizedDescription.substring(0, 120)}...`
                            : sanitizedDescription;

                        return (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        borderRadius: 2,
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        transition: "transform 0.2s, box-shadow 0.2s",
                                        "&:hover": {
                                            transform: "scale(1.03)",
                                            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
                                        },
                                    }}
                                >
                                    {item.thumbnailImage && (
                                        <CardMedia
                                            component="img"
                                            image={item.thumbnailImage}
                                            alt={item.heading}
                                            sx={{
                                                height: 180,
                                                objectFit: "cover",
                                                borderTopLeftRadius: 8,
                                                borderTopRightRadius: 8,
                                            }}
                                        />
                                    )}
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {item.heading}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <div dangerouslySetInnerHTML={{ __html: shortDescription }} />
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ p: 2, textAlign: "center" }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            component={Link}
                                            to={`/Blog/${item.id}`}
                                            sx={{
                                                textTransform: "none",
                                                fontWeight: "bold",
                                                borderRadius: 2,
                                                "&:hover": {
                                                    backgroundColor: "#1565c0",
                                                },
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </Container>
    );
};

export default AllBlog;
