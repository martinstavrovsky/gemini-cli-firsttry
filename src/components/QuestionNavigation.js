import React from 'react';
import { Button, Box } from '@mui/material';

const QuestionNavigation = ({
  activeStep,
  questionsLength,
  onPrevious,
  onNext,
  onSubmit,
  isCurrentQuestionAnswered,
}) => {
  return (
    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Button
        variant="contained"
        onClick={onPrevious}
        disabled={activeStep === 0}
      >
        Previous
      </Button>
      {activeStep < questionsLength - 1 ? (
        <Button
          variant="contained"
          onClick={onNext}
          disabled={!isCurrentQuestionAnswered}
        >
          Next
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          disabled={!isCurrentQuestionAnswered}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};

export default QuestionNavigation;