import React from "react";

function Question({
  question,
  selectedOption,
  showOptions,
  handleOptionSelect,
}) {
  if (!question) {
    // If question is not available, return null or display a message
    return <div>No question available</div>;
  }

  const imagePath = `./assets/${question.media}`;

  return (
    <div className="question-container">
      <div className="image-container">
        {question.media && <img src={imagePath} alt="Question Image" />}{" "}
        {/* Check if media exists before rendering the image */}
      </div>
      <div className="question-content">
        <h2>{question.question}</h2>
        <div className="options-container">
          {showOptions &&
            question.options.map((option, index) => (
              <div
                key={index}
                className={`option-item ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
