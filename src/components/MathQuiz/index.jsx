import { useState } from "react";
import Question from "../Question";
import styles from "../../components/MathQuiz/style.module.css";

function MathQuiz() {
  const [score, setScore] = useState(0);

  const updatePoints = (answer) => {
    if (answer === 0) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  return (
    <div className={styles.mathContainer}>
      <div>
        <h2>Math Quiz</h2>
        <p>Your Score: {score}</p>
      </div>
      <Question updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
