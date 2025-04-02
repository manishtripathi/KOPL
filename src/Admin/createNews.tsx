import React, { useState } from 'react';
import NewsForm from '../Forms/NewsForm';
import { NewsFormData } from '../Forms/newsFormUtils';
import { db } from '../Firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from './createNews.module.css';

const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
};

const CreateNews: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);

    const handleCreateNews = async (data: NewsFormData) => {
        setIsLoading(true);
        setStatusMessage('Starting submission...');
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

            const newsDataToSave = {
                title: data.title,
                heading: data.heading,
                description: data.description,
                thumbnailBase64: thumbnailBase64,
                imageBase64s: imageBase64s,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            setStatusMessage('Saving news data to database...');
            await addDoc(collection(db, "news"), newsDataToSave);
            setStatusMessage('News article created successfully!');
            setIsError(false);

        } catch (error: any) {
            setStatusMessage(`Error: ${error.message || 'Failed to create news article.'}`);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.createNewsContainer}>
            <h1>Admin - Create News</h1>
            {statusMessage && (
                <p className={`${styles.statusMessage} ${isError ? styles.statusMessageerror : styles.statusMessageSuccess}`}>
                    {statusMessage}
                </p>
            )}
            <NewsForm onSubmit={handleCreateNews} isLoading={isLoading} />
        </div>
    );
};

export default CreateNews;