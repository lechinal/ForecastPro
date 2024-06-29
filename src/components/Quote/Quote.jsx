import styles from "./Quote.module.css";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function Quote() {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteOverlay}></div>
      <div className={styles.iconQuote}>
        <FormatQuoteIcon style={{ width: "20px" }} />
      </div>
      <div className={styles.quote}>
        <div className={styles.textQuote}>
          Who cares about the clouds when we're together? Just sing a song and
          bring the sunny weather.
        </div>
        <div className={styles.authorQuote}>Dale Evans</div>
      </div>
    </div>
  );
}

export default Quote;
