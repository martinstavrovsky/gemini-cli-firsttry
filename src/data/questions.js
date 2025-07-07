export const questions = [
  // Environmental
  {
    category: 'Environmental',
    question: 'Does your company have a formal environmental policy that is reviewed regularly and includes specific targets?',
    options: [
      { text: 'Comprehensive environmental policy with measurable targets, reviewed at least annually and publicly reported.', score: 2 },
      { text: 'Environmental policy exists but lacks measurable targets or is reviewed less frequently than annually.', score: 1 },
      { text: 'No formal environmental policy in place.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'No formal environmental policy in place.') {
        return {
          level: 'High',
          message: 'Absence of an environmental policy indicates significant potential environmental risks.',
          recommendation: 'Develop a formal environmental policy with clear targets and review it regularly according to EU guidelines.',
          category: 'Environmental',
        };
      } else if (answer === 'Environmental policy exists but lacks measurable targets or is reviewed less frequently than annually.') {
        return {
          level: 'Medium',
          message: 'Your policy lacks specific targets or regular reviews, limiting its effectiveness.',
          recommendation: 'Enhance your environmental policy by setting measurable targets and scheduling regular reviews.',
          category: 'Environmental',
        };
      }
      return null;
    },
  },
  {
    category: 'Environmental',
    question: 'To what extent does your company track and report energy consumption?',
    options: [
      { text: 'We systematically monitor and report energy consumption across all operations in line with EU requirements.', score: 2 },
      { text: 'We track energy usage in key facilities but lack organization-wide reporting.', score: 1 },
      { text: 'We do not track our energy consumption.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not track our energy consumption.') {
        return {
          level: 'High',
          message: 'No energy tracking prevents identification of efficiency opportunities.',
          recommendation: 'Implement systematic energy consumption tracking and reporting in line with the EU Energy Efficiency Directive.',
          category: 'Environmental',
        };
      } else if (answer === 'We track energy usage in key facilities but lack organization-wide reporting.') {
        return {
          level: 'Medium',
          message: 'Partial tracking limits insights into your energy usage patterns.',
          recommendation: 'Extend energy monitoring to all key sites and processes to optimize energy efficiency.',
          category: 'Environmental',
        };
      }
      return null;
    },
  },
  {
    category: 'Environmental',
    question: 'How comprehensive is your company\'s waste management and recycling program?',
    options: [
      { text: 'We have a formal waste management program including recycling, reduction targets, and regular progress reporting.', score: 2 },
      { text: 'We recycle some waste but have no formal reduction targets or comprehensive program.', score: 1 },
      { text: 'We do not have a structured waste management or recycling program.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not have a structured waste management or recycling program.') {
        return {
          level: 'High',
          message: 'Lack of a waste management program may result in non-compliance with EU waste regulations.',
          recommendation: 'Establish a formal waste management and recycling program complying with the EU Waste Framework Directive.',
          category: 'Environmental',
        };
      } else if (answer === 'We recycle some waste but have no formal reduction targets or comprehensive program.') {
        return {
          level: 'Medium',
          message: 'Recycling some materials is a start but insufficient for full compliance.',
          recommendation: 'Expand your recycling efforts and set waste reduction targets.',
          category: 'Environmental',
        };
      }
      return null;
    },
  },
  {
    category: 'Environmental',
    question: 'Does your company separate and properly dispose of hazardous waste (e.g., chemicals, electronics)?',
    options: [
      { text: 'We have documented procedures and training for segregating and disposing of all hazardous waste with certified handlers.', score: 2 },
      { text: 'We separate certain hazardous materials but lack documented procedures or training.', score: 1 },
      { text: 'We do not distinguish hazardous waste from general waste.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not distinguish hazardous waste from general waste.') {
        return {
          level: 'High',
          message: 'Improper hazardous waste disposal poses health, environmental, and legal risks.',
          recommendation: 'Implement procedures for identifying and segregating hazardous waste, and contract certified handlers.',
          category: 'Environmental',
        };
      } else if (answer === 'We separate certain hazardous materials but lack documented procedures or training.') {
        return {
          level: 'Medium',
          message: 'Partial hazardous waste separation may still expose you to compliance risks.',
          recommendation: 'Formalize your hazardous waste management procedures and train employees.',
          category: 'Environmental',
        };
      }
      return null;
    },
  },
  {
    category: 'Environmental',
    question: 'Has your company conducted an energy audit within the last four years and implemented its recommendations?',
    options: [
      { text: 'We conducted an energy audit within the last four years and have fully implemented its recommendations.', score: 2 },
      { text: 'We conducted an audit but have only partially implemented the recommendations.', score: 1 },
      { text: 'We have not conducted an energy audit in the past four years.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We have not conducted an energy audit in the past four years.') {
        return {
          level: 'High',
          message: 'No recent energy audit may lead to missed efficiency improvements.',
          recommendation: 'Conduct an energy audit per the EU Energy Efficiency Directive and act on the findings.',
          category: 'Environmental',
        };
      } else if (answer === 'We conducted an audit but have only partially implemented the recommendations.') {
        return {
          level: 'Medium',
          message: 'Audit conducted but recommendations not fully implemented, reducing benefits.',
          recommendation: 'Prioritize implementation of audit recommendations and seek support programs.',
          category: 'Environmental',
        };
      }
      return null;
    },
  },

  // Social
  {
    category: 'Social',
    question: 'To what extent does your supplier code of conduct include social and environmental standards?',
    options: [
      { text: 'We enforce a supplier code of conduct with social & environmental criteria, plus regular audits and remediation.', score: 2 },
      { text: 'We have a supplier code but no systematic auditing or enforcement mechanism.', score: 1 },
      { text: 'We do not have a supplier code of conduct.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not have a supplier code of conduct.') {
        return {
          level: 'High',
          message: 'Absence of supplier standards limits visibility into supply chain risks.',
          recommendation: 'Adopt a supplier code of conduct with clear social and environmental criteria.',
          category: 'Social',
        };
      } else if (answer === 'We have a supplier code but no systematic auditing or enforcement mechanism.') {
        return {
          level: 'Medium',
          message: 'Supplier code exists but lacks enforcement or reporting mechanisms.',
          recommendation: 'Strengthen supplier monitoring and introduce reporting requirements.',
          category: 'Social',
        };
      }
      return null;
    },
  },
  {
    category: 'Social',
    question: 'How consistently does your company provide written contracts to all employees in line with EU labor law?',
    options: [
      { text: 'All employees have standardized written contracts covering their rights, reviewed for compliance with EU law.', score: 2 },
      { text: 'Most employees have written contracts, but some roles or temporary staff are exempt.', score: 1 },
      { text: 'We do not consistently provide written contracts to employees.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not consistently provide written contracts to employees.') {
        return {
          level: 'High',
          message: 'Failure to provide written contracts risks legal penalties and disputes.',
          recommendation: 'Ensure written contracts for all employees under the Transparent and Predictable Working Conditions Directive.',
          category: 'Social',
        };
      } else if (answer === 'Most employees have written contracts, but some roles or temporary staff are exempt.') {
        return {
          level: 'Medium',
          message: 'Inconsistent contracts may lead to inequalities and compliance gaps.',
          recommendation: 'Roll out standardized contracts to all staff regardless of status.',
          category: 'Social',
        };
      }
      return null;
    },
  },
  {
    category: 'Social',
    question: 'Does your company maintain a regularly updated workplace health and safety risk assessment?',
    options: [
      { text: 'We maintain a comprehensive, documented risk assessment updated at least yearly and after major changes.', score: 2 },
      { text: 'We have a risk assessment but it is outdated or only updated periodically without triggers.', score: 1 },
      { text: 'We do not have a documented health and safety risk assessment.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not have a documented health and safety risk assessment.') {
        return {
          level: 'High',
          message: 'Lack of a documented risk assessment can lead to unsafe working conditions.',
          recommendation: 'Conduct and update workplace risk assessments using the EU OiRA tool.',
          category: 'Social',
        };
      } else if (answer === 'We have a risk assessment but it is outdated or only updated periodically without triggers.') {
        return {
          level: 'Medium',
          message: 'Outdated risk assessments may not reflect current workplace hazards.',
          recommendation: 'Review and update assessments whenever conditions change.',
          category: 'Social',
        };
      }
      return null;
    },
  },
  {
    category: 'Social',
    question: 'How standardized are your probationary period arrangements for new employees?',
    options: [
      { text: 'Standardized probation period of up to 6 months for all new hires consistent with EU directives.', score: 2 },
      { text: 'Probation periods vary by role and sometimes extend beyond 6 months.', score: 1 },
      { text: 'We do not have a formal probationary period policy.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not have a formal probationary period policy.') {
        return {
          level: 'High',
          message: 'Absence of standard probationary terms increases legal and equality risks.',
          recommendation: 'Define a clear probationary period of up to 6 months in contracts.',
          category: 'Social',
        };
      } else if (answer === 'Probation periods vary by role and sometimes extend beyond 6 months.') {
        return {
          level: 'Medium',
          message: 'Inconsistent probationary terms can lead to misunderstandings.',
          recommendation: 'Harmonize probationary conditions across all roles.',
          category: 'Social',
        };
      }
      return null;
    },
  },

  // Governance
  {
    category: 'Governance',
    question: 'How comprehensive is your company’s data privacy policy and GDPR compliance?',
    options: [
      { text: 'We have a GDPR-compliant privacy policy, regular audits, and a designated DPO overseeing data protection.', score: 2 },
      { text: 'We have a privacy policy but lack a DPO or formalized GDPR audit process.', score: 1 },
      { text: 'We do not have a formal data privacy policy.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not have a formal data privacy policy.') {
        return {
          level: 'High',
          message: 'No data privacy policy risks severe GDPR fines and reputation loss.',
          recommendation: 'Implement a GDPR-compliant data privacy policy and appoint a DPO if needed.',
          category: 'Governance',
        };
      } else if (answer === 'We have a privacy policy but lack a DPO or formalized GDPR audit process.') {
        return {
          level: 'Medium',
          message: 'Partial GDPR compliance may still leave gaps in data protection.',
          recommendation: 'Perform a data protection impact assessment and close identified gaps.',
          category: 'Governance',
        };
      }
      return null;
    },
  },
  {
    category: 'Governance',
    question: 'Does your company have a documented procedure for data breach notification within 72 hours?',
    options: [
      { text: 'We have a documented incident response plan that ensures authorities are notified within 72 hours.', score: 2 },
      { text: 'We would notify on a breach but lack a formal plan or set timeframe.', score: 1 },
      { text: 'We do not have a procedure for data breach notification.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not have a procedure for data breach notification.') {
        return {
          level: 'High',
          message: 'No breach notification process violates GDPR requirements.',
          recommendation: 'Establish a breach response plan to notify authorities within 72 hours.',
          category: 'Governance',
        };
      } else if (answer === 'We would notify on a breach but lack a formal plan or set timeframe.') {
        return {
          level: 'Medium',
          message: 'Undocumented or untimely processes risk delayed response.',
          recommendation: 'Document clear roles, responsibilities, and timelines for breach reporting.',
          category: 'Governance',
        };
      }
      return null;
    },
  },
  {
    category: 'Governance',
    question: 'How robust is your internal whistleblower reporting channel under the EU Directive?',
    options: [
      { text: 'We operate a secure, confidential whistleblower channel in full compliance with the EU Directive.', score: 2 },
      { text: 'We have a reporting mechanism but it may not fully meet directive requirements.', score: 1 },
      { text: 'We do not offer a formal whistleblower reporting channel.', score: 0 },
    ],
    risk: (answer) => {
      if (answer === 'We do not offer a formal whistleblower reporting channel.') {
        return {
          level: 'High',
          message: 'No whistleblower channel exposes you to legal and ethical risks.',
          recommendation: 'Implement a secure and confidential reporting channel as required for ≥50 employees.',
          category: 'Governance',
        };
      } else if (answer === 'We have a reporting mechanism but it may not fully meet directive requirements.') {
        return {
          level: 'Medium',
          message: 'Non‑compliant channels might not protect whistleblowers adequately.',
          recommendation: 'Review the channel design to ensure confidentiality and anti-retaliation measures.',
          category: 'Governance',
        };
      }
      return null;
    },
  },
];