import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const QuestionCard = ({ question, selectedAnswer, onAnswerChange }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="p" gutterBottom>
          {question.question}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="question"
            name="question"
            value={selectedAnswer?.text || ''}
            onChange={(e) =>
              onAnswerChange(question.options.find((o) => o.text === e.target.value))
            }
          >
            {question.options.map((option) => (
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
  );
};

export default QuestionCard;