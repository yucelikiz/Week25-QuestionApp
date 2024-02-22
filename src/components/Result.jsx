import React from "react";

function Result({ correctAnswers, incorrectAnswers, questions, userAnswers }) {
  return (
    <div>
      <p>Test bitti!</p>
      <p>Doğru cevap sayısı: {correctAnswers}</p>
      <p>Yanlış cevap sayısı: {incorrectAnswers}</p>
      <p>Kullanıcı Cevapları:</p>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            Soru {index + 1}:
            {userAnswers[index] ? (
              <>
                Doğru cevap: {question.answer}, Kullanıcının cevabı:{" "}
                {userAnswers[index]}
              </>
            ) : (
              "Kullanıcı cevap vermedi."
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
