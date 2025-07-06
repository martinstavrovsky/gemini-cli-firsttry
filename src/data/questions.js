
export const questions = [
  // Initial Basic Questions
  {
    question: "Does your company have a formal environmental policy?",
    options: [
      { text: "Yes", score: 2 },
      { text: "No", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "No") {
        return { 
          level: "High", 
          message: "Lack of a formal environmental policy indicates a potential gap in managing environmental risks.",
          recommendation: "Develop a formal environmental policy that outlines your company's commitment to environmental protection and sustainability."
        };
      }
      return null;
    },
  },
  {
    question: "Do you track your company's energy consumption?",
    options: [
      { text: "Yes", score: 2 },
      { text: "No", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "No") {
        return { 
          level: "Medium", 
          message: "Without tracking energy consumption, it's difficult to identify opportunities for energy efficiency and cost savings.",
          recommendation: "Start tracking your company's energy consumption. This is the first step towards identifying energy-saving opportunities."
        };
      }
      return null;
    },
  },
  {
    question: "Do you have a supplier code of conduct that includes social and environmental standards?",
    options: [
      { text: "Yes", score: 2 },
      { text: "No", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "No") {
        return { 
          level: "High", 
          message: "Without a supplier code of conduct, you have limited visibility into the social and environmental risks within your supply chain.",
          recommendation: "Develop a supplier code of conduct that outlines your expectations for social and environmental performance."
        };
      }
      return null;
    },
  },

  // Questions based on general EU regulations
  {
    question: "How does your company manage waste?",
    options: [
      { text: "We have a comprehensive recycling program and actively seek to reduce waste.", score: 2 },
      { text: "We recycle some materials, but do not have a formal waste reduction program.", score: 1 },
      { text: "We do not have a recycling program or a waste reduction strategy.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "We do not have a recycling program or a waste reduction strategy.") {
        return { 
          level: "High", 
          message: "Lack of a waste management strategy can lead to non-compliance with EU waste regulations and reputational damage.",
          recommendation: "Develop a formal waste management policy that includes recycling, waste reduction targets, and employee training. Comply with the EU Waste Framework Directive."
        };
      } else if (answer === "We recycle some materials, but do not have a formal waste reduction program.") {
        return { 
          level: "Medium", 
          message: "A partial recycling program is a good start, but a formal waste reduction program is needed to mitigate risks.",
          recommendation: "Expand your recycling program and set measurable waste reduction targets. Communicate your progress to stakeholders."
        };
      }
      return null;
    },
  },
  {
    question: "Which of the following best describes your company's employee contracts?",
    options: [
      { text: "All employees have written contracts that comply with EU labor laws.", score: 2 },
      { text: "Some employees have written contracts, but not all.", score: 1 },
      { text: "We do not use written employee contracts.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "We do not use written employee contracts.") {
        return { 
          level: "High", 
          message: "Failure to provide written contracts can result in legal challenges and fines under EU labor law.",
          recommendation: "Immediately implement written contracts for all employees that comply with the EU's Transparent and Predictable Working Conditions Directive."
        };
      } else if (answer === "Some employees have written contracts, but not all.") {
        return { 
          level: "Medium", 
          message: "Inconsistent use of contracts can create legal risks and inequality among employees.",
          recommendation: "Ensure that all employees, including part-time and temporary staff, have written contracts that clearly outline their rights and responsibilities."
        };
      }
      return null;
    },
  },
  {
    question: "How does your company handle customer data?",
    options: [
      { text: "We have a clear data privacy policy and are fully compliant with GDPR.", score: 2 },
      { text: "We have some data privacy measures in place, but are not fully GDPR compliant.", score: 1 },
      { text: "We do not have a data privacy policy.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "We do not have a data privacy policy.") {
        return { 
          level: "High", 
          message: "Non-compliance with GDPR can result in severe fines and loss of customer trust.",
          recommendation: "Develop and implement a GDPR-compliant data privacy policy immediately. This should include appointing a Data Protection Officer (DPO) if necessary."
        };
      } else if (answer === "We have some data privacy measures in place, but are not fully GDPR compliant.") {
        return { 
          level: "Medium", 
          message: "Partial GDPR compliance is not enough to avoid legal and financial risks.",
          recommendation: "Conduct a full audit of your data processing activities to identify and rectify any gaps in your GDPR compliance."
        };
      }
      return null;
    },
  },

  // Questions based on specific EU directives
  {
    question: "How does your company handle potentially hazardous waste (e.g., chemicals, electronics)?",
    options: [
      { text: "We have a documented procedure for identifying, separating, and disposing of hazardous waste in accordance with the EU Waste Framework Directive.", score: 2 },
      { text: "We separate some hazardous waste, but do not have a formal procedure.", score: 1 },
      { text: "We do not separate hazardous waste from our general waste.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "We do not separate hazardous waste from our general waste.") {
        return { 
          level: "High", 
          message: "Improper disposal of hazardous waste can lead to severe environmental damage and legal penalties.",
          recommendation: "Immediately establish a procedure for identifying and separating hazardous waste. Contract with a certified waste management company for its disposal."
        };
      } else if (answer === "We separate some hazardous waste, but do not have a formal procedure.") {
        return { 
          level: "Medium", 
          message: "Without a formal procedure, there is a risk of improper hazardous waste disposal.",
          recommendation: "Document your hazardous waste management procedure and provide training to all relevant employees to ensure compliance."
        };
      }
      return null;
    },
  },
  {
    question: "What is the maximum probationary period for new employees in your company?",
    options: [
      { text: "Up to 6 months, in line with the Transparent and Predictable Working Conditions Directive.", score: 2 },
      { text: "Longer than 6 months.", score: 0 },
      { text: "We do not have a standard probationary period.", score: 1 },
    ],
    risk: (answer) => {
      if (answer === "Longer than 6 months.") {
        return { 
          level: "High", 
          message: "Probationary periods longer than 6 months may be in breach of the Transparent and Predictable Working Conditions Directive.",
          recommendation: "Review and amend your employment contracts to ensure that probationary periods do not exceed 6 months."
        };
      } else if (answer === "We do not have a standard probationary period.") {
        return { 
          level: "Medium", 
          message: "Lack of a standard probationary period can lead to inconsistencies and perceived unfairness.",
          recommendation: "Establish a standard probationary period of up to 6 months for all new employees."
        };
      }
      return null;
    },
  },
  {
    question: "What is your company's procedure for notifying the authorities of a data breach?",
    options: [
      { text: "We have a documented procedure to notify the relevant supervisory authority within 72 hours of discovering a data breach, in line with GDPR.", score: 2 },
      { text: "We would notify the authorities, but we do not have a documented procedure or a specific timeframe.", score: 1 },
      { text: "We do not have a procedure for notifying authorities of a data breach.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "We do not have a procedure for notifying authorities of a data breach.") {
        return { 
          level: "High", 
          message: "Failure to notify the authorities of a data breach within 72 hours is a violation of GDPR and can result in significant fines.",
          recommendation: "Develop and implement a data breach response plan that includes notifying the relevant supervisory authority within 72 hours."
        };
      } else if (answer === "We would notify the authorities, but we do not have a documented procedure or a specific timeframe.") {
        return { 
          level: "Medium", 
          message: "Without a documented procedure, you risk a delayed or inadequate response to a data breach.",
          recommendation: "Document your data breach notification procedure, including roles and responsibilities, and ensure all relevant staff are trained on it."
        };
      }
      return null;
    },
  },

  // Latest questions based on additional EU directives
  {
    question: "Has your company conducted an energy audit in the last four years?",
    options: [
      { text: "Yes, we have conducted an energy audit and have an energy management system in place.", score: 2 },
      { text: "Yes, we have conducted an energy audit but have not yet implemented all the recommendations.", score: 1 },
      { text: "No, we have not conducted an energy audit.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "No, we have not conducted an energy audit.") {
        return { 
          level: "High", 
          message: "Under the new Energy Efficiency Directive, many SMEs are now required to conduct energy audits. Failure to do so could result in non-compliance.",
          recommendation: "Urgently assess if your company meets the criteria for a mandatory energy audit. Even if not mandatory, conducting an audit can lead to significant cost savings."
        };
      } else if (answer === "Yes, we have conducted an energy audit but have not yet implemented all the recommendations.") {
        return { 
          level: "Medium", 
          message: "While you have conducted an audit, failing to implement the recommendations means you are missing out on potential energy and cost savings.",
          recommendation: "Prioritize the implementation of the recommendations from your energy audit. Look for government support programs to help with the costs."
        };
      }
      return null;
    },
  },
  {
    question: "Does your company have a documented risk assessment for workplace health and safety?",
    options: [
      { text: "Yes, we have a comprehensive and regularly updated risk assessment.", score: 2 },
      { text: "We have a risk assessment, but it is not regularly updated.", score: 1 },
      { text: "No, we do not have a documented risk assessment.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "No, we do not have a documented risk assessment.") {
        return { 
          level: "High", 
          message: "A documented risk assessment is a legal requirement under the EU Health and Safety at Work Directive. Failure to have one can result in fines and, more importantly, a dangerous workplace.",
          recommendation: "Immediately conduct a thorough risk assessment of your workplace. Use the free Online interactive Risk Assessment (OiRA) tool provided by the EU."
        };
      } else if (answer === "We have a risk assessment, but it is not regularly updated.") {
        return { 
          level: "Medium", 
          message: "An outdated risk assessment may not reflect the current hazards in your workplace.",
          recommendation: "Review and update your risk assessment regularly, especially when there are changes in the workplace."
        };
      }
      return null;
    },
  },
  {
    question: "Does your company have an internal channel for whistleblowers to report breaches of EU law?",
    options: [
      { text: "Yes, we have a secure and confidential internal reporting channel in line with the EU Whistleblower Protection Directive.", score: 2 },
      { text: "We have a reporting channel, but it may not be fully compliant with the directive.", score: 1 },
      { text: "No, we do not have an internal reporting channel.", score: 0 },
    ],
    risk: (answer) => {
      if (answer === "No, we do not have an internal reporting channel.") {
        return { 
          level: "High", 
          message: "Companies with 50 or more employees are required to have an internal reporting channel for whistleblowers. Failure to comply can lead to legal penalties.",
          recommendation: "If you have 50 or more employees, you must establish a secure and confidential internal reporting channel immediately. If you have fewer than 50 employees, it is still best practice to have one."
        };
      } else if (answer === "We have a reporting channel, but it may not be fully compliant with the directive.") {
        return { 
          level: "Medium", 
          message: "A non-compliant reporting channel may not provide adequate protection for whistleblowers and could expose your company to legal risks.",
          recommendation: "Review your current reporting channel to ensure it meets all the requirements of the EU Whistleblower Protection Directive, including confidentiality and protection against retaliation."
        };
      }
      return null;
    },
  },
];
