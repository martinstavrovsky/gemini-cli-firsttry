import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ESG Questionnaire heading', () => {
  render(<App />);
  expect(screen.getByText(/ESG Questionnaire/i)).toBeInTheDocument();
});
