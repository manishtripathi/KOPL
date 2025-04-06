export interface NewsItem {
    id: string;
    title: string;
    heading: string;
    description: string;
    thumbnailImage: string;
    images: string[];
}

export interface CategoryItem {
    id: string;
    name: string;
    image?: string;
}
