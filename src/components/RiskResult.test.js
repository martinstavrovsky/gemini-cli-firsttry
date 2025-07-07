import React from 'react';
import { render, screen } from '@testing-library/react';
import RiskResult from './RiskResult';

describe('RiskResult', () => {
  const mockRisks = [
    {
      level: 'High',
      message: 'High environmental risk',
      recommendation: 'Reduce emissions',
      category: 'Environmental',
    },
    {
      level: 'Medium',
      message: 'Medium social risk',
      recommendation: 'Improve labor practices',
      category: 'Social',
    },
    {
      level: 'Low',
      message: 'Low governance risk',
      recommendation: 'Review board structure',
      category: 'Governance',
    },
    {
      level: 'High',
      message: 'Another high environmental risk',
      recommendation: 'Invest in renewables',
      category: 'Environmental',
    },
  ];

  test('renders overall ESG score correctly', () => {
    render(<RiskResult risks={[]} score={75.5} />);
    expect(screen.getByText('Overall ESG Score')).toBeInTheDocument();
    expect(screen.getByText('75.50%')).toBeInTheDocument();
  });

  test('renders no significant risks message when risks array is empty', () => {
    render(<RiskResult risks={[]} score={50} />);
    expect(screen.getByText('No significant risks identified.')).toBeInTheDocument();
  });

  test('renders risks grouped by category', () => {
    render(<RiskResult risks={mockRisks} score={60} />);

    expect(screen.getByText('Environmental Risks')).toBeInTheDocument();
    expect(screen.getByText('Social Risks')).toBeInTheDocument();
    expect(screen.getByText('Governance Risks')).toBeInTheDocument();

    expect(screen.getByText('High Risk: High environmental risk')).toBeInTheDocument();
    expect(screen.getByText('Medium Risk: Medium social risk')).toBeInTheDocument();
    expect(screen.getByText('Low Risk: Low governance risk')).toBeInTheDocument();
    expect(screen.getByText('High Risk: Another high environmental risk')).toBeInTheDocument();
  });

  test('displays correct risk levels and recommendations', () => {
    render(<RiskResult risks={mockRisks} score={60} />);

    expect(screen.getByText('Recommendation: Reduce emissions')).toBeInTheDocument();
    expect(screen.getByText('Recommendation: Improve labor practices')).toBeInTheDocument();
    expect(screen.getByText('Recommendation: Review board structure')).toBeInTheDocument();
    expect(screen.getByText('Recommendation: Invest in renewables')).toBeInTheDocument();
  });
});