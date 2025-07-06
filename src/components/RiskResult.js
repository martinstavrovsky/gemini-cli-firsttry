
import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  CircularProgress,
} from '@mui/material';

const RiskResult = ({ risks, score }) => {
  const getRiskColor = (level) => {
    switch (level) {
      case 'High':
        return 'error.main';
      case 'Medium':
        return 'warning.main';
      case 'Low':
        return 'success.main';
      default:
        return 'text.primary';
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Overall ESG Score
        </Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
          <CircularProgress variant="determinate" value={score} size={120} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" component="div" color="text.secondary">
              {`${score.toFixed(2)}%`}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          This score reflects your company's performance on the ESG questionnaire. A higher score indicates better ESG performance.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Associated Risks
        </Typography>
        {risks.length > 0 ? (
          <List>
            {risks.map((risk, index) => (
              <ListItem key={index} sx={{ borderLeft: `4px solid ${getRiskColor(risk.level)}`, my: 1 }}>
                <ListItemText
                  primary={`${risk.level} Risk: ${risk.message}`}
                  secondary={`Recommendation: ${risk.recommendation}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1">No significant risks identified.</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default RiskResult;
