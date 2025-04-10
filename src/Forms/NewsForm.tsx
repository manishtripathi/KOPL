import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import styles from './newsForm.module.css';
import { validateForm, NewsFormData, NewsFormErrors } from './newsFormUtils';

interface NewsFormProps {
    onSubmit: (data: NewsFormData) => void;
    isLoading?: boolean;
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit, isLoading = false }) => {
    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState<File | null>(null);
    const [images, setImages] = useState<FileList | null>(null);
    const [errors, setErrors] = useState<NewsFormErrors>({});

    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: 'Start typing news description...',
            height: 300,
        }),
        []
    );

    const isValid = () => {
        const newErrors = validateForm(title, heading, description, thumbnailImage, images);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setThumbnailImage(file);
            setThumbnailPreview(URL.createObjectURL(file));
            if (errors.thumbnailImage) {
                setErrors(prev => ({ ...prev, thumbnailImage: undefined }));
            }
        } else {
            setThumbnailImage(null);
            setThumbnailPreview(null);
        }
    };

    const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        setImages(files);

        if (files) {
            const previewUrls = Array.from(files).map(file => URL.createObjectURL(file));
            setImagePreviews(previewUrls);
            if (errors.images) {
                setErrors(prev => ({ ...prev, images: undefined }));
            }
        } else {
            setImagePreviews([]);
        }
    };

    const handleDescriptionChange = (newContent: string) => {
        setDescription(newContent);
        if (errors.description) {
            const plainTextDescription = newContent.replace(/<[^>]*>/g, '').trim();
            if (plainTextDescription) {
                setErrors(prev => ({ ...prev, description: undefined }));
            }
        }
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, fieldName: keyof NewsFormErrors) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setter(event.target.value);
            if (errors[fieldName]) {
                setErrors(prev => ({ ...prev, [fieldName]: undefined }));
            }
        };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValid()) {
            if (thumbnailImage) {
                onSubmit({
                    title,
                    heading,
                    description,
                    thumbnailImage,
                    images,
                });
            } else {
                setErrors(prev => ({ ...prev, thumbnailImage: 'Thumbnail image is required.' }));
            }
        }
    };

    useEffect(() => {
        const currentThumbnailPreview = thumbnailPreview;
        return () => {
            if (currentThumbnailPreview) {
                URL.revokeObjectURL(currentThumbnailPreview);
            }
        };
    }, [thumbnailPreview]);

    useEffect(() => {
        const currentImagePreviews = [...imagePreviews];
        return () => {
            currentImagePreviews.forEach(url => URL.revokeObjectURL(url));
        };
    }, [imagePreviews]);


    return (
        <form onSubmit={handleSubmit} className={styles.formContainer} noValidate>
            <div className={styles.formrow}>

                <div className={styles.formGroup}>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleInputChange(setTitle, 'title')}
                        aria-describedby="titleError"
                        aria-invalid={!!errors.title}
                        placeholder='title'
                    />
                    {errors.title && <p id="titleError" className={styles.errorMessage}>{errors.title}</p>}
                </div>

                <div className={styles.formGroup}>
                    <input
                        type="text"
                        id="heading"
                        value={heading}
                        onChange={handleInputChange(setHeading, 'heading')}
                        aria-describedby="headingError"
                        aria-invalid={!!errors.heading}
                        placeholder='heading'
                    />
                    {errors.heading && <p id="headingError" className={styles.errorMessage}>{errors.heading}</p>}
                </div>
            </div>

            <div className={styles.formrow}>
                <div className={styles.formGroup}>
                   
                    <input
                        type="file"
                        id="thumbnailImage"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        aria-describedby="thumbnailError"
                        aria-invalid={!!errors.thumbnailImage}
                        placeholder='thumbnailimage'
                    />
                    {thumbnailPreview && (
                        <div className={styles.thumbnailPreviewContainer}>
                            <p>Preview:</p>
                            <img src={thumbnailPreview} alt="Thumbnail Preview" className={styles.thumbnailPreview} />
                        </div>
                    )}
                    {errors.thumbnailImage && <p id="thumbnailError" className={styles.errorMessage}>{errors.thumbnailImage}</p>}
                </div>
                <div className={styles.formGroup}>
                   
                    <input
                        type="file"
                        id="images"
                        accept="image/*"
                        multiple
                        onChange={handleImagesChange}
                        aria-describedby="imagesError"
                        aria-invalid={!!errors.images}
                        placeholder='detailsimage'
                    />
                    {imagePreviews.length > 0 && (
                        <div className={styles.imagePreviewContainer}>
                            <p>Previews:</p>
                            {imagePreviews.map((previewUrl, index) => (
                                <img key={index} src={previewUrl} alt={`Image Preview ${index + 1}`} className={styles.imagePreview} />
                            ))}
                        </div>
                    )}
                    {errors.images && <p id="imagesError" className={styles.errorMessage}>{errors.images}</p>}
                </div>
            </div>
            <div className={styles.formrow}>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Description</label>
                    <div className={styles.editorContainer} aria-describedby="descriptionError">
                        <JoditEditor
                            ref={editor}
                            value={description}
                            config={config}
                            onBlur={handleDescriptionChange}
                        />
                    </div>

                    {errors.description && <p id="descriptionError" className={styles.errorMessage}>{errors.description}</p>}
                </div>


            </div>
            <button type="submit" className={styles.submitButton} disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Create News'}
            </button>
        </form>
    );
};

export default NewsForm;