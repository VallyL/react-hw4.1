import { useState } from "react";
import Answer from "../Answer";
import styles from "../../components/Question/styles.module.css";

function Question({ updatePoints }) {
  const [a, setA] = useState(Math.floor(Math.random() * 100));
  const [b, setB] = useState(Math.floor(Math.random() * 100));

  const handleAnswerSubmit = (answer) => {
    updatePoints(answer - (a + b));
    setA(Math.floor(Math.random() * 100));
    setB(Math.floor(Math.random() * 100));
  };

  return (
    <div className={styles.questionContainer}>
      <p>
        Solve this: {a} + {b}
      </p>
      <Answer onSubmit={handleAnswerSubmit} />
    </div>
  );
}

export default Question;
