import React from "react";
import balik from "../../public/images/balik.jpg"
import bandira from "../../public/images/bandira.jpg"
import billboard from "../../public/images/billboard.jpg"
import cinSeddi from "../../public/images/cin-seddi.jpg"
import fobi from "../../public/images/fobi.jpg"
import mutluluk from "../../public/images/mutluluk.jpg"
import pamuk from "../../public/images/pamuk.jpg"
import parfum from "../../public/images/parfum.jpg"
import tarkan from "../../public/images/tarkan.jpg"
import trex from "../../public/images/trex.jpg"


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

  const imagePath = `../../public/images/${question.media}`;

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
