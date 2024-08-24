export const GenderOptions = ["Männlich", "Weiblich", "Andere"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Männlich" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Krankenversicherung",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Krankenversicherung",
  "Personalausweis",
  "Reisepass",
  "Aufenthaltserlaubnis",
  "Führerschein",
  "Sozialversicherung",
  "Studentenausweis",
  "Wählerausweis",
  "Studentenausweis",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Johann Müller",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Fischer",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Schäfer",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Schmidt",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Johanna Weber",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Wagner",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmin Bauer",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Schneider",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Götze",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
