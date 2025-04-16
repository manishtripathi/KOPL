import { db } from '../Firebase/firebaseConfig';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

export interface NewsItem {
    id: string;
    title: string;
    heading: string;
    description: string;
    thumbnailImage: string;  
    images: string[];       
}


const validateBase64Image = (base64String: string | undefined | null): string => {
   
    const defaultBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=";
    
    if (!base64String) {
        return defaultBase64;
    }
    
    try {
      
        if (!base64String.startsWith('data:')) {
           
            let imageType = 'image/png';            
            
            if (base64String.includes('WEBP')) {
                imageType = 'image/webp';
            } 
            
            else if (base64String.startsWith('/9j/') || base64String.startsWith('UklGR')) {
                imageType = 'image/jpeg';
            }
            
            base64String = `data:${imageType};base64,${base64String}`;
        }
        
       
        const dataUriRegex = /^data:([a-z]+\/[a-z0-9-+.]+);base64,([a-zA-Z0-9+/=]+)$/;
        if (!dataUriRegex.test(base64String)) {
            
            const parts = base64String.split('base64,');
            if (parts.length === 2) {
                const mimeType = base64String.split(';')[0].split(':')[1] || 'image/png';
                return `data:${mimeType};base64,${parts[1]}`;
            }
            
            
            return defaultBase64;
        }
        
        return base64String;
    } catch (error) {
        return defaultBase64;
    }
};

const getNewsFromFirebase = async (itemLimit: number): Promise<NewsItem[]> => {
    try {
        const newsCollection = collection(db, 'news');
        const q = query(newsCollection, orderBy('title'), limit(itemLimit));
        const querySnapshot = await getDocs(q);

        const news: NewsItem[] = [];

        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            const rawThumbBase64 = data.thumbnailBase64; 
            const thumbnailImage = validateBase64Image(rawThumbBase64);
            const images: string[] = [];
            if (Array.isArray(data.imageBase64s)) {
                data.imageBase64s.forEach((img: string) => {
                    if (img) {
                        images.push(validateBase64Image(img));
                    }
                });
            }

            news.push({
                id: doc.id,
                title: data.title || '',
                heading: data.heading || '',
                description: data.description || '',
                thumbnailImage: thumbnailImage,
                images: images,
            });
        }

        return news;
    } catch (error) {
        return []; 
    }
};

export default getNewsFromFirebase;