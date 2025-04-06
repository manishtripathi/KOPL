import React, { useState } from 'react';

interface Base64ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: string | number;
    height?: string | number;
}

const Base64Image: React.FC<Base64ImageProps> = ({ 
    src, 
    alt, 
    className = '', 
    width, 
    height 
}) => {
    const [error, setError] = useState(false);
    const fallbackImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTkiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+";
    
    // Ensure the src is a valid base64 string
    const isValidBase64 = (str: string): boolean => {
        if (!str || !str.startsWith('data:')) return false;
        
        try {
            const parts = str.split(',');
            if (parts.length !== 2) return false;
            
            // Check if the base64 part can be decoded
            atob(parts[1]);
            return true;
        } catch (e) {
            return false;
        }
    };
    
    const imageSrc = error || !isValidBase64(src) ? fallbackImage : src;
    
    return (
        <img 
            src={imageSrc}
            alt={alt}
            className={className}
            style={{ width, height }}
            onError={() => setError(true)}
        />
    );
};

export default Base64Image;