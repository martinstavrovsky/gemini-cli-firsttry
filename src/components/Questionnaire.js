import React, { useState } from 'react';
import { questions } from '../data/questions';
import RiskResult from './RiskResult';
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  LinearProgress,
} from '@mui/material';

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
          <Card>
            <CardContent>
              <Typography variant="h6" component="p" gutterBottom>
                {questions[activeStep].question}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="question"
                  name="question"
                  value={answers[activeStep]?.text || ''}
                  onChange={(e) =>
                    handleAnswerChange(
                      activeStep,
                      questions[activeStep].options.find((o) => o.text === e.target.value)
                    )
                  }
                >
                  {questions[activeStep].options.map((option) => (
                    <FormControlLabel
                      key={option.text}
                      value={option.text}
                      control={<Radio />}
                      label={option.text}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
          <div style={{ marginTop: '20px' }}>
            {activeStep < questions.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            )}
          </div>
        </>
      ) : (
        <RiskResult risks={risks} score={percentage} />
      )}
    </Container>
  );
};

export default Questionnaire;