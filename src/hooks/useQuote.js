import { useState, useEffect } from 'react';

export default function useQuote() {
    const [quote, setQuote] = useState(null);


    useEffect(() => {
        async function fetchQuote() {
            try {
                const response = await fetch("https://dummyjson.com/quotes/random");
                const data = await response.json();

                setQuote({
                    text: data.quote, 
                    author: data.author,
                    date: Date.now(),
                });
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
        fetchQuote();
    }, []);

    return quote; 
}