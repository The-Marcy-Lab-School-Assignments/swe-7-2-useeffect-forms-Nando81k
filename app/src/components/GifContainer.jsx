import React, { useEffect, useState } from 'react';
import defaultGifs from '../gifs.json';
import { getGifsBySearch, getTrendingGifs } from '../adapters/giphyAdapters';

const GifContainer = ({ searchTerm }) => {
    const [gifs, setGifs] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                console.log('Fetching gifs...');
                let gifsData;
                if (searchTerm) {
                    const [data, error] = await getGifsBySearch(searchTerm);
                    if (error) throw error;
                    gifsData = data;
                } else {
                    const [data, error] = await getTrendingGifs();
                    if (error) throw error;
                    gifsData = data;
                }
                console.log('Fetched gifs:', gifsData);
                setGifs(gifsData || []); // Ensure gifsData is an array
                setError(false);
            } catch (err) {
                console.error('Error fetching gifs:', err);
                setError(true);
                setGifs(defaultGifs); // Fallback to default gifs
            }
        };

        fetchGifs();
    }, [searchTerm]);

    return (
        <div>
            <ul>
                {gifs && gifs.length > 0 ? (
                    gifs.map((gif) => (
                        <li key={gif.id}>
                            <img src={gif.images.original.url} alt={gif.title} />
                        </li>
                    ))
                ) : (
                    <p>No GIFs available</p>
                )}
            </ul>
            {error && <p>Failed to fetch gifs. Showing default gifs.</p>}
        </div>
    );
};

export default GifContainer;
