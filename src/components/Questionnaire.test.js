import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Questionnaire from './Questionnaire';
import { questions } from '../data/questions';

// Mock the questions to simplify testing
jest.mock('../data/questions', () => ({
  questions: [
    {
      category: 'Test',
      question: "Test Question 1",
      options: [
        { text: "Option 1A", score: 1 },
        { text: "Option 1B", score: 0 },
      ],
      risk: (answer) => (answer === "Option 1B" ? { level: "High", message: "Risk 1", recommendation: "Rec 1", category: "Environmental" } : null),
    },
    {
      category: 'Test',
      question: "Test Question 2",
      options: [
        { text: "Option 2A", score: 1 },
        { text: "Option 2B", score: 0 },
      ],
      risk: (answer) => (answer === "Option 2B" ? { level: "Medium", message: "Risk 2", recommendation: "Rec 2", category: "Social" } : null),
    },
  ],
}));

describe('Questionnaire', () => {
  test('renders the first question initially', () => {
    render(<Questionnaire />);
    expect(screen.getByText('Test Question 1')).toBeInTheDocument();
    expect(screen.getByText('Question 1 of 2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });

  test('allows user to answer and navigate to the next question', async () => {
    render(<Questionnaire />);
    const user = userEvent.setup();

    // Answer first question
    await user.click(screen.getByLabelText('Option 1A'));
    expect(screen.getByRole('button', { name: /next/i })).toBeEnabled();

    // Go to next question
    await user.click(screen.getByRole('button', { name: /next/i }));
    expect(screen.getByText('Test Question 2')).toBeInTheDocument();
    expect(screen.getByText('Question 2 of 2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /previous/i })).toBeEnabled();
    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
  });

  test('allows user to go back to previous question', async () => {
    render(<Questionnaire />);
    const user = userEvent.setup();

    // Answer first question and go next
    await user.click(screen.getByLabelText('Option 1A'));
    await user.click(screen.getByRole('button', { name: /next/i }));

    // Go back to previous question
    await user.click(screen.getByRole('button', { name: /previous/i }));
    expect(screen.getByText('Test Question 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1A')).toBeChecked();
  });

  test('submits the questionnaire and displays results', async () => {
    render(<Questionnaire />);
    const user = userEvent.setup();

    // Answer first question
    await user.click(screen.getByLabelText('Option 1A'));
    await user.click(screen.getByRole('button', { name: /next/i }));

    // Answer second question
    await user.click(screen.getByLabelText('Option 2A'));
    expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();

    // Submit
    await user.click(screen.getByRole('button', { name: /submit/i }));

    // Check if RiskResult component is rendered
    expect(screen.getByText('Overall ESG Score')).toBeInTheDocument();
    expect(screen.getByText('Associated Risks')).toBeInTheDocument();
  });

  test('calculates score correctly', async () => {
    render(<Questionnaire />);
    const user = userEvent.setup();

    // Answer first question with score 1
    await user.click(screen.getByLabelText('Option 1A'));
    await user.click(screen.getByRole('button', { name: /next/i }));

    // Answer second question with score 1
    await user.click(screen.getByLabelText('Option 2A'));
    await user.click(screen.getByRole('button', { name: /submit/i }));

    // Total possible score is 2 (1+1), so 100%
    expect(screen.getByText('100.00%')).toBeInTheDocument();
  });

  test('identifies risks correctly', async () => {
    render(<Questionnaire />);
    const user = userEvent.setup();

    // Answer first question to trigger risk
    await user.click(screen.getByLabelText('Option 1B'));
    await user.click(screen.getByRole('button', { name: /next/i }));

    // Answer second question to trigger risk
    await user.click(screen.getByLabelText('Option 2B'));
    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Environmental Risks')).toBeInTheDocument();
    expect(screen.getByText(/High Risk: Risk 1/i)).toBeInTheDocument();
    expect(screen.getByText('Social Risks')).toBeInTheDocument();
    expect(screen.getByText(/Medium Risk: Risk 2/i)).toBeInTheDocument();
  });
});