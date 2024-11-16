export const mockProjects = [
  {
    id: "proj-001",
    name: "Clean Water Initiative - Lake Victoria",
    description:
      "Comprehensive water purification and distribution system implementation for remote villages surrounding Lake Victoria. The project includes installation of solar-powered filtration systems, community training programs, and sustainable maintenance protocols.",
    category: "Environment",
    subcategory: "Water Access",
    funding_goal: 75000,
    current_funding: 52350,
    status: "ACTIVE",
    created_at: "2024-01-15T08:00:00Z",
    deadline: "2024-12-31",
    location: {
      country: "Kenya",
      region: "Nyanza",
      coordinates: {
        latitude: -0.41,
        longitude: 34.28,
      },
    },
    impact_metrics: {
      beneficiaries: 2500,
      direct_beneficiaries: 1800,
      indirect_beneficiaries: 700,
      timeframe: "18 months",
      sustainability_period: "10 years",
      outcomes: [
        "Clean water access for 500 families",
        "Reduced waterborne diseases by 75%",
        "30% decrease in water collection time",
        "5 local jobs created for system maintenance",
      ],
      sdg_alignment: ["SDG 6", "SDG 3", "SDG 8"],
      environmental_impact: {
        water_saved: "1.2M liters annually",
        carbon_reduction: "5 tons annually",
        renewable_energy_used: true,
      },
    },
    impact_summary:
      "Transformative clean water access project benefiting 2500 people through sustainable infrastructure",
    team: {
      project_lead: {
        name: "Dr. Sarah Kimani",
        role: "Water Resource Engineer",
        experience: "15 years",
      },
      members: [
        {
          name: "John Ochieng",
          role: "Community Liaison",
          experience: "8 years",
        },
        {
          name: "Emily Wangari",
          role: "Environmental Specialist",
          experience: "10 years",
        },
      ],
      partners: ["WaterAid", "Local Government", "Community Council"],
    },
    milestones: [
      {
        phase: 1,
        title: "Initial Assessment and Community Engagement",
        status: "Completed",
        completion_date: "2024-03-15",
      },
      {
        phase: 2,
        title: "Infrastructure Development",
        status: "In Progress",
        completion_date: "2024-07-30",
      },
      {
        phase: 3,
        title: "Community Training",
        status: "Pending",
        completion_date: "2024-10-15",
      },
    ],
    budget_breakdown: {
      equipment: 35000,
      labor: 15000,
      training: 10000,
      maintenance: 8000,
      monitoring: 7000,
    },
    risk_assessment: {
      risk_level: "Medium",
      key_risks: [
        {
          type: "Environmental",
          description: "Seasonal flooding",
          mitigation: "Elevated infrastructure design",
        },
        {
          type: "Social",
          description: "Community adoption",
          mitigation: "Extensive community engagement program",
        },
      ],
    },
  },
  {
    id: "proj-002",
    name: "Solar-Powered Schools Initiative",
    description:
      "Comprehensive solar energy installation project for rural schools in Tanzania, including digital learning resources and teacher training programs.",
    category: "Education",
    subcategory: "Renewable Energy",
    funding_goal: 120000,
    current_funding: 85600,
    status: "ACTIVE",
    created_at: "2024-02-01T09:30:00Z",
    deadline: "2025-01-31",
    location: {
      country: "Tanzania",
      region: "Arusha",
      coordinates: {
        latitude: -3.37,
        longitude: 36.68,
      },
    },
    impact_metrics: {
      beneficiaries: 3500,
      direct_beneficiaries: 3000,
      indirect_beneficiaries: 500,
      timeframe: "24 months",
      sustainability_period: "15 years",
      outcomes: [
        "Reliable electricity for 12 schools",
        "Digital learning access for 3000 students",
        "Reduced energy costs by 90%",
        "Enhanced evening study programs",
        "Teacher training in digital resources",
      ],
      sdg_alignment: ["SDG 4", "SDG 7", "SDG 13"],
      environmental_impact: {
        carbon_reduction: "45 tons annually",
        renewable_energy_generated: "75MWh annually",
        trees_preserved: 200,
      },
    },
    impact_summary: "Transforming rural education through sustainable energy and digital resources",
    team: {
      project_lead: {
        name: "Michael Mwangi",
        role: "Renewable Energy Expert",
        experience: "12 years",
      },
      members: [
        {
          name: "Grace Mushi",
          role: "Education Specialist",
          experience: "9 years",
        },
        {
          name: "Robert Sangi",
          role: "Technical Director",
          experience: "15 years",
        },
      ],
      partners: ["UNESCO", "Ministry of Education", "Local School Board"],
    },
    milestones: [
      {
        phase: 1,
        title: "School Assessment and Planning",
        status: "Completed",
        completion_date: "2024-04-30",
      },
      {
        phase: 2,
        title: "Solar Installation",
        status: "In Progress",
        completion_date: "2024-09-30",
      },
      {
        phase: 3,
        title: "Digital Resource Implementation",
        status: "Pending",
        completion_date: "2024-12-31",
      },
    ],
    budget_breakdown: {
      solar_equipment: 65000,
      installation: 25000,
      training: 15000,
      digital_resources: 10000,
      maintenance_fund: 5000,
    },
    risk_assessment: {
      risk_level: "Low",
      key_risks: [
        {
          type: "Technical",
          description: "Equipment maintenance",
          mitigation: "Local technician training program",
        },
        {
          type: "Operational",
          description: "Internet connectivity",
          mitigation: "Satellite internet backup systems",
        },
      ],
    },
  },
  {
    id: "proj-003",
    name: "Urban Farming Innovation Hub",
    description:
      "Creating sustainable urban farming solutions using vertical farming technology and smart irrigation systems in densely populated areas of Singapore.",
    category: "Agriculture",
    subcategory: "Urban Development",
    funding_goal: 250000,
    current_funding: 175000,
    status: "ACTIVE",
    created_at: "2024-03-01T10:00:00Z",
    deadline: "2025-03-31",
    location: {
      country: "Singapore",
      region: "Ang Mo Kio",
      coordinates: {
        latitude: 1.37,
        longitude: 103.85,
      },
    },
    impact_metrics: {
      beneficiaries: 15000,
      direct_beneficiaries: 5000,
      indirect_beneficiaries: 10000,
      timeframe: "24 months",
      sustainability_period: "20 years",
      outcomes: [
        "Production of 50 tons of vegetables annually",
        "Creation of 25 green-collar jobs",
        "Reduction in food transportation emissions",
        "Knowledge transfer to 100 urban farmers",
        "Development of 3 new farming technologies",
      ],
      sdg_alignment: ["SDG 2", "SDG 11", "SDG 13"],
      environmental_impact: {
        water_saved: "5M liters annually",
        carbon_reduction: "30 tons annually",
        land_optimization: "90% space efficiency",
      },
    },
    impact_summary: "Revolutionary urban farming project promoting food security and sustainability",
    team: {
      project_lead: {
        name: "Dr. Lisa Chen",
        role: "Agricultural Innovation Specialist",
        experience: "18 years",
      },
      members: [
        {
          name: "David Tan",
          role: "Technology Director",
          experience: "12 years",
        },
        {
          name: "Maria Wong",
          role: "Community Engagement Manager",
          experience: "8 years",
        },
      ],
      partners: ["Singapore Food Agency", "Urban Redevelopment Authority", "Local Universities"],
    },
    milestones: [
      {
        phase: 1,
        title: "Site Development and System Design",
        status: "Completed",
        completion_date: "2024-05-31",
      },
      {
        phase: 2,
        title: "Infrastructure Implementation",
        status: "In Progress",
        completion_date: "2024-10-31",
      },
      {
        phase: 3,
        title: "Community Training and Operation",
        status: "Pending",
        completion_date: "2025-02-28",
      },
    ],
    budget_breakdown: {
      infrastructure: 100000,
      technology_systems: 75000,
      training_programs: 35000,
      research_development: 25000,
      operational_costs: 15000,
    },
    risk_assessment: {
      risk_level: "Medium",
      key_risks: [
        {
          type: "Technical",
          description: "System optimization",
          mitigation: "Continuous monitoring and adjustment protocols",
        },
        {
          type: "Market",
          description: "Production costs",
          mitigation: "Economies of scale and technology optimization",
        },
        {
          type: "Environmental",
          description: "Climate control",
          mitigation: "Advanced environmental management systems",
        },
      ],
    },
  },
  {
    id: "proj-004",
    name: "Women's Tech Empowerment Network",
    description:
      "Comprehensive technology education and entrepreneurship program for women in underserved communities across Brazil, focusing on software development, digital marketing, and tech entrepreneurship.",
    category: "Education",
    subcategory: "Gender Equality",
    funding_goal: 180000,
    current_funding: 142000,
    status: "ACTIVE",
    created_at: "2024-02-15T14:00:00Z",
    deadline: "2025-02-28",
    location: {
      country: "Brazil",
      region: "São Paulo",
      coordinates: {
        latitude: -23.55,
        longitude: -46.63,
      },
    },
    impact_metrics: {
      beneficiaries: 5000,
      direct_beneficiaries: 1000,
      indirect_beneficiaries: 4000,
      timeframe: "24 months",
      sustainability_period: "5 years",
      outcomes: [
        "Train 1000 women in tech skills",
        "Launch 100 women-led tech startups",
        "Create tech mentorship network of 200 professionals",
        "Achieve 75% job placement rate",
        "Generate $2M in new business revenue",
      ],
      sdg_alignment: ["SDG 4", "SDG 5", "SDG 8", "SDG 10"],
      economic_impact: {
        projected_income_increase: "300%",
        new_jobs_created: 250,
        business_launches: 100,
      },
    },
    impact_summary: "Transforming lives through technology education and entrepreneurship opportunities for women",
    team: {
      project_lead: {
        name: "Ana Silva",
        role: "Program Director",
        experience: "14 years",
      },
      members: [
        {
          name: "Isabella Santos",
          role: "Technology Curriculum Developer",
          experience: "9 years",
        },
        {
          name: "Lucia Oliveira",
          role: "Entrepreneurship Mentor",
          experience: "11 years",
        },
      ],
      partners: ["Google Brazil", "Local Tech Companies", "Women in Tech Brazil"],
    },
    milestones: [
      {
        phase: 1,
        title: "Curriculum Development and Partner Engagement",
        status: "Completed",
        completion_date: "2024-04-30",
      },
      {
        phase: 2,
        title: "First Cohort Training",
        status: "In Progress",
        completion_date: "2024-08-31",
      },
      {
        phase: 3,
        title: "Incubator Launch",
        status: "Pending",
        completion_date: "2024-12-31",
      },
    ],
    budget_breakdown: {
      training_facilities: 50000,
      equipment: 40000,
      instructors: 35000,
      curriculum: 25000,
      mentorship_program: 20000,
      incubator_support: 10000,
    },
    risk_assessment: {
      risk_level: "Low",
      key_risks: [
        {
          type: "Social",
          description: "Participant retention",
          mitigation: "Flexible learning schedules and childcare support",
        },
        {
          type: "Economic",
          description: "Market absorption",
          mitigation: "Strong industry partnerships and job placement program",
        },
      ],
    },
  },
  {
    id: "proj-005",
    name: "Marine Ecosystem Restoration Project",
    description:
      "Large-scale coral reef restoration and marine biodiversity protection initiative in the Great Barrier Reef, utilizing innovative biotechnology and community-based conservation approaches.",
    category: "Environment",
    subcategory: "Marine Conservation",
    funding_goal: 500000,
    current_funding: 325000,
    status: "ACTIVE",
    created_at: "2024-01-20T09:00:00Z",
    deadline: "2025-06-30",
    location: {
      country: "Australia",
      region: "Queensland",
      coordinates: {
        latitude: -18.28,
        longitude: 147.7,
      },
    },
    impact_metrics: {
      beneficiaries: 50000,
      direct_beneficiaries: 15000,
      indirect_beneficiaries: 35000,
      timeframe: "36 months",
      sustainability_period: "25 years",
      outcomes: [
        "Restore 10,000 square meters of coral reef",
        "Increase marine biodiversity by 40%",
        "Establish 5 new protected marine areas",
        "Train 200 local conservation leaders",
        "Support 1000 sustainable fishing jobs",
      ],
      sdg_alignment: ["SDG 14", "SDG 13", "SDG 8", "SDG 15"],
      environmental_impact: {
        species_protected: 250,
        carbon_sequestration: "1000 tons annually",
        waste_removed: "50 tons annually",
        water_quality_improvement: "35%",
      },
    },
    impact_summary:
      "Comprehensive marine ecosystem restoration protecting biodiversity and supporting coastal communities",
    team: {
      project_lead: {
        name: "Dr. James Wilson",
        role: "Marine Biologist",
        experience: "20 years",
      },
      members: [
        {
          name: "Dr. Emma Thompson",
          role: "Conservation Scientist",
          experience: "15 years",
        },
        {
          name: "Mark Johnson",
          role: "Community Engagement Director",
          experience: "12 years",
        },
      ],
      partners: ["Great Barrier Reef Foundation", "Local Indigenous Communities", "Marine Research Centers"],
    },
    milestones: [
      {
        phase: 1,
        title: "Baseline Assessment and Planning",
        status: "Completed",
        completion_date: "2024-04-30",
      },
      {
        phase: 2,
        title: "Coral Restoration Implementation",
        status: "In Progress",
        completion_date: "2024-12-31",
      },
      {
        phase: 3,
        title: "Protected Area Establishment",
        status: "Pending",
        completion_date: "2025-03-31",
      },
    ],
    budget_breakdown: {
      research_equipment: 150000,
      restoration_materials: 125000,
      scientific_team: 100000,
      community_programs: 75000,
      monitoring_systems: 50000,
    },
    risk_assessment: {
      risk_level: "High",
      key_risks: [
        {
          type: "Environmental",
          description: "Climate change impacts",
          mitigation: "Heat-resistant coral species selection",
        },
        {
          type: "Operational",
          description: "Weather conditions",
          mitigation: "Flexible implementation schedule",
        },
        {
          type: "Social",
          description: "Stakeholder alignment",
          mitigation: "Extensive community consultation process",
        },
      ],
    },
  },
  {
    id: "proj-006",
    name: "Rural Healthcare Innovation Hub",
    description:
      "Comprehensive healthcare access project combining mobile clinics, telemedicine, and AI-powered diagnostics to serve remote communities in rural India.",
    category: "Healthcare",
    subcategory: "Rural Access",
    funding_goal: 300000,
    current_funding: 215000,
    status: "ACTIVE",
    created_at: "2024-03-01T11:00:00Z",
    deadline: "2025-05-31",
    location: {
      country: "India",
      region: "Bihar",
      coordinates: {
        latitude: 25.59,
        longitude: 85.13,
      },
    },
    impact_metrics: {
      beneficiaries: 100000,
      direct_beneficiaries: 75000,
      indirect_beneficiaries: 25000,
      timeframe: "24 months",
      sustainability_period: "10 years",
      outcomes: [
        "Serve 100,000 patients annually",
        "Reduce maternal mortality by 60%",
        "Increase vaccination rates by 80%",
        "Train 500 community health workers",
        "Implement 20 mobile clinic units",
      ],
      sdg_alignment: ["SDG 3", "SDG 10", "SDG 5"],
      healthcare_impact: {
        lives_saved: "500 annually",
        disease_prevention: "70% reduction",
        health_education: "50000 people reached",
        early_diagnosis: "40% improvement",
      },
    },
    impact_summary: "Revolutionary healthcare delivery model transforming rural health outcomes",
    team: {
      project_lead: {
        name: "Dr. Priya Patel",
        role: "Healthcare Innovation Director",
        experience: "16 years",
      },
      members: [
        {
          name: "Dr. Rajesh Kumar",
          role: "Medical Director",
          experience: "12 years",
        },
        {
          name: "Anita Sharma",
          role: "Technology Implementation Lead",
          experience: "8 years",
        },
      ],
      partners: ["State Health Department", "Medical Technology Companies", "Local NGOs"],
    },
    milestones: [
      {
        phase: 1,
        title: "Community Need Assessment",
        status: "Completed",
        completion_date: "2024-05-31",
      },
      {
        phase: 2,
        title: "Mobile Clinic Deployment",
        status: "In Progress",
        completion_date: "2024-09-30",
      },
      {
        phase: 3,
        title: "Telemedicine Network Launch",
        status: "Pending",
        completion_date: "2024-12-31",
      },
    ],
    budget_breakdown: {
      mobile_clinics: 120000,
      medical_equipment: 80000,
      technology_infrastructure: 50000,
      training_programs: 30000,
      operational_costs: 20000,
    },
    risk_assessment: {
      risk_level: "Medium",
      key_risks: [
        {
          type: "Infrastructure",
          description: "Internet connectivity",
          mitigation: "Satellite-based backup systems",
        },
        {
          type: "Operational",
          description: "Staff retention",
          mitigation: "Competitive packages and professional development",
        },
        {
          type: "Technical",
          description: "Equipment maintenance",
          mitigation: "Local technical training and spare parts inventory",
        },
      ],
    },
  },
  {
    id: "proj-007",
    name: "Zero Waste City Initiative",
    description:
      "Comprehensive urban waste management transformation program implementing circular economy principles, smart waste collection, and community recycling in Mexico City.",
    category: "Environment",
    subcategory: "Waste Management",
    funding_goal: 400000,
    current_funding: 280000,
    status: "ACTIVE",
    created_at: "2024-02-10T13:00:00Z",
    deadline: "2025-04-30",
    location: {
      country: "Mexico",
      region: "Mexico City",
      coordinates: {
        latitude: 19.43,
        longitude: -99.13,
      },
    },
    impact_metrics: {
      beneficiaries: 500000,
      direct_beneficiaries: 200000,
      indirect_beneficiaries: 300000,
      timeframe: "30 months",
      sustainability_period: "15 years",
      outcomes: [
        "Reduce landfill waste by 70%",
        "Create 300 green jobs",
        "Establish 50 community recycling centers",
        "Process 1000 tons of organic waste daily",
        "Launch 100 zero-waste businesses",
      ],
      sdg_alignment: ["SDG 11", "SDG 12", "SDG 13", "SDG 8"],
      environmental_impact: {
        waste_diverted: "100000 tons annually",
        emissions_reduced: "50000 tons CO2e",
        water_saved: "10M liters annually",
        green_jobs_created: 300,
      },
    },
    impact_summary: "Transforming urban waste management through innovative circular economy solutions",
    team: {
      project_lead: {
        name: "Carlos Rodriguez",
        role: "Urban Sustainability Director",
        experience: "15 years",
      },
      members: [
        {
          name: "Maria Gonzalez",
          role: "Circular Economy Specialist",
          experience: "10 years",
        },
        {
          name: "Juan Martinez",
          role: "Community Engagement Manager",
          experience: "8 years",
        },
      ],
      partners: ["City Government", "Recycling Companies", "Environmental NGOs"],
    },
    milestones: [
      {
        phase: 1,
        title: "Infrastructure Development",
        status: "Completed",
        completion_date: "2024-06-30",
      },
      {
        phase: 2,
        title: "Smart Collection System Implementation",
        status: "In Progress",
        completion_date: "2024-11-30",
      },
      {
        phase: 3,
        title: "Community Program Scaling",
        status: "Pending",
        completion_date: "2025-03-31",
      },
    ],
    budget_breakdown: {
      infrastructure: 150000,
      technology_systems: 100000,
      community_programs: 75000,
      equipment: 50000,
      operation_costs: 25000,
    },
    risk_assessment: {
      risk_level: "Medium",
      key_risks: [
        {
          type: "Behavioral",
          description: "Community adoption",
          mitigation: "Extensive education and incentive programs",
        },
        {
          type: "Technical",
          description: "System integration",
          mitigation: "Phased implementation approach",
        },
        {
          type: "Financial",
          description: "Market fluctuations",
          mitigation: "Diverse revenue streams from recycled materials",
        },
      ],
    },
  },
];
