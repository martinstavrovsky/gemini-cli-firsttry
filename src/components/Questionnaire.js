import React, { useState } from 'react';
import { questions } from '../data/questions';
import RiskResult from './RiskResult';
import {
  Container,
  Typography,
  LinearProgress,
} from '@mui/material';
import QuestionCard from './QuestionCard';
import QuestionNavigation from './QuestionNavigation';

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isCurrentQuestionAnswered, setIsCurrentQuestionAnswered] = useState(false);

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
    setIsCurrentQuestionAnswered(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setIsCurrentQuestionAnswered(false); // Reset for the next question
  };

  const handlePrevious = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setIsCurrentQuestionAnswered(true); // Assume previous question was answered
  };

  const totalPossibleScore = questions.reduce((acc, question) => {
    const maxScore = Math.max(...question.options.map((option) => option.score));
    return acc + maxScore;
  }, 0);

  const score = Object.values(answers).reduce((acc, answer) => acc + answer.score, 0);
  const percentage = (score / totalPossibleScore) * 100;

  const risks = questions.reduce((acc, question, index) => {
    const answer = answers[index];
    if (answer) {
      const risk = question.risk(answer.text);
      if (risk) {
        acc.push(risk);
      }
    }
    return acc;
  }, []);

  const progress = ((activeStep + 1) / questions.length) * 100;

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ESG Questionnaire
      </Typography>
      {!submitted ? (
        <>
          <LinearProgress variant="determinate" value={progress} sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary" align="right" sx={{ mb: 2 }}>
            Question {activeStep + 1} of {questions.length}
          </Typography>
          <QuestionCard
            question={questions[activeStep]}
            selectedAnswer={answers[activeStep]}
            onAnswerChange={(answer) => handleAnswerChange(activeStep, answer)}
          />
          <QuestionNavigation
            activeStep={activeStep}
            questionsLength={questions.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isCurrentQuestionAnswered={isCurrentQuestionAnswered}
          />
        </>
      ) : (
        <RiskResult risks={risks} score={percentage} />
      )}
    </Container>
  );
};

export default Questionnaire;