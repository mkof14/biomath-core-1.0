export type Service = {
  title: string;
  description: string;
  category: string;
  reportComment: string;
};

const servicesData: Service[] = [
  {
    title: "Remote Patient Monitoring",
    description:
      "Track patient vitals and health status remotely in real time.",
    category: "Critical Health",
    reportComment:
      "This report provides insights into your health trends from remote monitoring data.",
  },
  {
    title: "Clinical Trial Matching",
    description: "Find suitable clinical trials based on your medical profile.",
    category: "Critical Health",
    reportComment:
      "Based on your profile, these clinical trials may be relevant for your condition.",
  },
  {
    title: "Post-Surgical Recovery Trackers",
    description:
      "Monitor recovery progress and receive guidance after surgery.",
    category: "Critical Health",
    reportComment:
      "This tracker outlines your post-surgical recovery metrics and recommendations.",
  },
  {
    title: "Post-Discharge Home Care",
    description: "Personalized care plans after hospital discharge.",
    category: "Critical Health",
    reportComment:
      "Your personalized home care plan includes instructions and recovery goals.",
  },
  {
    title: "Chronic Disease Management",
    description: "Support tools and plans for chronic condition control.",
    category: "Critical Health",
    reportComment:
      "This report summarizes management strategies tailored to your chronic condition.",
  },
  {
    title: "Oncology Support",
    description: "Resources and monitoring tools for cancer patients.",
    category: "Critical Health",
    reportComment:
      "Your oncology support insights are provided based on current treatment data.",
  },
  {
    title: "Emergency Assistance & Alerts",
    description: "Emergency protocols and real-time alert systems.",
    category: "Critical Health",
    reportComment:
      "Your emergency readiness status and alert setup details are included in this report.",
  },
  {
    title: "Digital Therapy",
    description: "Access therapeutic tools and AI-guided sessions.",
    category: "Critical Health",
    reportComment:
      "Your digital therapy usage and progress are summarized here.",
  },
  {
    title: "Disease Risk Assessment",
    description: "Analyze biomarkers and history to assess health risks.",
    category: "Critical Health",
    reportComment:
      "This analysis outlines your potential risks for common conditions based on current data.",
  },
  {
    title: "Medication Adherence Support",
    description: "Tools to track and improve medication consistency.",
    category: "Critical Health",
    reportComment:
      "This report evaluates your adherence to prescribed medications and provides suggestions.",
  },
  {
    title: "Telemedicine Consultations",
    description: "Schedule and track virtual doctor visits.",
    category: "Critical Health",
    reportComment:
      "This summary reflects your recent telemedicine consultations and advice received.",
  },
  {
    title: "Pain Management",
    description: "Track pain levels and receive relief recommendations.",
    category: "Critical Health",
    reportComment:
      "This report outlines your pain trends and management options.",
  },
  {
    title: "Stroke Recovery",
    description: "Monitor rehabilitation after stroke events.",
    category: "Critical Health",
    reportComment:
      "Your stroke recovery progress and personalized recommendations are shown below.",
  },
  {
    title: "Immune System Support",
    description: "Insights into immune function and optimization tips.",
    category: "Critical Health",
    reportComment:
      "Your immune status and supportive strategies are included in this report.",
  },
  {
    title: "Diabetes Management",
    description: "Monitor glucose levels and receive actionable insights.",
    category: "Critical Health",
    reportComment:
      "This summary includes your diabetes data and key trends for optimal management.",
  },
];

export default servicesData;
