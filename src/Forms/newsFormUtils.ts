// src/Forms/newsFormUtils.ts

export interface NewsFormData {
    title: string;
    heading: string;
    description: string;
    thumbnailImage: File | null;
    images: FileList | null;
}

export interface NewsFormErrors {
    title?: string;
    heading?: string;
    description?: string;
    thumbnailImage?: string;
    images?: string;
}


export const validateForm = (
    title: string,
    heading: string,
    description: string,
    thumbnailImage: File | null,
    images: FileList | null,
): NewsFormErrors => {
    const newErrors: NewsFormErrors = {};

    if (!title.trim()) {
        newErrors.title = 'Title is required.';
    }
    if (!heading.trim()) {
        newErrors.heading = 'Heading is required.';
    }
    const plainTextDescription = description.replace(/<[^>]*>/g, '').trim();
    if (!plainTextDescription) {
        newErrors.description = 'Description cannot be empty.';
    }
    if (!thumbnailImage) {
        newErrors.thumbnailImage = 'Thumbnail image is required.';
    } else if (!thumbnailImage.type.startsWith('image/')) {
         newErrors.thumbnailImage = 'Thumbnail must be an image file.';
    }

    if (images) {
        for (let i = 0; i < images.length; i++) {
            if (!images[i].type.startsWith('image/')) {
                newErrors.images = `File "${images[i].name}" is not a valid image type.`;
                break;
            }
        }
    }

    return newErrors;
};