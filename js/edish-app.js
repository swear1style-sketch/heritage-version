import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CopperplateLanding as CobaltLanding } from './copperplate-engine.js';

// The Edish Connect Official Geometric Emblem SVG
export function BrandEmblem({ size = 32 }) {
  return React.createElement('svg', {
    viewBox: '0 0 36 36',
    fill: 'none',
    width: size,
    height: size,
    style: { display: 'inline-block', verticalAlign: 'middle', marginRight: 10 }
  }, [
    React.createElement('rect', {
      key: 'r',
      x: 2,
      y: 2,
      width: 32,
      height: 32,
      rx: 7,
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeOpacity: 0.8,
      fill: 'none'
    }),
    React.createElement('path', {
      key: 'p',
      d: 'M8 28C8 16.954 16.954 8 28 8',
      stroke: 'currentColor',
      strokeWidth: 2.2,
      strokeLinecap: 'round'
    }),
    React.createElement('line', {
      key: 'l1',
      x1: 18,
      y1: 12,
      x2: 18,
      y2: 24,
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round'
    }),
    React.createElement('line', {
      key: 'l2',
      x1: 12,
      y1: 18,
      x2: 24,
      y2: 18,
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round'
    }),
    React.createElement('circle', {
      key: 'c',
      cx: 18,
      cy: 18,
      r: 2.2,
      fill: 'currentColor'
    })
  ]);
}

// Counting House Calculator Component
export function CountingHouseCalculator({ onOpenModal }) {
  const [teamSize, setTeamSize] = useState(8);
  const [tier, setTier] = useState('fullstack'); // 'fullstack', 'cloud', 'aiml'

  const tierRates = {
    fullstack: { label: 'Front-end, Web & Mobile Pod', usRate: 155000, blrRate: 54000, jprRate: 36000 },
    cloud: { label: 'Back-end, Cloud & DevOps Pod', usRate: 175000, blrRate: 62000, jprRate: 41000 },
    aiml: { label: 'Data, AI & Security Pod', usRate: 195000, blrRate: 72000, jprRate: 46000 }
  };

  const current = tierRates[tier];
  const annualUS = teamSize * current.usRate;
  const annualBlr = teamSize * current.blrRate;
  const annualJpr = teamSize * current.jprRate;
  const netSavingsBlr = annualBlr - annualJpr;
  const netSavingsUS = annualUS - annualJpr;
  const arbitragePercent = Math.round(((annualBlr - annualJpr) / annualBlr) * 100);

  const fmt = (num) => '$' + num.toLocaleString('en-US');

  return React.createElement('section', {
    id: 'calculator',
    className: 'ctl-calc-section',
    'data-sec': 'calculator',
    'aria-label': 'Capability Arbitrage Calculator'
  }, [
    React.createElement('div', { key: 'wrap', className: 'ctl-wrap' }, [
      React.createElement('div', { key: 'head', style: { maxWidth: 680 } }, [
        React.createElement('p', {
          key: 'kicker',
          className: 'ctl-kicker',
          style: { fontFamily: 'var(--ctl-sans)', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '0.75rem', color: 'var(--ctl-ink)', marginBottom: 8 }
        }, 'Capability Arbitrage · Counting House'),
        React.createElement('h2', {
          key: 'title',
          style: { fontFamily: 'var(--ctl-serif)', fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', fontWeight: 400, color: 'var(--ctl-ink)', margin: '0 0 16px 0', lineHeight: 1.15 }
        }, [
          'The Mathematics of ',
          React.createElement('em', { key: 'em', style: { fontStyle: 'italic', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '6px' } }, 'Dedicated Pods')
        ]),
        React.createElement('p', {
          key: 'sub',
          style: { fontFamily: 'var(--ctl-sans)', fontSize: '1rem', color: 'var(--ctl-text)', lineHeight: 1.6 }
        }, 'Model your dedicated tech pod or capability centre in India. Benefit from 58% lower cost than Western in-house teams, 94%+ retention, and 100% Day-One IP sovereignty.')
      ]),

      React.createElement('div', { key: 'grid', className: 'ctl-calc-grid' }, [
        // Left Column: Interactive Parameters
        React.createElement('div', { key: 'controls', className: 'ctl-calc-card' }, [
          React.createElement('div', { key: 'pills-group', className: 'ctl-calc-slider-group' }, [
            React.createElement('div', { className: 'ctl-calc-slider-label' }, [
              React.createElement('span', { key: 'l' }, '1. Engineering Discipline'),
              React.createElement('span', { key: 'v', className: 'ctl-calc-slider-val', style: { fontSize: '1rem' } }, current.label)
            ]),
            React.createElement('div', { className: 'ctl-calc-pills' }, [
              React.createElement('button', {
                key: 'fs',
                type: 'button',
                className: 'ctl-calc-pill' + (tier === 'fullstack' ? ' active' : ''),
                onClick: () => setTier('fullstack')
              }, 'Web & Mobile'),
              React.createElement('button', {
                key: 'cl',
                type: 'button',
                className: 'ctl-calc-pill' + (tier === 'cloud' ? ' active' : ''),
                onClick: () => setTier('cloud')
              }, 'Cloud & DevOps'),
              React.createElement('button', {
                key: 'ai',
                type: 'button',
                className: 'ctl-calc-pill' + (tier === 'aiml' ? ' active' : ''),
                onClick: () => setTier('aiml')
              }, 'Data & AI')
            ])
          ]),

          React.createElement('div', { key: 'team-group', className: 'ctl-calc-slider-group' }, [
            React.createElement('div', { className: 'ctl-calc-slider-label' }, [
              React.createElement('span', { key: 'tl' }, '2. Dedicated Pod Size'),
              React.createElement('span', { key: 'tv', className: 'ctl-calc-slider-val' }, `${teamSize} Engineers`)
            ]),
            React.createElement('input', {
              type: 'range',
              min: 3,
              max: 40,
              step: 1,
              value: teamSize,
              className: 'ctl-calc-slider',
              onChange: (e) => setTeamSize(parseInt(e.target.value, 10))
            }),
            React.createElement('div', {
              style: { display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--ctl-sans)', color: 'var(--ctl-text)', marginTop: 8 }
            }, [
              React.createElement('span', { key: 'min' }, '3 (Focused Pilot)'),
              React.createElement('span', { key: 'mid' }, '15 (Full Guild)'),
              React.createElement('span', { key: 'max' }, '40+ (Turnkey GCC)')
            ])
          ]),

          React.createElement('div', {
            key: 'assurance',
            style: { borderTop: '1px dashed color-mix(in oklab, var(--ctl-ink) 20%, transparent)', paddingTop: 18, marginTop: 12 }
          }, [
            React.createElement('div', {
              style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: '0.82rem', fontFamily: 'var(--ctl-sans)', color: 'var(--ctl-text)' }
            }, [
              React.createElement('div', { key: 'a1' }, '✦ 94%+ Retention SLA'),
              React.createElement('div', { key: 'a2' }, '✦ 100% Day-One IP Ownership'),
              React.createElement('div', { key: 'a3' }, '✦ Rapid 3-Wk Onboarding'),
              React.createElement('div', { key: 'a4' }, '✦ Zero Bench Dilution')
            ])
          ])
        ]),

        // Right Column: The Ledger Output Card
        React.createElement('div', { key: 'ledger', className: 'ctl-ledger-card' }, [
          React.createElement('div', {
            style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(247, 244, 236, 0.2)', paddingBottom: 12, marginBottom: 16 }
          }, [
            React.createElement('span', {
              style: { fontFamily: 'var(--ctl-sans)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.75rem', color: '#F5D48A' }
            }, 'Annual Cost Comparison Ledger'),
            React.createElement('span', {
              style: { fontFamily: 'var(--ctl-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(247, 244, 236, 0.8)' }
            }, `${teamSize} Seats`)
          ]),

          React.createElement('div', { className: 'ctl-ledger-row' }, [
            React.createElement('span', { key: 'l1' }, 'US / Western Europe (In-House)'),
            React.createElement('span', { key: 'v1', className: 'ctl-ledger-val' }, fmt(annualUS))
          ]),

          React.createElement('div', { className: 'ctl-ledger-row' }, [
            React.createElement('span', { key: 'l2' }, 'Tier-1 Metros (Bengaluru / NCR)'),
            React.createElement('span', { key: 'v2', className: 'ctl-ledger-val' }, fmt(annualBlr))
          ]),

          React.createElement('div', {
            className: 'ctl-ledger-row',
            style: { background: 'rgba(245, 212, 138, 0.1)', margin: '4px -12px', padding: '14px 12px', borderBottom: 'none' }
          }, [
            React.createElement('span', { key: 'l3', style: { fontWeight: 600, color: '#F5D48A' } }, 'Edish Connect (Heritage Delivery Pod)'),
            React.createElement('span', { key: 'v3', className: 'ctl-ledger-val', style: { fontWeight: 700, color: '#F5D48A' } }, fmt(annualJpr))
          ]),

          React.createElement('div', { className: 'ctl-ledger-total' }, [
            React.createElement('div', { key: 'tlabel' }, [
              React.createElement('div', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(247, 244, 236, 0.7)' } }, 'Annual Net Arbitrage'),
              React.createElement('div', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.85rem', color: '#F5D48A', marginTop: 4 } }, `${arbitragePercent}% lower than Tier-1 Metros`)
            ]),
            React.createElement('div', { key: 'tamt', className: 'ctl-ledger-savings-amt' }, `${fmt(netSavingsBlr)}/yr`)
          ]),

          React.createElement('div', { style: { marginTop: 28 } }, [
            React.createElement('button', {
              key: 'btn',
              type: 'button',
              className: 'ctl-btn',
              style: { width: '100%', justifyContent: 'center', background: '#F5D48A', color: '#0A192F', borderColor: '#F5D48A', fontWeight: 600 },
              onClick: () => onOpenModal({ teamSize, tier: current.label, savings: fmt(netSavingsBlr) })
            }, [
              React.createElement('span', { key: 'txt' }, 'Start the Conversation →')
            ])
          ])
        ])
      ])
    ])
  ]);
}

// Interactive Consultation Modal Dialog
export function ConsultationModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    podSize: initialData.teamSize || 8,
    model: 'Offshore Development Centre (ODC)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return React.createElement('div', {
    className: 'ctl-modal-backdrop',
    onClick: (e) => { if (e.target === e.currentTarget) onClose(); }
  }, [
    React.createElement('div', { key: 'box', className: 'ctl-modal-box' }, [
      React.createElement('button', {
        key: 'close',
        type: 'button',
        className: 'ctl-modal-close',
        onClick: onClose,
        'aria-label': 'Close dialog'
      }, '✕'),

      submitted ? React.createElement('div', { key: 'success', style: { textAlign: 'center', padding: '30px 10px' } }, [
        React.createElement('div', { style: { fontSize: '2.5rem', marginBottom: 16 } }, '✦'),
        React.createElement('h3', {
          style: { fontFamily: 'var(--ctl-serif)', fontSize: '2rem', fontStyle: 'italic', margin: '0 0 12px 0' }
        }, 'Conversation Request Received'),
        React.createElement('p', {
          style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.95rem', color: 'var(--ctl-text)', lineHeight: 1.6 }
        }, `Thank you, ${formData.name || 'there'}. Our advisory team will review your requirements and get in touch within 24 hours.`),
        React.createElement('button', {
          type: 'button',
          className: 'ctl-btn',
          style: { marginTop: 24 },
          onClick: onClose
        }, React.createElement('span', null, 'Return to Overview'))
      ]) : React.createElement('form', { key: 'form', onSubmit: handleSubmit }, [
        React.createElement('p', {
          key: 'kicker',
          style: { fontFamily: 'var(--ctl-sans)', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: '0.72rem', color: 'var(--ctl-ink)', margin: '0 0 6px 0' }
        }, 'Start The Conversation'),
        React.createElement('h3', {
          key: 'title',
          style: { fontFamily: 'var(--ctl-serif)', fontSize: '1.9rem', fontStyle: 'italic', margin: '0 0 18px 0', lineHeight: 1.2 }
        }, 'Tell Us What You’re Building'),
        React.createElement('p', {
          key: 'desc',
          style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.85rem', color: 'var(--ctl-text)', margin: '0 0 20px 0' }
        }, 'Speak directly with our team. No generic staffing rosters or unsolicited sales pitches.'),

        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 } }, [
          React.createElement('div', { key: 'name-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Your Name'),
            React.createElement('input', {
              required: true,
              type: 'text',
              className: 'ctl-modal-input',
              placeholder: 'e.g. Sarah Jenkins',
              value: formData.name,
              onChange: (e) => setFormData({ ...formData, name: e.target.value })
            })
          ]),
          React.createElement('div', { key: 'email-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Work Email'),
            React.createElement('input', {
              required: true,
              type: 'email',
              className: 'ctl-modal-input',
              placeholder: 'name@company.com',
              value: formData.email,
              onChange: (e) => setFormData({ ...formData, email: e.target.value })
            })
          ])
        ]),

        React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 } }, [
          React.createElement('div', { key: 'company-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Company'),
            React.createElement('input', {
              required: true,
              type: 'text',
              className: 'ctl-modal-input',
              placeholder: 'e.g. Acme Health',
              value: formData.company,
              onChange: (e) => setFormData({ ...formData, company: e.target.value })
            })
          ]),
          React.createElement('div', { key: 'model-field' }, [
            React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Team Model'),
            React.createElement('select', {
              className: 'ctl-modal-input',
              value: formData.model,
              onChange: (e) => setFormData({ ...formData, model: e.target.value })
            }, [
              React.createElement('option', { key: 'm1', value: 'Offshore Development Centre (ODC)' }, 'Offshore Development Centre (ODC)'),
              React.createElement('option', { key: 'm2', value: 'Global Capability Centre (GCC)' }, 'Global Capability Centre (GCC)'),
              React.createElement('option', { key: 'm3', value: 'Build-Operate-Transfer (BOT)' }, 'Build-Operate-Transfer (BOT)'),
              React.createElement('option', { key: 'm4', value: 'Staff Augmentation (4–10 Engineers)' }, 'Staff Augmentation (4–10 Engineers)')
            ])
          ])
        ]),

        React.createElement('div', { key: 'notes-field' }, [
          React.createElement('label', { style: { fontFamily: 'var(--ctl-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' } }, 'Project Scope & Stack'),
          React.createElement('textarea', {
            className: 'ctl-modal-input',
            style: { height: 70, resize: 'none' },
            placeholder: 'e.g. Looking for 6 senior Go/React engineers to build out our payments pipeline...',
            value: formData.notes,
            onChange: (e) => setFormData({ ...formData, notes: e.target.value })
          })
        ]),

        React.createElement('button', {
          key: 'sub-btn',
          type: 'submit',
          className: 'ctl-btn',
          style: { width: '100%', justifyContent: 'center', marginTop: 10 }
        }, React.createElement('span', null, 'Send Enquiry →'))
      ])
    ])
  ]);
}

// Master Edish Connect App Component
export default function EdishApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (data = {}) => {
    setModalData(data);
    setModalOpen(true);
  };

  const navItems = [
    { label: "What we do", href: "#solutions" },
    { label: "How teams grow", href: "#services" },
    { label: "ODC, GCC, BOT", href: "#solutions" },
    { label: "Our culture", href: "#about" },
    { label: "Calculator", href: "#calculator" }
  ];

  const heroData = {
    title: "Dedicated teams,\nbuilt at your comfort.",
    subtitle: "Build GCCs and ODCs with precision.",
    action: { label: "Start the conversation", href: "#contact" },
    est: "EST. INDIA",
    edition: "TWO FORCES · ONE DISCIPLINE"
  };

  const clientList = [
    "FinTech UK",
    "Enterprise Cloud",
    "Sovereign Health",
    "PNC Financial",
    "Bank of America",
    "Xponentium",
    "Atos",
    "Material+"
  ];

  const aboutData = {
    kicker: "Two Forces, One Discipline · Est. India",
    statement: "In India there's a famous statue of *Aryabhata*, the astronomer who gave the world zero. He isn't holding a sword. *He's holding a book.*",
    body: "That is how we think about software engineering. The E is engineering: software that works, tested properly and looked after once it's live. The I is inspiration: the ideas, values and culture a team brings to the work. Engineering without inspiration creates systems. Inspiration without engineering creates ideas. Together, they build the future.",
    stats: [
      { value: 58, suffix: "%", label: "Cost Arbitrage vs Western Hubs" },
      { value: 94, suffix: "%", label: "Long-Term Team Retention SLA" },
      { value: 100, suffix: "%", label: "Day-One IP Sovereignty" }
    ],
    seal: "Edish Connect · Architectural Precision · Indian Heritage · Engineering Meets Inspiration · "
  };

  const solutionsCopy = {
    kicker: "Centre Models",
    title: "ODC, GCC or BOT? *Three ways to have a centre of your own in India*",
    intro: "Three ways to have a centre of your own in India. The difference is who runs it and who owns it. Most companies start with an ODC."
  };

  const solutionsList = [
    {
      kicker: "Model I — We Run It",
      title: "Offshore Development Centre (ODC)",
      quote: "A team building your software from our office, managed by us.",
      body: "Developers, QA and designers on your product full time, working from our premises. We hire the engineers, manage day-to-day HR, and maintain Class-A infrastructure. You can set it all up over video calls without an Indian entity.",
      points: [
        "Developers, QA and designers on your product full time",
        "We hire the people and manage them day to day",
        "The team works from our premises",
        "You can set it all up over video calls"
      ],
      art: "typewriter",
      tone: "paper"
    },
    {
      kicker: "Model II — You Own It",
      title: "Global Capability Centre (GCC)",
      quote: "Your own company in India, with more than engineering in it.",
      body: "Engineering alongside HR, finance, marketing, legal or R&D. It's your company, and you manage it. We find the office space, incorporate the entity, and hire the key roles, staying involved until it runs autonomously.",
      points: [
        "Engineering alongside HR, finance, marketing or R&D",
        "It's your company, and you manage it directly",
        "We find office space and hire leadership",
        "We stay involved until it runs on its own"
      ],
      art: "steamer",
      tone: "ink"
    },
    {
      kicker: "Model III — Handed Over",
      title: "Build, Operate, Transfer (BOT)",
      quote: "We build the centre, run it, then transfer it to you.",
      body: "We set up and run the centre for an agreed period with fixed costs and team size. When it's stable and seasoned, the entire organisation—people, leases, and infrastructure—moves seamlessly over to you. You take over something that already works.",
      points: [
        "We set up and run the centre for an agreed period",
        "Size and cost are agreed at the start",
        "When stable, the team and setup move to you",
        "You take over something that already works"
      ],
      art: "monogram",
      tone: "paper"
    },
    {
      kicker: "Model IV — Start Small",
      title: "Dedicated Engineering Pods",
      quote: "A few engineers: staff augmentation usually 4 to 10 people.",
      body: "Good for a startup or an immediate sprint project. The engineers join your team, attend your daily standups, use your tools (Slack, Jira, GitHub), and report directly to your engineering leads.",
      points: [
        "Rapid 3-week engineer onboarding",
        "Direct sprint integration & GitHub PRs",
        "Single-client exclusivity with zero bench dilution",
        "Move up to an ODC when the work expands"
      ],
      art: "tower",
      tone: "ink"
    }
  ];

  const servicesCopy = {
    kicker: "How Teams Grow",
    title: "One step at a time: *The growth journey*",
    intro: "Most companies start small. Take on a few engineers, then move up a step when the work grows. Nobody has to commit to a whole centre on day one."
  };

  const servicesList = [
    {
      title: "Step 1: A few engineers (Staff Augmentation)",
      summary: "Staff augmentation · usually 4 to 10 people. Good for a startup or a single project.",
      details: "The engineers join your team, use your tools and report to your leads. Immediate delivery velocity without long-term legal overhead.",
      deliverables: ["Senior Vetted Engineers", "Direct Sprint Reporting", "Tooling & Slack Integration"],
      duration: "Immediate"
    },
    {
      title: "Step 2: A dedicated team",
      summary: "Dedicated team · often 15 or more. People who work on nothing else.",
      details: "Once the product takes off, it needs people who work on nothing else. We put that team together and keep it stable with 94%+ retention.",
      deliverables: ["Dedicated Pod Structure", "Technical Lead Alignment", "Stable Knowledge Retention"],
      duration: "Months 2–6"
    },
    {
      title: "Step 3: A development centre (ODC)",
      summary: "ODC · often 50 or more developers, QA and designers full time.",
      details: "Working from our office premises. We run the centre and manage the people day to day, giving you a massive footprint in India with zero entity setup.",
      deliverables: ["Turnkey Office Facilities", "Local Management & HR", "SOC2 / ISO Security Standards"],
      duration: "Months 6–12"
    },
    {
      title: "Step 4: A capability centre (GCC)",
      summary: "GCC · more than engineering: your own registered company in India.",
      details: "Your own company in India, with HR, finance, marketing, legal or R&D next to engineering. You run it, and we help you incorporate and build it.",
      deliverables: ["Legal Entity Incorporation", "Multi-Disciplinary Teams", "Dedicated Class-A Campus"],
      duration: "Months 12–18"
    },
    {
      title: "Step 5: Take it over (BOT Transfer)",
      summary: "BOT · build, operate, transfer: the entire organisation moves over to you.",
      details: "We build the centre and run it until it's completely stable. Then the whole thing, people and infrastructure included, moves over to you.",
      deliverables: ["Full Statutory Equity Transfer", "Direct Novation", "Zero Disruption Handover"],
      duration: "Months 18–24"
    }
  ];

  const pressCopy = {
    kicker: "Philosophy & FAQ",
    title: "Culture is part of the work",
    intro: "A company setting up in India wants a team that works the way it does. So we match people to your values as well as your tech stack across Jaipur, Indore, Hyderabad and Visakhapatnam."
  };

  const pressList = [
    {
      title: "Aryabhata's Book: Why Mathematical Precision Outlasts Speed in Software Architecture",
      source: "Heritage & Engineering",
      date: "October 24, 2026",
      category: "Philosophy"
    },
    {
      title: "What's the Difference Between an ODC and a GCC? An Executive Decision Guide",
      source: "Capability Digest",
      date: "November 14, 2026",
      category: "Guide"
    },
    {
      title: "From 5 Engineers to an ODC: Scaling Software Teams in India Step by Step",
      source: "Enterprise Scale",
      date: "November 12, 2026",
      category: "Framework"
    },
    {
      title: "Beyond the Metros: Why Engineering Centers Are Thriving in Jaipur, Indore & Hyderabad",
      source: "Regional Analysis",
      date: "September 18, 2026",
      category: "Talent"
    }
  ];

  const notesList = [
    {
      title: "Precision: Built to Last",
      body: "Stone masons in India spend months carving a single jali screen. We look for engineers who take the same care with code architecture, clean tests, and maintainable systems."
    },
    {
      title: "Hospitality: Atithi Devo Bhava",
      body: "A culture of hospitality turns into software teams who talk clearly, own up to mistakes early, communicate transparently, and welcome you warmly when you visit."
    },
    {
      title: "Mastery: Deep Discipline",
      body: "Traditional Indian crafts take years to learn properly. We look for engineers who've gone that deep in one thing, whether it's React, Go, cloud infrastructure or data pipelines."
    },
    {
      title: "100% Day-One IP Sovereignty",
      body: "Every line of code and architectural artifact is created directly in your repositories from day one. You retain full ownership with zero bench dilution."
    }
  ];

  const contactBandData = {
    title: "Tell us what you're *building*.",
    body: "Send us an email or book a call. We'll talk through your stack, the kind of team you need, and how quickly we can put it together.",
    action: { label: "Start the conversation", href: "#contact" },
    secondary: { label: "Explore the 5 steps", href: "#services" }
  };

  const contactData = {
    email: "advisory@edishconnect.com",
    phone: "+91 (141) 281-0172",
    location: "India (Jaipur, Indore, Hyderabad) · London · Singapore"
  };

  const columnsData = [
    {
      title: "What We Do",
      links: [
        { label: "Front-end & Web", href: "#solutions" },
        { label: "Back-end & APIs", href: "#solutions" },
        { label: "Cloud & DevOps", href: "#solutions" },
        { label: "Data & AI", href: "#solutions" }
      ]
    },
    {
      title: "Centre Models",
      links: [
        { label: "Offshore Centre (ODC)", href: "#solutions" },
        { label: "Capability Centre (GCC)", href: "#solutions" },
        { label: "Build-Operate-Transfer (BOT)", href: "#solutions" },
        { label: "Dedicated Pods", href: "#solutions" }
      ]
    },
    {
      title: "Direct Access",
      links: [
        { label: "Start the Conversation", href: "#contact" },
        { label: "Arbitrage Calculator", href: "#calculator" },
        { label: "The 5-Step Staircase", href: "#services" },
        { label: "Our Culture", href: "#about" }
      ]
    }
  ];

  return React.createElement(React.Fragment, null, [
    React.createElement(CobaltLanding, {
      key: 'landing',
      brand: "EDISH CONNECT",
      monogram: "E",
      logo: React.createElement(BrandEmblem, { size: 28 }),
      nav: navItems,
      cta: { label: "Start the conversation", href: "#contact" },
      hero: heroData,
      clients: clientList,
      clientsLabel: "Trusted by fast-growing businesses and enterprise teams globally",
      about: aboutData,
      solutionsCopy: solutionsCopy,
      solutions: solutionsList,
      servicesCopy: servicesCopy,
      services: servicesList,
      pressCopy: pressCopy,
      press: pressList,
      notes: notesList,
      contactBand: contactBandData,
      contact: contactData,
      tagline: "Dedicated teams, built at your comfort.",
      columns: columnsData,
      copyright: "© 2026 Edish Connect. All rights reserved. Engineering Meets Inspiration.",
      palette: "navy",
      intro: false,
      calculator: React.createElement(CountingHouseCalculator, {
        key: 'calc',
        onOpenModal: handleOpenModal
      }),
      onOpenModal: () => handleOpenModal()
    }),

    // Injected Consultation Modal
    React.createElement(ConsultationModal, {
      key: 'modal',
      isOpen: modalOpen,
      initialData: modalData,
      onClose: () => setModalOpen(false)
    })
  ]);
}
