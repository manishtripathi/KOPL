import React, { useState } from 'react';
import BlogForm from '../Forms/blogForm'; // Assuming you have a BlogForm component
import { BLogFormData } from '../Forms/blogFormUtils'; // Assuming you have BlogFormData type
import { db } from '../Firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from './createBlog.module.css'; // Create a separate CSS module for blogs

const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
};

const CreateBlog: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);

    const handleCreateBlog = async (data: BLogFormData) => {
        setIsLoading(true);
        setStatusMessage('Starting blog submission...');
        setIsError(false);

        if (!data.thumbnailImage) {
            setStatusMessage('Error: Thumbnail image is missing.');
            setIsError(true);
            setIsLoading(false);
            return;
        }

        try {
            setStatusMessage('Converting thumbnail to Base64...');
            const thumbnailBase64 = await toBase64(data.thumbnailImage);

            let imageBase64s: string[] = [];
            if (data.images && data.images.length > 0) {
                setStatusMessage(`Converting ${data.images.length} images to Base64...`);
                const imagePromises: Promise<string>[] = [];
                for (let i = 0; i < data.images.length; i++) {
                    imagePromises.push(toBase64(data.images[i]));
                }
                imageBase64s = await Promise.all(imagePromises);
                setStatusMessage('Images converted to Base64.');
            }

            const blogDataToSave = {
                title: data.title,
                heading: data.heading,
                content: data.description, // Assuming your blog form has a 'content' field
                thumbnailBase64: thumbnailBase64,
                imageBase64s: imageBase64s,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            setStatusMessage('Saving blog data to database...');
            await addDoc(collection(db, "blogs"), blogDataToSave); // Use "blogs" collection
            setStatusMessage('Blog article created successfully!');
            setIsError(false);

        } catch (error: any) {
            setStatusMessage(`Error: ${error.message || 'Failed to create blog article.'}`);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.createBlogContainer}>
            <h1>Admin - Create Blog</h1>
            {statusMessage && (
                <p className={`${styles.statusMessage} ${isError ? styles.statusMessageerror : styles.statusMessageSuccess}`}>
                    {statusMessage}
                </p>
            )}
            <BlogForm onSubmit={handleCreateBlog} isLoading={isLoading} />
        </div>
    );
};

export default CreateBlog;