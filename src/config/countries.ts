export type VisaType = {
  name: { he: string; en: string };
  description: { he: string; en: string };
  duration: string;
  requirements: { he: string; en: string }[];
};

export type ProcessStep = {
  title: { he: string; en: string };
  description: { he: string; en: string };
};

export type Country = {
  slug: string;
  name: { he: string; en: string };
  flag: string;
  overview: { he: string; en: string };
  capital: string;
  language: string;
  currency: string;
  immigrationAuthority: { he: string; en: string };
  visaTypes: VisaType[];
  process: ProcessStep[];
};

export const countries: Country[] = [
  {
    slug: "uk",
    name: { he: "בריטניה", en: "United Kingdom" },
    flag: "🇬🇧",
    capital: "London",
    language: "English",
    currency: "GBP (£)",
    immigrationAuthority: {
      he: "UK Visas and Immigration (UKVI)",
      en: "UK Visas and Immigration (UKVI)",
    },
    overview: {
      he: "בריטניה מציעה מגוון רחב של מסלולי הגירה — מאשרות עבודה ומשפחה ועד מקלט ואזרחות. המערכת מבוססת על נקודות (Points-Based System) עבור רוב סוגי אשרות העבודה.",
      en: "The UK offers a wide range of immigration pathways — from work and family visas to asylum and citizenship. The system is based on a Points-Based System for most work visa types.",
    },
    visaTypes: [
      {
        name: { he: "Skilled Worker Visa", en: "Skilled Worker Visa" },
        description: {
          he: "אשרת עבודה למקצוענים עם הצעת עבודה מחברה בריטית מורשית. דורשת ניקוד מינימלי במערכת הנקודות.",
          en: "Work visa for skilled professionals with a job offer from a licensed UK employer. Requires minimum points in the PBS.",
        },
        duration: "5 years",
        requirements: [
          { he: "הצעת עבודה מספונסר מורשה", en: "Job offer from a licensed sponsor" },
          { he: "רמת אנגלית B1 לפחות", en: "English level B1 minimum" },
          { he: "שכר מינימלי (בד\"כ £26,200)", en: "Minimum salary (usually £26,200)" },
          { he: "תעודת אישור ספונסר (CoS)", en: "Certificate of Sponsorship (CoS)" },
        ],
      },
      {
        name: { he: "Family Visa", en: "Family Visa" },
        description: {
          he: "לבני זוג, ילדים, או הורים של אזרחים או תושבי קבע בריטניים. כולל מסלול לבני זוג ומסלול להורים.",
          en: "For spouses, children, or parents of British citizens or settled persons. Includes partner and parent routes.",
        },
        duration: "2.5–5 years",
        requirements: [
          { he: "הכנסה מינימלית של הספונסר", en: "Minimum income of the sponsor" },
          { he: "הוכחת קשר אמיתי", en: "Proof of genuine relationship" },
          { he: "דיור הולם", en: "Adequate accommodation" },
          { he: "רמת אנגלית A1", en: "English level A1" },
        ],
      },
      {
        name: { he: "Student Visa", en: "Student Visa" },
        description: {
          he: "ללימודים במוסד מוכר בבריטניה. מאפשרת עבודה חלקית בזמן הלימודים.",
          en: "For study at a recognized UK institution. Allows part-time work during studies.",
        },
        duration: "Duration of course + 4 months",
        requirements: [
          { he: "אישור קבלה (CAS) ממוסד מוכר", en: "CAS from a recognized institution" },
          { he: "הוכחת יכולת כלכלית", en: "Proof of financial ability" },
          { he: "רמת אנגלית B2", en: "English level B2" },
        ],
      },
      {
        name: { he: "Global Talent Visa", en: "Global Talent Visa" },
        description: {
          he: "למובילים ומבטיחים בתחומי מדע, הנדסה, אומנות וטכנולוגיה. ללא צורך בהצעת עבודה.",
          en: "For leaders and promising individuals in science, engineering, arts, and tech. No job offer required.",
        },
        duration: "5 years",
        requirements: [
          { he: "אישור מגוף מוסמך בתחום", en: "Endorsement from a recognized body" },
          { he: "הוכחת מובילות או פוטנציאל", en: "Proof of leadership or potential" },
        ],
      },
      {
        name: { he: "Asylum / Protection", en: "Asylum / Protection" },
        description: {
          he: "הגנה למי שנמלט מרדיפה או סכנה חמורה. הבקשה מוגשת בבריטניה עצמה.",
          en: "Protection for those fleeing persecution or serious harm. Application made within the UK.",
        },
        duration: "5 years (refugee status)",
        requirements: [
          { he: "נוכחות פיזית בבריטניה", en: "Physical presence in the UK" },
          { he: "פחד מבוסס מרדיפה", en: "Well-founded fear of persecution" },
          { he: "הגשת בקשה בהקדם", en: "Prompt application" },
        ],
      },
      {
        name: { he: "Indefinite Leave to Remain (ILR)", en: "Indefinite Leave to Remain (ILR)" },
        description: {
          he: "מעמד תושב קבע בבריטניה. מאפשר חיים ועבודה ללא הגבלה.",
          en: "Permanent residency status in the UK. Allows unlimited living and working.",
        },
        duration: "Permanent",
        requirements: [
          { he: "5 שנות שהייה חוקית", en: "5 years of lawful residence" },
          { he: "מבחן Life in the UK", en: "Life in the UK test" },
          { he: "רמת אנגלית B1", en: "English level B1" },
          { he: "ללא הפרות חוק חמורות", en: "No serious criminal offences" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בדיקת זכאות", en: "Check Eligibility" },
        description: { he: "בדיקת סוג האשרה המתאים ודרישות הנקודות.", en: "Check the right visa type and points requirements." },
      },
      {
        title: { he: "הכנת מסמכים", en: "Prepare Documents" },
        description: { he: "איסוף כל המסמכים הנדרשים — דרכון, תעודות, אישורים כלכליים.", en: "Gather all required documents — passport, certificates, financial proof." },
      },
      {
        title: { he: "הגשת בקשה מקוונת", en: "Online Application" },
        description: { he: "מילוי טופס מקוון ותשלום אגרה דרך אתר UKVI.", en: "Complete the online form and pay the fee via the UKVI website." },
      },
      {
        title: { he: "ביומטריה ומסמכים", en: "Biometrics & Documents" },
        description: { he: "ביקור במרכז VFS לצילום טביעות אצבע והגשת מסמכים.", en: "Visit a VFS centre for fingerprints and document submission." },
      },
      {
        title: { he: "החלטה", en: "Decision" },
        description: { he: "זמן טיפול ממוצע: 3–8 שבועות, תלוי בסוג האשרה.", en: "Average processing time: 3–8 weeks, depending on visa type." },
      },
    ],
  },
  {
    slug: "germany",
    name: { he: "גרמניה", en: "Germany" },
    flag: "🇩🇪",
    capital: "Berlin",
    language: "German",
    currency: "EUR (€)",
    immigrationAuthority: {
      he: "Ausländerbehörde (משרד הזרים)",
      en: "Ausländerbehörde (Foreigners' Authority)",
    },
    overview: {
      he: "גרמניה היא אחת היעדים הפופולריים ביותר להגירה באירופה. עם כלכלה חזקה, מערכת חינוך מצוינת, ומדיניות הגירה ליברלית יחסית — במיוחד לעובדים מיומנים.",
      en: "Germany is one of the most popular immigration destinations in Europe. With a strong economy, excellent education system, and relatively liberal immigration policy — especially for skilled workers.",
    },
    visaTypes: [
      {
        name: { he: "EU Blue Card", en: "EU Blue Card" },
        description: {
          he: "אשרת עבודה מיוחדת לבעלי תואר אקדמי עם הצעת עבודה בשכר מינימלי. המסלול המהיר ביותר לתושבות קבע.",
          en: "Special work permit for university graduates with a job offer at minimum salary. The fastest path to permanent residence.",
        },
        duration: "4 years",
        requirements: [
          { he: "תואר אקדמי מוכר", en: "Recognized university degree" },
          { he: "הצעת עבודה בגרמניה", en: "Job offer in Germany" },
          { he: "שכר שנתי מינימלי (כ-€45,300)", en: "Minimum annual salary (~€45,300)" },
        ],
      },
      {
        name: { he: "Skilled Worker Visa", en: "Skilled Worker Visa" },
        description: {
          he: "לבעלי הכשרה מקצועית מוכרת, גם ללא תואר אקדמי. גרמניה מכירה במקצועות רבים.",
          en: "For those with recognized vocational training, even without a university degree. Germany recognizes many professions.",
        },
        duration: "4 years",
        requirements: [
          { he: "הכשרה מקצועית מוכרת", en: "Recognized vocational training" },
          { he: "הצעת עבודה בתחום", en: "Job offer in the relevant field" },
          { he: "רמת גרמנית בסיסית (רצוי B1)", en: "Basic German level (B1 preferred)" },
        ],
      },
      {
        name: { he: "Opportunity Card", en: "Opportunity Card (Chancenkarte)" },
        description: {
          he: "אשרת חיפוש עבודה חדשה (2024) מבוססת נקודות — מאפשרת כניסה לגרמניה לחפש עבודה ללא הצעה מראש.",
          en: "New job-seeking visa (2024) based on points — allows entry to Germany to search for work without a prior offer.",
        },
        duration: "1 year",
        requirements: [
          { he: "תואר או הכשרה מוכרת", en: "Degree or recognized training" },
          { he: "6 נקודות מינימום (גיל, שפה, ניסיון)", en: "Minimum 6 points (age, language, experience)" },
          { he: "יכולת כלכלית לתקופת החיפוש", en: "Financial means for the search period" },
        ],
      },
      {
        name: { he: "Family Reunification", en: "Family Reunification" },
        description: {
          he: "לבני משפחה של תושבי גרמניה או אזרחי האיחוד האירופי.",
          en: "For family members of German residents or EU citizens.",
        },
        duration: "1–3 years (renewable)",
        requirements: [
          { he: "הוכחת קשר משפחתי", en: "Proof of family relationship" },
          { he: "רמת גרמנית A1 (לבני זוג)", en: "German level A1 (for spouses)" },
          { he: "דיור ופרנסה מספקים", en: "Adequate housing and income" },
        ],
      },
      {
        name: { he: "Student Visa", en: "Student Visa" },
        description: {
          he: "ללימודים באוניברסיטה גרמנית. לימודי תואר ראשון חינמיים ברוב האוניברסיטאות הציבוריות.",
          en: "For university studies. Undergraduate tuition is free at most public universities.",
        },
        duration: "Duration of studies",
        requirements: [
          { he: "אישור קבלה מאוניברסיטה", en: "University admission letter" },
          { he: "חשבון חסום (€11,904/שנה)", en: "Blocked account (€11,904/year)" },
          { he: "ביטוח בריאות", en: "Health insurance" },
        ],
      },
      {
        name: { he: "Asylum / Protection", en: "Asylum / Protection" },
        description: {
          he: "גרמניה מקבלת מבקשי מקלט לפי אמנת ז'נבה. הבקשה מוגשת ב-BAMF.",
          en: "Germany accepts asylum seekers under the Geneva Convention. Applications filed at BAMF.",
        },
        duration: "3 years (refugee) / 1 year (subsidiary)",
        requirements: [
          { he: "נוכחות פיזית בגרמניה", en: "Physical presence in Germany" },
          { he: "הגשת בקשה ב-BAMF", en: "Application at BAMF" },
          { he: "ראיון אישי", en: "Personal interview" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בדיקת זכאות", en: "Check Eligibility" },
        description: { he: "בדיקת סוג האשרה המתאים — Blue Card, Skilled Worker, או אחר.", en: "Determine the right visa type — Blue Card, Skilled Worker, or other." },
      },
      {
        title: { he: "הכנת מסמכים", en: "Prepare Documents" },
        description: { he: "איסוף מסמכים, אפוסטיל, תרגום מוסמך לגרמנית.", en: "Gather documents, apostille, certified German translation." },
      },
      {
        title: { he: "הגשה בשגרירות", en: "Embassy Application" },
        description: { he: "הגשת בקשה בשגרירות/קונסוליה הגרמנית בארץ המוצא.", en: "Submit application at the German embassy/consulate in your home country." },
      },
      {
        title: { he: "רישום ב-Ausländerbehörde", en: "Registration at Ausländerbehörde" },
        description: { he: "לאחר ההגעה — רישום במשרד הזרים המקומי.", en: "After arrival — register at the local foreigners' authority." },
      },
      {
        title: { he: "אשרת שהייה", en: "Residence Permit" },
        description: { he: "קבלת כרטיס שהייה ותחילת החיים בגרמניה.", en: "Receive residence card and start life in Germany." },
      },
    ],
  },
  {
    slug: "usa",
    name: { he: "ארצות הברית", en: "United States" },
    flag: "🇺🇸",
    capital: "Washington, D.C.",
    language: "English",
    currency: "USD ($)",
    immigrationAuthority: {
      he: "USCIS — שירות האזרחות וההגירה",
      en: "USCIS — U.S. Citizenship and Immigration Services",
    },
    overview: {
      he: "ארצות הברית היא יעד ההגירה המבוקש ביותר בעולם. המערכת מורכבת עם עשרות סוגי אשרות — מאשרות עבודה זמניות ועד גרין קארד ואזרחות.",
      en: "The United States is the most sought-after immigration destination in the world. The system is complex with dozens of visa types — from temporary work visas to green cards and citizenship.",
    },
    visaTypes: [
      {
        name: { he: "H-1B (עובד מיומן)", en: "H-1B (Skilled Worker)" },
        description: {
          he: "אשרת העבודה הנפוצה ביותר לבעלי מקצוע. מוגבלת במכסה שנתית עם הגרלה.",
          en: "The most common work visa for professionals. Subject to annual cap with lottery.",
        },
        duration: "3 years (extendable to 6)",
        requirements: [
          { he: "תואר אקדמי לפחות", en: "At least a bachelor's degree" },
          { he: "הצעת עבודה ממעסיק אמריקאי", en: "Job offer from a US employer" },
          { he: "המעסיק מגיש את הבקשה", en: "Employer files the petition" },
          { he: "עמידה בשכר שוק (Prevailing Wage)", en: "Meet prevailing wage requirements" },
        ],
      },
      {
        name: { he: "L-1 (העברה פנים-חברתית)", en: "L-1 (Intra-Company Transfer)" },
        description: {
          he: "להעברת מנהלים או עובדים בעלי ידע מיוחד מסניף חו\"ל לסניף אמריקאי.",
          en: "For transferring managers or specialized knowledge employees from a foreign office to a US office.",
        },
        duration: "1–3 years (extendable to 7)",
        requirements: [
          { he: "שנה לפחות בחברה בחו\"ל", en: "At least 1 year at the foreign company" },
          { he: "תפקיד ניהולי או ידע מיוחד", en: "Managerial role or specialized knowledge" },
          { he: "קשר בין החברות", en: "Qualifying corporate relationship" },
        ],
      },
      {
        name: { he: "EB-5 (משקיעים)", en: "EB-5 (Investor)" },
        description: {
          he: "גרין קארד למשקיעים שמשקיעים סכום משמעותי ויוצרים מקומות עבודה.",
          en: "Green card for investors who invest a significant amount and create jobs.",
        },
        duration: "Permanent (Green Card)",
        requirements: [
          { he: "השקעה של $800,000–$1,050,000", en: "Investment of $800,000–$1,050,000" },
          { he: "יצירת 10 מקומות עבודה", en: "Create 10 full-time jobs" },
          { he: "מקור כספים חוקי", en: "Lawful source of funds" },
        ],
      },
      {
        name: { he: "Family-Based Green Card", en: "Family-Based Green Card" },
        description: {
          he: "גרין קארד על בסיס קשר משפחתי עם אזרח או תושב קבע אמריקאי.",
          en: "Green card based on family relationship with a US citizen or permanent resident.",
        },
        duration: "Permanent",
        requirements: [
          { he: "קשר משפחתי מוכח", en: "Proven family relationship" },
          { he: "ספונסר עם הכנסה מינימלית", en: "Sponsor meeting minimum income" },
          { he: "בדיקה רפואית", en: "Medical examination" },
          { he: "ללא עבר פלילי חמור", en: "No serious criminal history" },
        ],
      },
      {
        name: { he: "Asylum / Protection", en: "Asylum / Protection" },
        description: {
          he: "הגנה למי שנרדף על רקע גזע, דת, לאום, דעה פוליטית, או שייכות לקבוצה חברתית.",
          en: "Protection for those persecuted based on race, religion, nationality, political opinion, or social group membership.",
        },
        duration: "1 year → Green Card",
        requirements: [
          { he: "הגשה תוך שנה מהגעה", en: "File within 1 year of arrival" },
          { he: "פחד מבוסס מרדיפה", en: "Well-founded fear of persecution" },
          { he: "ראיון במשרד USCIS", en: "Interview at USCIS office" },
        ],
      },
      {
        name: { he: "Diversity Visa (הגרלה)", en: "Diversity Visa (Lottery)" },
        description: {
          he: "הגרלה שנתית ל-55,000 גרין קארד. פתוחה לאזרחי מדינות עם הגירה נמוכה לארה\"ב.",
          en: "Annual lottery for 55,000 green cards. Open to citizens of countries with low immigration to the US.",
        },
        duration: "Permanent (Green Card)",
        requirements: [
          { he: "אזרחות מדינה מזכה", en: "Citizenship of an eligible country" },
          { he: "תיכון לפחות או 2 שנות ניסיון", en: "High school or 2 years of experience" },
          { he: "הגשה בתקופת ההרשמה", en: "Apply during registration period" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose a Pathway" },
        description: { he: "זיהוי סוג האשרה או הגרין קארד המתאים ביותר.", en: "Identify the most suitable visa or green card type." },
      },
      {
        title: { he: "הגשת פטישן", en: "File Petition" },
        description: { he: "המעסיק או בן המשפחה מגיש בקשה ל-USCIS.", en: "Employer or family member files petition with USCIS." },
      },
      {
        title: { he: "המתנה לאישור", en: "Wait for Approval" },
        description: { he: "זמני טיפול משתנים — מ-6 חודשים ועד מספר שנים.", en: "Processing times vary — from 6 months to several years." },
      },
      {
        title: { he: "ראיון בשגרירות", en: "Embassy Interview" },
        description: { he: "ראיון אישי בשגרירות האמריקאית כולל ביומטריה.", en: "Personal interview at the US embassy including biometrics." },
      },
      {
        title: { he: "כניסה לארה\"ב", en: "Entry to US" },
        description: { he: "קבלת אשרה, טיסה, וקבלת מעמד בנקודת הכניסה.", en: "Receive visa, fly, and obtain status at port of entry." },
      },
    ],
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map((c) => c.slug);
}
