import { useState } from "react";
import styles from "../../components/Answer/styles.module.css";

function Answer({ onSubmit }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(parseInt(answer, 10));
    setAnswer("");
  };

  return (
    <div className={styles.answerContainer}>
      <form onSubmit={handleSubmit} className={styles.answerForm}>
        <input
          type="number"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button type="submit">Check</button>
      </form>
    </div>
  );
}

export default Answer;
