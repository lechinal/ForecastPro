import React, { useState, useEffect } from 'react';

import styles from './Quote.module.css';

import quotes from '../../data/quotes.json';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Quote() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteOverlay}></div>
      <div className={styles.iconQuote}>
        <FormatQuoteIcon style={{ width: '20px' }} />
      </div>
      <div className={styles.quote}>
        <div className={styles.textQuote}>{currentQuote.quote}</div>
        <div className={styles.authorQuote}>{currentQuote.author}</div>
      </div>
    </div>
  );
}

export default Quote;
