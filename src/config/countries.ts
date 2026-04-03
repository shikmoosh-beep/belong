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

export type CountryStat = {
  label: { he: string; en: string };
  value: string;
  icon?: string;
};

export type ProCon = {
  he: string;
  en: string;
};

export type CountryInfo = {
  stats: CountryStat[];
  pros: ProCon[];
  cons: ProCon[];
  funFacts: ProCon[];
  healthcareNote: { he: string; en: string };
  costOfLiving: { he: string; en: string };
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
  info?: CountryInfo;
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
  {
    slug: "canada",
    name: { he: "קנדה", en: "Canada" },
    flag: "🇨🇦",
    capital: "Ottawa",
    language: "English / French",
    currency: "CAD ($)",
    immigrationAuthority: {
      he: "IRCC — המחלקה להגירה, פליטים ואזרחות",
      en: "IRCC — Immigration, Refugees and Citizenship Canada",
    },
    overview: {
      he: "קנדה נחשבת לאחת המדינות הידידותיות ביותר למהגרים בעולם. מערכת ההגירה מבוססת על Express Entry — מערכת נקודות שמדרגת מועמדים לפי גיל, השכלה, ניסיון, ושפה.",
      en: "Canada is considered one of the most immigrant-friendly countries in the world. The immigration system is based on Express Entry — a points system that ranks candidates by age, education, experience, and language.",
    },
    visaTypes: [
      {
        name: { he: "Express Entry (Federal Skilled Worker)", en: "Express Entry (Federal Skilled Worker)" },
        description: {
          he: "המסלול המהיר ביותר לתושבות קבע. מבוסס על ניקוד CRS — מי שמקבל מספיק נקודות מקבל הזמנה להגיש.",
          en: "The fastest path to permanent residence. Based on CRS scoring — those with enough points receive an invitation to apply.",
        },
        duration: "Permanent Residence",
        requirements: [
          { he: "שנה+ ניסיון עבודה מקצועי", en: "1+ year of skilled work experience" },
          { he: "רמת שפה CLB 7 (אנגלית/צרפתית)", en: "Language level CLB 7 (English/French)" },
          { he: "השכלה תיכונית לפחות", en: "High school education minimum" },
          { he: "הערכת תעודות (ECA)", en: "Educational Credential Assessment (ECA)" },
        ],
      },
      {
        name: { he: "Provincial Nominee Program (PNP)", en: "Provincial Nominee Program (PNP)" },
        description: {
          he: "כל מחוז בקנדה יכול לבחור מהגרים לפי הצרכים שלו. מוסיף 600 נקודות ב-Express Entry.",
          en: "Each province can select immigrants based on its needs. Adds 600 points in Express Entry.",
        },
        duration: "Permanent Residence",
        requirements: [
          { he: "עמידה בדרישות המחוז הספציפי", en: "Meet specific provincial requirements" },
          { he: "כוונה להתגורר במחוז", en: "Intent to reside in the province" },
          { he: "ניסיון עבודה או הצעת עבודה (תלוי מחוז)", en: "Work experience or job offer (varies by province)" },
        ],
      },
      {
        name: { he: "Family Sponsorship", en: "Family Sponsorship" },
        description: {
          he: "אזרחים ותושבי קבע יכולים לחסות על בני זוג, ילדים, הורים וסבים.",
          en: "Citizens and permanent residents can sponsor spouses, children, parents, and grandparents.",
        },
        duration: "Permanent Residence",
        requirements: [
          { he: "הספונסר אזרח או תושב קבע", en: "Sponsor is citizen or PR" },
          { he: "הוכחת קשר אמיתי", en: "Proof of genuine relationship" },
          { he: "התחייבות כלכלית", en: "Financial undertaking" },
        ],
      },
      {
        name: { he: "Study Permit", en: "Study Permit" },
        description: {
          he: "ללימודים במוסד מוכר. מאפשר עבודה 20 שעות בשבוע + אשרת עבודה לאחר סיום.",
          en: "For study at a recognized institution. Allows 20hrs/week work + post-graduation work permit.",
        },
        duration: "Duration of studies",
        requirements: [
          { he: "אישור קבלה ממוסד מוכר (DLI)", en: "Acceptance from a DLI" },
          { he: "הוכחת יכולת כלכלית", en: "Proof of financial support" },
          { he: "ללא עבר פלילי", en: "No criminal record" },
        ],
      },
      {
        name: { he: "Asylum / Refugee", en: "Asylum / Refugee" },
        description: {
          he: "קנדה מקבלת פליטים דרך UNHCR, חסות פרטית, ובקשות מקלט פנימיות.",
          en: "Canada accepts refugees through UNHCR, private sponsorship, and inland claims.",
        },
        duration: "Permanent Residence",
        requirements: [
          { he: "פחד מבוסס מרדיפה", en: "Well-founded fear of persecution" },
          { he: "הגשה ב-IRCC או בגבול", en: "Claim at IRCC or at the border" },
          { he: "שימוע בפני IRB", en: "Hearing before IRB" },
        ],
      },
      {
        name: { he: "Start-up Visa", en: "Start-up Visa" },
        description: {
          he: "ליזמים עם רעיון עסקי חדשני ותמיכה מארגון מוכר בקנדה.",
          en: "For entrepreneurs with an innovative business idea and support from a designated organization.",
        },
        duration: "Permanent Residence",
        requirements: [
          { he: "מכתב תמיכה מארגון מוכר", en: "Letter of support from designated org" },
          { he: "רמת שפה CLB 5", en: "Language level CLB 5" },
          { he: "מספיק כסף להתיישבות", en: "Sufficient settlement funds" },
        ],
      },
    ],
    process: [
      {
        title: { he: "הערכת זכאות", en: "Eligibility Assessment" },
        description: { he: "בדיקת ניקוד CRS וזיהוי המסלול המתאים.", en: "Check CRS score and identify the right pathway." },
      },
      {
        title: { he: "יצירת פרופיל Express Entry", en: "Create Express Entry Profile" },
        description: { he: "הזנת פרטים למאגר ה-Express Entry של קנדה.", en: "Enter details into Canada's Express Entry pool." },
      },
      {
        title: { he: "קבלת הזמנה (ITA)", en: "Receive Invitation (ITA)" },
        description: { he: "אם הניקוד מספיק גבוה — מתקבלת הזמנה להגיש בקשה.", en: "If score is high enough — receive an Invitation to Apply." },
      },
      {
        title: { he: "הגשת בקשה מלאה", en: "Submit Full Application" },
        description: { he: "60 יום להגיש מסמכים, בדיקות רפואיות, ואישור משטרה.", en: "60 days to submit documents, medical exams, and police clearance." },
      },
      {
        title: { he: "קבלת תושבות קבע", en: "Receive PR" },
        description: { he: "זמן טיפול ממוצע: 6–8 חודשים.", en: "Average processing: 6–8 months." },
      },
    ],
  },
  {
    slug: "australia",
    name: { he: "אוסטרליה", en: "Australia" },
    flag: "🇦🇺",
    capital: "Canberra",
    language: "English",
    currency: "AUD ($)",
    immigrationAuthority: {
      he: "Department of Home Affairs",
      en: "Department of Home Affairs",
    },
    overview: {
      he: "אוסטרליה מושכת מהגרים עם איכות חיים גבוהה, שכר טוב, ומערכת הגירה מבוססת נקודות. יש מסלולים לעובדים מיומנים, משפחות, סטודנטים ומשקיעים.",
      en: "Australia attracts immigrants with high quality of life, good wages, and a points-based immigration system. Pathways exist for skilled workers, families, students, and investors.",
    },
    visaTypes: [
      {
        name: { he: "Skilled Independent (189)", en: "Skilled Independent Visa (189)" },
        description: {
          he: "תושבות קבע לבעלי מקצוע ברשימת המקצועות המבוקשים. מבוסס נקודות, ללא צורך בספונסר.",
          en: "Permanent residence for workers in the Skilled Occupation List. Points-based, no sponsor needed.",
        },
        duration: "Permanent",
        requirements: [
          { he: "מקצוע ברשימת SOL", en: "Occupation on SOL" },
          { he: "הערכת מקצוע (Skills Assessment)", en: "Skills Assessment" },
          { he: "גיל מתחת ל-45", en: "Under 45 years old" },
          { he: "אנגלית ברמה מספקת (IELTS 6+)", en: "Competent English (IELTS 6+)" },
          { he: "65 נקודות מינימום", en: "Minimum 65 points" },
        ],
      },
      {
        name: { he: "Employer Sponsored (482/494)", en: "Employer Sponsored (482/494)" },
        description: {
          he: "אשרת עבודה זמנית או אזורית עם מעסיק אוסטרלי שמעוניין לחסות עליך.",
          en: "Temporary or regional work visa with an Australian employer willing to sponsor you.",
        },
        duration: "2–4 years",
        requirements: [
          { he: "הצעת עבודה ממעסיק מורשה", en: "Job offer from approved employer" },
          { he: "ניסיון של שנתיים בתחום", en: "2 years experience in the field" },
          { he: "אנגלית ברמה מספקת", en: "Competent English" },
        ],
      },
      {
        name: { he: "Partner Visa (820/801)", en: "Partner Visa (820/801)" },
        description: {
          he: "לבני זוג של אזרחים או תושבי קבע אוסטרליים. תהליך דו-שלבי.",
          en: "For partners of Australian citizens or permanent residents. Two-stage process.",
        },
        duration: "Temporary → Permanent",
        requirements: [
          { he: "קשר אמיתי ומתמשך", en: "Genuine and continuing relationship" },
          { he: "הספונסר אזרח או PR", en: "Sponsor is citizen or PR" },
          { he: "בדיקות רפואיות ופליליות", en: "Health and character checks" },
        ],
      },
      {
        name: { he: "Student Visa (500)", en: "Student Visa (500)" },
        description: {
          he: "ללימודים באוסטרליה. מאפשר עבודה חלקית ואפשרות לאשרת עבודה לאחר סיום.",
          en: "For study in Australia. Allows part-time work and post-study work visa option.",
        },
        duration: "Duration of course",
        requirements: [
          { he: "אישור קבלה (CoE)", en: "Confirmation of Enrolment (CoE)" },
          { he: "ביטוח בריאות (OSHC)", en: "Health insurance (OSHC)" },
          { he: "יכולת כלכלית", en: "Financial capacity" },
          { he: "אנגלית IELTS 5.5+", en: "English IELTS 5.5+" },
        ],
      },
      {
        name: { he: "Asylum / Protection (866)", en: "Protection Visa (866)" },
        description: {
          he: "הגנה למי שנמצא באוסטרליה ועומד בהגדרת פליט לפי אמנת ז'נבה.",
          en: "Protection for those in Australia who meet the refugee definition under the Geneva Convention.",
        },
        duration: "Permanent",
        requirements: [
          { he: "נוכחות פיזית באוסטרליה", en: "Physical presence in Australia" },
          { he: "עמידה בהגדרת פליט", en: "Meet refugee definition" },
          { he: "הגשת בקשה ל-Home Affairs", en: "Apply to Home Affairs" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בדיקת זכאות וניקוד", en: "Check Eligibility & Points" },
        description: { he: "בדיקת מקצוע ברשימת SOL וחישוב נקודות.", en: "Check occupation on SOL and calculate points." },
      },
      {
        title: { he: "הערכת מקצוע", en: "Skills Assessment" },
        description: { he: "הגשת תעודות לגוף המקצועי המוסמך להערכה.", en: "Submit qualifications to the relevant assessing authority." },
      },
      {
        title: { he: "הגשת EOI", en: "Submit EOI" },
        description: { he: "הגשת Expression of Interest למאגר SkillSelect.", en: "Submit Expression of Interest to SkillSelect." },
      },
      {
        title: { he: "קבלת הזמנה", en: "Receive Invitation" },
        description: { he: "אם הניקוד מספיק — הזמנה להגיש בקשה.", en: "If points are sufficient — invitation to apply." },
      },
      {
        title: { he: "הגשת בקשה והחלטה", en: "Apply & Decision" },
        description: { he: "הגשת מסמכים + בדיקות. זמן טיפול: 6–12 חודשים.", en: "Submit documents + checks. Processing: 6–12 months." },
      },
    ],
  },
  {
    slug: "spain",
    name: { he: "ספרד", en: "Spain" },
    flag: "🇪🇸",
    capital: "Madrid",
    language: "Spanish",
    currency: "EUR (€)",
    immigrationAuthority: {
      he: "Oficina de Extranjería (משרד הזרים)",
      en: "Oficina de Extranjería (Immigration Office)",
    },
    overview: {
      he: "ספרד מציעה מסלולי הגירה מגוונים כולל אשרת Digital Nomad פופולרית, מסלול משפחתי, ואשרת Golden Visa למשקיעים. איכות חיים גבוהה ועלויות נמוכות יחסית למערב אירופה.",
      en: "Spain offers diverse immigration pathways including a popular Digital Nomad visa, family route, and Golden Visa for investors. High quality of life with lower costs compared to Western Europe.",
    },
    visaTypes: [
      {
        name: { he: "Digital Nomad Visa", en: "Digital Nomad Visa" },
        description: {
          he: "אשרה חדשה לעובדים מרחוק ופרילנסרים שעובדים עם חברות מחוץ לספרד.",
          en: "New visa for remote workers and freelancers working with companies outside Spain.",
        },
        duration: "1 year (renewable to 5)",
        requirements: [
          { he: "הכנסה של €2,520+/חודש", en: "Income of €2,520+/month" },
          { he: "עבודה עם חברה מחוץ לספרד", en: "Work with a company outside Spain" },
          { he: "ביטוח בריאות", en: "Health insurance" },
          { he: "ללא עבר פלילי", en: "No criminal record" },
        ],
      },
      {
        name: { he: "Golden Visa (משקיעים)", en: "Golden Visa (Investor)" },
        description: {
          he: "תושבות למשקיעים בנדל\"ן (מ-€500,000) או בעסקים.",
          en: "Residency for real estate investors (from €500,000) or business investors.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "השקעה בנדל\"ן €500,000+", en: "Real estate investment €500,000+" },
          { he: "או השקעה בעסק/אג\"ח", en: "Or business/bond investment" },
          { he: "ביטוח בריאות", en: "Health insurance" },
        ],
      },
      {
        name: { he: "Work Visa", en: "Work Visa" },
        description: {
          he: "אשרת עבודה עם מעסיק ספרדי. המעסיק צריך להוכיח שלא מצא עובד מקומי.",
          en: "Work visa with a Spanish employer. Employer must prove no local worker was found.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "הצעת עבודה ממעסיק ספרדי", en: "Job offer from Spanish employer" },
          { he: "בדיקת שוק עבודה (Situación Nacional)", en: "Labor market test" },
          { he: "הכשרה מתאימה לתפקיד", en: "Qualifications matching the role" },
        ],
      },
      {
        name: { he: "Family Reunification", en: "Family Reunification" },
        description: {
          he: "לבני משפחה של תושבים חוקיים בספרד.",
          en: "For family members of legal residents in Spain.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "הספונסר תושב חוקי שנה+", en: "Sponsor is legal resident for 1+ year" },
          { he: "הכנסה מינימלית", en: "Minimum income" },
          { he: "דיור הולם", en: "Adequate housing" },
        ],
      },
      {
        name: { he: "Non-Lucrative Visa", en: "Non-Lucrative Visa" },
        description: {
          he: "לחיים בספרד ללא עבודה — לגמלאים, אנשים עם הכנסה פסיבית.",
          en: "For living in Spain without working — retirees, people with passive income.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "הכנסה פסיבית של €2,400+/חודש", en: "Passive income €2,400+/month" },
          { he: "ביטוח בריאות מלא", en: "Full health insurance" },
          { he: "ללא כוונה לעבוד בספרד", en: "No intention to work in Spain" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose Pathway" },
        description: { he: "זיהוי סוג האשרה המתאים — עבודה, משקיע, Digital Nomad, או משפחה.", en: "Identify the right visa — work, investor, Digital Nomad, or family." },
      },
      {
        title: { he: "הגשה בקונסוליה", en: "Consulate Application" },
        description: { he: "הגשת בקשה בקונסוליה הספרדית בארץ המוצא.", en: "Submit application at the Spanish consulate in your home country." },
      },
      {
        title: { he: "קבלת ויזה", en: "Receive Visa" },
        description: { he: "זמן טיפול: 1–3 חודשים.", en: "Processing time: 1–3 months." },
      },
      {
        title: { he: "רישום בספרד", en: "Registration in Spain" },
        description: { he: "תוך 30 יום מההגעה — רישום NIE וכרטיס תושב.", en: "Within 30 days of arrival — NIE registration and residence card." },
      },
    ],
  },
  {
    slug: "france",
    name: { he: "צרפת", en: "France" },
    flag: "🇫🇷",
    capital: "Paris",
    language: "French",
    currency: "EUR (€)",
    immigrationAuthority: {
      he: "Préfecture — לשכת המחוז",
      en: "Préfecture — Prefecture Office",
    },
    overview: {
      he: "צרפת מציעה מסלולי הגירה מגוונים עם דגש על מקצוענים, סטודנטים ומשפחות. כוללת את ה-Talent Passport ליזמים ואנשי מקצוע בעלי כישרון מיוחד.",
      en: "France offers diverse immigration routes with emphasis on professionals, students, and families. Includes the Talent Passport for entrepreneurs and exceptional professionals.",
    },
    visaTypes: [
      {
        name: { he: "Talent Passport", en: "Talent Passport (Passeport Talent)" },
        description: {
          he: "אשרה מיוחדת לאנשי מקצוע בעלי כישרון — חוקרים, יזמים, אמנים, ובעלי תואר מאסטר.",
          en: "Special visa for talented professionals — researchers, entrepreneurs, artists, and master's degree holders.",
        },
        duration: "4 years",
        requirements: [
          { he: "תואר מאסטר או שווה ערך", en: "Master's degree or equivalent" },
          { he: "הצעת עבודה בשכר גבוה", en: "High-salary job offer" },
          { he: "או פרויקט יזמי חדשני", en: "Or innovative entrepreneurial project" },
        ],
      },
      {
        name: { he: "Salaried Worker Visa", en: "Salaried Worker Visa" },
        description: {
          he: "אשרת עבודה סטנדרטית עם מעסיק צרפתי.",
          en: "Standard work visa with a French employer.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "חוזה עבודה ממעסיק צרפתי", en: "Employment contract from French employer" },
          { he: "אישור DIRECCTE", en: "DIRECCTE authorization" },
          { he: "תעודות מקצועיות", en: "Professional qualifications" },
        ],
      },
      {
        name: { he: "Family Visa", en: "Family Visa" },
        description: {
          he: "לבני זוג וילדים של אזרחים או תושבים צרפתיים.",
          en: "For spouses and children of French citizens or residents.",
        },
        duration: "1 year → 10 years",
        requirements: [
          { he: "נישואים או PACS עם אזרח צרפתי", en: "Marriage or PACS with French citizen" },
          { he: "רמת צרפתית A1", en: "French level A1" },
          { he: "הוכחת חיי זוגיות", en: "Proof of conjugal life" },
        ],
      },
      {
        name: { he: "Student Visa", en: "Student Visa" },
        description: {
          he: "ללימודים במוסד צרפתי. צרפת מציעה שכר לימוד נמוך מאוד גם לזרים.",
          en: "For study at a French institution. France offers very low tuition even for foreigners.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "קבלה למוסד מוכר", en: "Acceptance from recognized institution" },
          { he: "הרשמה דרך Campus France", en: "Registration through Campus France" },
          { he: "הוכחת יכולת כלכלית (€615/חודש)", en: "Proof of funds (€615/month)" },
        ],
      },
      {
        name: { he: "Asylum", en: "Asylum" },
        description: {
          he: "צרפת מקבלת בקשות מקלט דרך OFPRA.",
          en: "France processes asylum claims through OFPRA.",
        },
        duration: "10 years (refugee) / 4 years (subsidiary)",
        requirements: [
          { he: "נוכחות פיזית בצרפת", en: "Physical presence in France" },
          { he: "הגשה ב-OFPRA", en: "Application at OFPRA" },
          { he: "ראיון אישי", en: "Personal interview" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose Pathway" },
        description: { he: "זיהוי סוג האשרה — Talent Passport, עבודה, משפחה, או לימודים.", en: "Identify visa type — Talent Passport, work, family, or study." },
      },
      {
        title: { he: "הגשה בקונסוליה", en: "Consulate Application" },
        description: { he: "הגשת בקשת ויזה בקונסוליה הצרפתית.", en: "Submit visa application at the French consulate." },
      },
      {
        title: { he: "קבלת ויזה D", en: "Receive Long-Stay Visa" },
        description: { he: "ויזה ארוכת טווח (VLS-TS) המשמשת גם כאשרת שהייה.", en: "Long-stay visa (VLS-TS) that also serves as a residence permit." },
      },
      {
        title: { he: "אימות באינטרנט", en: "Online Validation" },
        description: { he: "תוך 3 חודשים — אימות הויזה באתר ANEF.", en: "Within 3 months — validate the visa on ANEF website." },
      },
    ],
  },
  {
    slug: "uae",
    name: { he: "איחוד האמירויות (דובאי)", en: "UAE (Dubai)" },
    flag: "🇦🇪",
    capital: "Abu Dhabi",
    language: "Arabic / English",
    currency: "AED (د.إ)",
    immigrationAuthority: {
      he: "ICP — המועצה הפדרלית לזהות, אזרחות, מכס וביטחון נמלים",
      en: "ICP — Federal Authority for Identity, Citizenship, Customs & Port Security",
    },
    overview: {
      he: "איחוד האמירויות, ובפרט דובאי, הפכו ליעד הגירה מוביל עם 0% מס הכנסה, תשתיות עולמיות, ומסלולי ויזה גמישים. Golden Visa ל-10 שנים, ויזת פרילנסר, ומסלולי עבודה מהירים מושכים מקצוענים מכל העולם.",
      en: "The UAE, particularly Dubai, has become a leading immigration destination with 0% income tax, world-class infrastructure, and flexible visa pathways. A 10-year Golden Visa, freelancer visa, and fast work routes attract professionals from around the world.",
    },
    visaTypes: [
      {
        name: { he: "Golden Visa (10 שנים)", en: "Golden Visa (10 Years)" },
        description: {
          he: "תושבות ארוכת טווח למשקיעים, יזמים, מדענים, אמנים מצטיינים, ובעלי כישרון מיוחד. ללא צורך בספונסר.",
          en: "Long-term residency for investors, entrepreneurs, scientists, outstanding artists, and exceptional talent. No sponsor needed.",
        },
        duration: "10 years (renewable)",
        requirements: [
          { he: "השקעה בנדל\"ן AED 2M+ (כ-$545,000)", en: "Real estate investment AED 2M+ (~$545,000)" },
          { he: "או: יזם עם פרויקט מאושר", en: "Or: entrepreneur with approved project" },
          { he: "או: מקצוען עם שכר AED 30,000+/חודש", en: "Or: professional earning AED 30,000+/month" },
          { he: "או: מדען/חוקר/אמן מצטיין", en: "Or: outstanding scientist/researcher/artist" },
        ],
      },
      {
        name: { he: "Green Visa (5 שנים)", en: "Green Visa (5 Years)" },
        description: {
          he: "תושבות עצמאית ללא ספונסר — לעובדים מיומנים, פרילנסרים ומשקיעים.",
          en: "Self-sponsored residency — for skilled workers, freelancers, and investors.",
        },
        duration: "5 years",
        requirements: [
          { he: "שכר חודשי AED 15,000+ (עובדים)", en: "Monthly salary AED 15,000+ (employees)" },
          { he: "או: רישיון פרילנסר + הכנסה מוכחת", en: "Or: freelancer permit + proven income" },
          { he: "תואר אקדמי או רישיון מקצועי", en: "Academic degree or professional license" },
        ],
      },
      {
        name: { he: "Employment Visa", en: "Employment Visa" },
        description: {
          he: "אשרת עבודה סטנדרטית — המעסיק מגיש בקשה ומשמש כספונסר.",
          en: "Standard work visa — employer applies and serves as sponsor.",
        },
        duration: "2–3 years",
        requirements: [
          { he: "הצעת עבודה ממעסיק באמירויות", en: "Job offer from UAE employer" },
          { he: "בדיקה רפואית", en: "Medical examination" },
          { he: "תעודות מוכרות ומאושרות", en: "Attested qualifications" },
          { he: "Emirates ID", en: "Emirates ID registration" },
        ],
      },
      {
        name: { he: "Freelancer Visa", en: "Freelancer Visa" },
        description: {
          he: "לעצמאיים ופרילנסרים — אפשר לפתוח רישיון ב-Free Zone ולעבוד עצמאית.",
          en: "For self-employed and freelancers — open a license in a Free Zone and work independently.",
        },
        duration: "1–3 years",
        requirements: [
          { he: "רישיון Free Zone (מ-AED 7,500/שנה)", en: "Free Zone license (from AED 7,500/year)" },
          { he: "פורטפוליו או הוכחת ניסיון", en: "Portfolio or proof of experience" },
          { he: "ביטוח בריאות", en: "Health insurance" },
        ],
      },
      {
        name: { he: "Digital Nomad Visa", en: "Remote Work Visa" },
        description: {
          he: "אשרה לעובדים מרחוק שרוצים לגור בדובאי ולעבוד עם חברות מחוץ לאמירויות.",
          en: "Visa for remote workers who want to live in Dubai while working for companies outside the UAE.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "הכנסה חודשית $3,500+ (או חיסכון שווה ערך)", en: "Monthly income $3,500+ (or equivalent savings)" },
          { he: "חוזה עבודה עם חברה מחוץ לאמירויות", en: "Employment contract with company outside UAE" },
          { he: "ביטוח בריאות בתוקף", en: "Valid health insurance" },
          { he: "דרכון בתוקף 6 חודשים+", en: "Passport valid 6+ months" },
        ],
      },
      {
        name: { he: "Investor / Business Visa", en: "Investor / Business Visa" },
        description: {
          he: "לפתיחת עסק באמירויות — ב-Free Zone או ב-Mainland. כולל רישיון עסקי וויזת תושב.",
          en: "For starting a business in the UAE — in a Free Zone or Mainland. Includes trade license and resident visa.",
        },
        duration: "2–10 years",
        requirements: [
          { he: "תוכנית עסקית", en: "Business plan" },
          { he: "הון ראשוני (תלוי בסוג הרישיון)", en: "Initial capital (depends on license type)" },
          { he: "בחירת Free Zone או Mainland", en: "Choose Free Zone or Mainland" },
          { he: "רישום החברה + רישיון עסקי", en: "Company registration + trade license" },
        ],
      },
      {
        name: { he: "Family Visa", en: "Family Visa" },
        description: {
          he: "ספונסרשיפ לבני משפחה — בן/בת זוג, ילדים, הורים.",
          en: "Sponsorship for family members — spouse, children, parents.",
        },
        duration: "Same as sponsor's visa",
        requirements: [
          { he: "שכר מינימלי AED 4,000+ (או AED 3,000 + דיור)", en: "Minimum salary AED 4,000+ (or AED 3,000 + housing)" },
          { he: "חוזה שכירות (Ejari)", en: "Tenancy contract (Ejari)" },
          { he: "תעודת נישואין/לידה מאומתת", en: "Attested marriage/birth certificate" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול וסוג רישיון", en: "Choose Pathway & License Type" },
        description: { he: "Employment, Freelancer, Free Zone, או Golden Visa — כל אחד עם תהליך שונה.", en: "Employment, Freelancer, Free Zone, or Golden Visa — each with a different process." },
      },
      {
        title: { he: "הגשת בקשה ואישור ראשוני", en: "Application & Initial Approval" },
        description: { he: "Entry Permit או Change of Status — תלוי אם נמצאים בארץ או בחו\"ל.", en: "Entry Permit or Change of Status — depends on whether inside or outside the UAE." },
      },
      {
        title: { he: "בדיקה רפואית + Emirates ID", en: "Medical Test + Emirates ID" },
        description: { he: "בדיקה רפואית במרכז מוסמך + צילום ביומטרי ל-Emirates ID.", en: "Medical test at authorized center + biometrics for Emirates ID." },
      },
      {
        title: { he: "הטבעת ויזה (Visa Stamping)", en: "Visa Stamping" },
        description: { he: "הטבעת אשרת שהייה בדרכון — בד\"כ תוך 2–5 ימי עבודה.", en: "Residence visa stamped in passport — usually within 2–5 business days." },
      },
      {
        title: { he: "פתיחת חשבון בנק + התיישבות", en: "Bank Account + Settlement" },
        description: { he: "עם Emirates ID ניתן לפתוח חשבון, לשכור דירה ולהתחיל לעבוד.", en: "With Emirates ID, open a bank account, rent an apartment, and start working." },
      },
    ],
  },
  {
    slug: "portugal",
    name: { he: "פורטוגל", en: "Portugal" },
    flag: "🇵🇹",
    capital: "Lisbon",
    language: "Portuguese",
    currency: "EUR (€)",
    immigrationAuthority: {
      he: "AIMA — הסוכנות לשילוב, הגירה ומקלט",
      en: "AIMA — Agency for Integration, Migration and Asylum",
    },
    overview: {
      he: "פורטוגל הפכה ליעד הגירה חם במיוחד — עם אקלים נוח, עלויות חיים סבירות, ומסלולי ויזה אטרקטיביים כולל Digital Nomad ו-D7 להכנסה פסיבית. תוכנית ה-NHR מציעה הטבות מס משמעותיות לתושבים חדשים.",
      en: "Portugal has become an especially hot immigration destination — with pleasant climate, reasonable cost of living, and attractive visa routes including Digital Nomad and D7 for passive income. The NHR program offers significant tax benefits for new residents.",
    },
    visaTypes: [
      {
        name: { he: "Digital Nomad Visa (D8)", en: "Digital Nomad Visa (D8)" },
        description: {
          he: "לעובדים מרחוק ופרילנסרים עם הכנסה מחוץ לפורטוגל. אחת האשרות הפופולריות ביותר באירופה.",
          en: "For remote workers and freelancers with income from outside Portugal. One of Europe's most popular visas.",
        },
        duration: "1 year → 2 years (renewable)",
        requirements: [
          { he: "הכנסה חודשית 4x שכר מינימום (כ-€3,500)", en: "Monthly income 4x minimum wage (~€3,500)" },
          { he: "חוזה עבודה או הוכחת פרילנס", en: "Employment contract or freelance proof" },
          { he: "ביטוח בריאות", en: "Health insurance" },
          { he: "ללא עבר פלילי", en: "No criminal record" },
        ],
      },
      {
        name: { he: "D7 — הכנסה פסיבית", en: "D7 — Passive Income Visa" },
        description: {
          he: "לבעלי הכנסה פסיבית — פנסיה, השקעות, שכירות. מסלול פופולרי לגמלאים ובעלי הון.",
          en: "For those with passive income — pensions, investments, rent. Popular route for retirees and investors.",
        },
        duration: "2 years (renewable → PR after 5)",
        requirements: [
          { he: "הכנסה פסיבית €760+/חודש", en: "Passive income €760+/month" },
          { he: "דיור בפורטוגל", en: "Accommodation in Portugal" },
          { he: "ביטוח בריאות", en: "Health insurance" },
        ],
      },
      {
        name: { he: "Tech Visa", en: "Tech Visa" },
        description: {
          he: "מסלול מהיר לעובדי טכנולוגיה בחברות סטארטאפ מוכרות בפורטוגל.",
          en: "Fast track for tech workers in certified startup companies in Portugal.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "הצעת עבודה מחברה מוסמכת", en: "Job offer from a certified company" },
          { he: "כישורים טכנולוגיים רלוונטיים", en: "Relevant tech skills" },
          { he: "חוזה עבודה", en: "Employment contract" },
        ],
      },
      {
        name: { he: "Work Visa (D1)", en: "Work Visa (D1)" },
        description: {
          he: "אשרת עבודה סטנדרטית עם מעסיק פורטוגלי.",
          en: "Standard work visa with a Portuguese employer.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "חוזה עבודה ממעסיק פורטוגלי", en: "Contract from Portuguese employer" },
          { he: "אישור SEF/AIMA", en: "SEF/AIMA authorization" },
          { he: "תעודות מקצועיות", en: "Professional qualifications" },
        ],
      },
      {
        name: { he: "Family Reunification", en: "Family Reunification" },
        description: {
          he: "לבני משפחה של תושבים חוקיים בפורטוגל.",
          en: "For family members of legal residents in Portugal.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "הספונסר תושב חוקי", en: "Sponsor is legal resident" },
          { he: "הוכחת קשר משפחתי", en: "Proof of family relationship" },
          { he: "הכנסה והתחייבות כלכלית", en: "Income and financial commitment" },
        ],
      },
      {
        name: { he: "Student Visa (D4)", en: "Student Visa (D4)" },
        description: {
          he: "ללימודים במוסד מוכר בפורטוגל. שכר לימוד נמוך ביחס למערב אירופה.",
          en: "For study at a recognized Portuguese institution. Low tuition compared to Western Europe.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "אישור קבלה ממוסד מוכר", en: "Acceptance from recognized institution" },
          { he: "הוכחת יכולת כלכלית", en: "Proof of financial means" },
          { he: "ביטוח בריאות", en: "Health insurance" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose Pathway" },
        description: { he: "D7, D8 (Digital Nomad), Tech Visa, או עבודה רגילה.", en: "D7, D8 (Digital Nomad), Tech Visa, or standard work." },
      },
      {
        title: { he: "הכנת מסמכים", en: "Prepare Documents" },
        description: { he: "NIF (מספר מס), חשבון בנק פורטוגלי, ביטוח, ואישורים.", en: "NIF (tax number), Portuguese bank account, insurance, and certificates." },
      },
      {
        title: { he: "הגשה בקונסוליה", en: "Consulate Application" },
        description: { he: "הגשת בקשת ויזה בקונסוליה הפורטוגלית.", en: "Submit visa application at the Portuguese consulate." },
      },
      {
        title: { he: "הגעה + אשרת שהייה", en: "Arrival + Residence Permit" },
        description: { he: "לאחר ההגעה — פגישה ב-AIMA לקבלת כרטיס תושב.", en: "After arrival — appointment at AIMA for residence card." },
      },
    ],
  },
  {
    slug: "netherlands",
    name: { he: "הולנד", en: "Netherlands" },
    flag: "🇳🇱",
    capital: "Amsterdam",
    language: "Dutch / English",
    currency: "EUR (€)",
    immigrationAuthority: {
      he: "IND — שירות ההגירה וההתאזרחות",
      en: "IND — Immigration and Naturalisation Service",
    },
    overview: {
      he: "הולנד מציעה סביבת עבודה בינלאומית עם שימוש נרחב באנגלית, הטבת מס 30% לעובדים זרים מיומנים, ומסלולי הגירה ידידותיים ליזמים ומקצוענים.",
      en: "The Netherlands offers an international work environment with widespread English usage, 30% tax ruling for skilled foreign workers, and entrepreneur-friendly immigration pathways.",
    },
    visaTypes: [
      {
        name: { he: "Highly Skilled Migrant", en: "Highly Skilled Migrant (Kennismigrant)" },
        description: {
          he: "המסלול הפופולרי ביותר — לעובדים מיומנים עם שכר מעל הסף. כולל הטבת מס 30% (30% ruling).",
          en: "The most popular route — for skilled workers earning above the threshold. Includes 30% tax ruling benefit.",
        },
        duration: "5 years max",
        requirements: [
          { he: "שכר שנתי מעל €46,107 (או €35,048 מתחת לגיל 30)", en: "Annual salary above €46,107 (or €35,048 if under 30)" },
          { he: "מעסיק מוכר כספונסר IND", en: "Employer recognized as IND sponsor" },
          { he: "תואר או ניסיון רלוונטי", en: "Degree or relevant experience" },
        ],
      },
      {
        name: { he: "DAFT — יזמים אמריקאים", en: "DAFT — US Entrepreneurs" },
        description: {
          he: "הסכם ייחודי בין הולנד לארה\"ב — מאפשר לאמריקאים לפתוח עסק בהולנד עם השקעה מינימלית.",
          en: "Unique Dutch-American Friendship Treaty — allows Americans to start a business in NL with minimal investment.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "אזרחות אמריקאית", en: "US citizenship" },
          { he: "השקעה מינימלית €4,500", en: "Minimum investment €4,500" },
          { he: "תוכנית עסקית", en: "Business plan" },
          { he: "רישום בלשכת המסחר (KVK)", en: "Registration at Chamber of Commerce (KVK)" },
        ],
      },
      {
        name: { he: "Startup Visa", en: "Startup Visa" },
        description: {
          he: "ליזמים עם רעיון חדשני. חייבים לעבוד עם facilitator מוכר בהולנד.",
          en: "For entrepreneurs with an innovative idea. Must work with a recognized facilitator in NL.",
        },
        duration: "1 year → self-employment permit",
        requirements: [
          { he: "הסכם עם facilitator מוכר", en: "Agreement with recognized facilitator" },
          { he: "רעיון עסקי חדשני", en: "Innovative business idea" },
          { he: "מספיק כסף למחייה", en: "Sufficient funds for living" },
          { he: "רישום בלשכת המסחר", en: "Chamber of Commerce registration" },
        ],
      },
      {
        name: { he: "Family Reunification", en: "Family Reunification" },
        description: {
          he: "לבני זוג וילדים של תושבי הולנד. כולל מבחן שילוב אזרחי בסיסי.",
          en: "For spouses and children of Dutch residents. Includes basic civic integration exam.",
        },
        duration: "5 years",
        requirements: [
          { he: "הכנסה מינימלית של הספונסר", en: "Sponsor's minimum income" },
          { he: "מבחן שילוב אזרחי (MVV)", en: "Civic integration exam (MVV)" },
          { he: "הוכחת קשר אמיתי", en: "Proof of genuine relationship" },
        ],
      },
      {
        name: { he: "Student Visa", en: "Student Visa" },
        description: {
          he: "ללימודים באוניברסיטה הולנדית. תוכניות רבות באנגלית. אפשרות Orientation Year לאחר סיום.",
          en: "For study at a Dutch university. Many English-taught programs. Orientation Year option after graduation.",
        },
        duration: "Duration of studies",
        requirements: [
          { he: "קבלה למוסד מוכר", en: "Acceptance from recognized institution" },
          { he: "הוכחת כלכלית (€13,000/שנה)", en: "Financial proof (€13,000/year)" },
          { he: "ביטוח בריאות", en: "Health insurance" },
        ],
      },
      {
        name: { he: "Orientation Year (Zoekjaar)", en: "Orientation Year (Zoekjaar)" },
        description: {
          he: "שנת חיפוש עבודה לבוגרי אוניברסיטאות מובילות בעולם — גם בלי ללמוד בהולנד.",
          en: "Job-seeking year for graduates of top world universities — even without studying in NL.",
        },
        duration: "1 year",
        requirements: [
          { he: "תואר מאוניברסיטה בדירוג Top 200", en: "Degree from a Top 200 university" },
          { he: "סיום ב-3 השנים האחרונות", en: "Graduated within the last 3 years" },
          { he: "מספיק כסף למחייה", en: "Sufficient funds for living" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose Pathway" },
        description: { he: "Highly Skilled, DAFT, Startup, או לימודים.", en: "Highly Skilled, DAFT, Startup, or study." },
      },
      {
        title: { he: "הגשת בקשת MVV", en: "Apply for MVV" },
        description: { he: "בקשת ויזת כניסה (MVV) בשגרירות ההולנדית — או הגשה ע\"י הספונסר בהולנד.", en: "Apply for entry visa (MVV) at Dutch embassy — or sponsor applies in NL." },
      },
      {
        title: { he: "הגעה ורישום", en: "Arrival & Registration" },
        description: { he: "רישום בעירייה (gemeente) + קבלת BSN (מספר זהות).", en: "Register at municipality (gemeente) + receive BSN (citizen service number)." },
      },
      {
        title: { he: "אשרת שהייה", en: "Residence Permit" },
        description: { he: "קבלת כרטיס תושב מ-IND — בד\"כ תוך 2 שבועות.", en: "Receive residence card from IND — usually within 2 weeks." },
      },
    ],
  },
  {
    slug: "italy",
    name: { he: "איטליה", en: "Italy" },
    flag: "🇮🇹",
    capital: "Rome",
    language: "Italian",
    currency: "EUR (€)",
    immigrationAuthority: {
      he: "Questura — משטרת המחוז + Sportello Unico",
      en: "Questura — Provincial Police + Sportello Unico",
    },
    overview: {
      he: "איטליה מציעה איכות חיים יוצאת דופן, תרבות עשירה, ומסלולי הגירה כולל Digital Nomad Visa חדשה, Elective Residence לבעלי הכנסה פסיבית, ותוכנית מס שטוחה של 7% לגמלאים שעוברים לדרום.",
      en: "Italy offers exceptional quality of life, rich culture, and immigration routes including a new Digital Nomad Visa, Elective Residence for passive income holders, and a flat 7% tax program for retirees relocating to the south.",
    },
    visaTypes: [
      {
        name: { he: "Digital Nomad Visa", en: "Digital Nomad Visa" },
        description: {
          he: "אשרה חדשה (2024) לעובדים מרחוק עם חברות מחוץ לאיטליה. כולל הטבות מס אפשריות.",
          en: "New visa (2024) for remote workers with companies outside Italy. Includes possible tax benefits.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "הכנסה שנתית מינימלית (~€28,000)", en: "Minimum annual income (~€28,000)" },
          { he: "עבודה עם חברה מחוץ לאיטליה", en: "Work with company outside Italy" },
          { he: "ביטוח בריאות", en: "Health insurance" },
          { he: "דיור באיטליה", en: "Accommodation in Italy" },
        ],
      },
      {
        name: { he: "Elective Residence", en: "Elective Residence (Residenza Elettiva)" },
        description: {
          he: "לחיים באיטליה ללא עבודה — לגמלאים, בעלי הכנסה פסיבית, אנשי הון. כולל תוכנית מס 7% בדרום.",
          en: "For living in Italy without working — retirees, passive income holders. Includes 7% flat tax in southern regions.",
        },
        duration: "1 year (renewable → PR after 5)",
        requirements: [
          { he: "הכנסה פסיבית מספקת (אין סף רשמי, בפועל €31,000+)", en: "Sufficient passive income (no official threshold, ~€31,000+ in practice)" },
          { he: "דיור באיטליה", en: "Accommodation in Italy" },
          { he: "ביטוח בריאות מלא", en: "Full health insurance" },
        ],
      },
      {
        name: { he: "Work Visa (Nulla Osta)", en: "Work Visa (Nulla Osta)" },
        description: {
          he: "אשרת עבודה עם מעסיק איטלקי. כפופה למכסה שנתית (Decreto Flussi).",
          en: "Work visa with Italian employer. Subject to annual quota (Decreto Flussi).",
        },
        duration: "2 years",
        requirements: [
          { he: "הצעת עבודה ממעסיק איטלקי", en: "Job offer from Italian employer" },
          { he: "Nulla Osta (אישור מקדים)", en: "Nulla Osta (preliminary authorization)" },
          { he: "מקום במכסה השנתית", en: "Available quota slot" },
        ],
      },
      {
        name: { he: "EU Blue Card", en: "EU Blue Card" },
        description: {
          he: "לבעלי תואר אקדמי עם הצעת עבודה בשכר גבוה. לא כפוף למכסה.",
          en: "For degree holders with a high-salary job offer. Not subject to quota.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "תואר אקדמי מוכר", en: "Recognized academic degree" },
          { he: "שכר שנתי מינימלי (כ-€27,000)", en: "Minimum annual salary (~€27,000)" },
          { he: "חוזה עבודה שנה+", en: "Employment contract 1+ year" },
        ],
      },
      {
        name: { he: "Startup Visa", en: "Startup Visa (Italia Startup)" },
        description: {
          he: "ליזמים שרוצים להקים סטארטאפ חדשני באיטליה.",
          en: "For entrepreneurs wanting to establish an innovative startup in Italy.",
        },
        duration: "1 year (renewable to 2)",
        requirements: [
          { he: "תוכנית עסקית חדשנית", en: "Innovative business plan" },
          { he: "הון עצמי €50,000+", en: "Own capital €50,000+" },
          { he: "אישור מוועדת Italia Startup", en: "Approval from Italia Startup committee" },
        ],
      },
      {
        name: { he: "Family Visa", en: "Family Visa" },
        description: {
          he: "לבני משפחה של תושבים חוקיים באיטליה.",
          en: "For family members of legal residents in Italy.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "הספונסר תושב חוקי", en: "Sponsor is legal resident" },
          { he: "הכנסה שנתית מינימלית", en: "Minimum annual income" },
          { he: "דיור הולם", en: "Adequate housing" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose Pathway" },
        description: { he: "Digital Nomad, Elective Residence, עבודה, Blue Card, או Startup.", en: "Digital Nomad, Elective Residence, work, Blue Card, or Startup." },
      },
      {
        title: { he: "הגשה בקונסוליה", en: "Consulate Application" },
        description: { he: "הגשת בקשת ויזה D בקונסוליה האיטלקית.", en: "Submit D visa application at the Italian consulate." },
      },
      {
        title: { he: "הגעה ורישום", en: "Arrival & Registration" },
        description: { he: "תוך 8 ימים — הגשת בקשה ל-Permesso di Soggiorno בדואר.", en: "Within 8 days — submit Permesso di Soggiorno application by post." },
      },
      {
        title: { he: "אשרת שהייה", en: "Residence Permit" },
        description: { he: "פגישה ב-Questura + טביעות אצבע. קבלת כרטיס תוך 1–3 חודשים.", en: "Appointment at Questura + fingerprints. Card received within 1–3 months." },
      },
    ],
  },
  {
    slug: "sweden",
    name: { he: "שוודיה", en: "Sweden" },
    flag: "🇸🇪",
    capital: "Stockholm",
    language: "Swedish / English",
    currency: "SEK (kr)",
    immigrationAuthority: {
      he: "Migrationsverket — רשות ההגירה",
      en: "Migrationsverket — Swedish Migration Agency",
    },
    overview: {
      he: "שוודיה מציעה רמת חיים גבוהה מאוד, מערכת רווחה מתקדמת, וסביבה בינלאומית במיוחד בתחום הטכנולוגיה. לימודי תואר שני חינמיים לאזרחי EU, ושכר לימוד סביר לאחרים.",
      en: "Sweden offers very high living standards, an advanced welfare system, and an international environment especially in tech. Free master's degrees for EU citizens, and reasonable tuition for others.",
    },
    visaTypes: [
      {
        name: { he: "Work Permit", en: "Work Permit" },
        description: {
          he: "אשרת עבודה עם מעסיק שוודי. ללא מכסה — כל מי שמקבל הצעת עבודה יכול להגיש.",
          en: "Work permit with a Swedish employer. No quota — anyone with a job offer can apply.",
        },
        duration: "2 years (renewable to 4 → PR)",
        requirements: [
          { he: "הצעת עבודה ממעסיק שוודי", en: "Job offer from Swedish employer" },
          { he: "שכר מינימלי SEK 28,480/חודש", en: "Minimum salary SEK 28,480/month" },
          { he: "ביטוח בריאות ופנסיה", en: "Health and pension insurance" },
          { he: "תנאי עבודה לפי הסכם קיבוצי", en: "Working conditions per collective agreement" },
        ],
      },
      {
        name: { he: "EU Blue Card", en: "EU Blue Card" },
        description: {
          he: "לבעלי תואר אקדמי עם הצעת עבודה בשכר גבוה בשוודיה.",
          en: "For degree holders with a high-salary job offer in Sweden.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "תואר אקדמי מוכר", en: "Recognized academic degree" },
          { he: "שכר שנתי 1.5x ממוצע שוודי", en: "Annual salary 1.5x Swedish average" },
          { he: "חוזה עבודה שנה+", en: "Employment contract 1+ year" },
        ],
      },
      {
        name: { he: "Self-Employment Visa", en: "Self-Employment Visa" },
        description: {
          he: "ליזמים ועצמאיים שרוצים להפעיל עסק בשוודיה. דורש ניסיון וכסף להתחלה.",
          en: "For entrepreneurs wanting to run a business in Sweden. Requires experience and startup capital.",
        },
        duration: "2 years (renewable)",
        requirements: [
          { he: "ניסיון בניהול עסק", en: "Business management experience" },
          { he: "הון מספיק לפרנסה (2 שנים)", en: "Sufficient capital (2 years living)" },
          { he: "תוכנית עסקית מפורטת", en: "Detailed business plan" },
        ],
      },
      {
        name: { he: "Family Reunification", en: "Family Reunification" },
        description: {
          he: "לבני זוג וילדים של תושבי שוודיה. תהליך ארוך אך יציב.",
          en: "For spouses and children of Swedish residents. Long but stable process.",
        },
        duration: "2 years → PR",
        requirements: [
          { he: "קשר אמיתי ומתמשך", en: "Genuine and lasting relationship" },
          { he: "הספונסר מתקיים כלכלית", en: "Sponsor is self-sufficient" },
          { he: "דיור הולם", en: "Adequate housing" },
        ],
      },
      {
        name: { he: "Student Residence Permit", en: "Student Residence Permit" },
        description: {
          he: "ללימודים באוניברסיטה שוודית. תוכניות מאסטר רבות באנגלית. אפשרות Job Seeker Visa לאחר סיום.",
          en: "For study at a Swedish university. Many master's programs in English. Job Seeker Visa option after graduation.",
        },
        duration: "Duration of studies",
        requirements: [
          { he: "קבלה למוסד מוכר", en: "Acceptance from recognized institution" },
          { he: "הוכחת כלכלית (SEK 9,450/חודש)", en: "Financial proof (SEK 9,450/month)" },
          { he: "ביטוח בריאות מקיף", en: "Comprehensive health insurance" },
        ],
      },
      {
        name: { he: "Asylum", en: "Asylum" },
        description: {
          he: "שוודיה מקבלת מבקשי מקלט לפי אמנת ז'נבה. הבקשה מוגשת ב-Migrationsverket.",
          en: "Sweden accepts asylum seekers under the Geneva Convention. Applications filed at Migrationsverket.",
        },
        duration: "3 years (refugee) / 13 months (subsidiary)",
        requirements: [
          { he: "נוכחות פיזית בשוודיה", en: "Physical presence in Sweden" },
          { he: "הגשה ב-Migrationsverket", en: "Application at Migrationsverket" },
          { he: "ראיון אישי", en: "Personal interview" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose Pathway" },
        description: { he: "עבודה, Blue Card, יזמות, לימודים, או משפחה.", en: "Work, Blue Card, self-employment, study, or family." },
      },
      {
        title: { he: "הגשה מקוונת", en: "Online Application" },
        description: { he: "הגשה באתר Migrationsverket + תשלום אגרה.", en: "Apply on Migrationsverket website + pay fee." },
      },
      {
        title: { he: "ביומטריה בשגרירות", en: "Biometrics at Embassy" },
        description: { he: "ביקור בשגרירות השוודית לצילום טביעות אצבע.", en: "Visit Swedish embassy for fingerprints." },
      },
      {
        title: { he: "החלטה + הגעה", en: "Decision + Arrival" },
        description: { he: "זמן טיפול: 1–9 חודשים (תלוי בסוג). רישום ב-Skatteverket לאחר הגעה.", en: "Processing: 1–9 months (varies). Register at Skatteverket after arrival." },
      },
    ],
  },
  {
    slug: "japan",
    name: { he: "יפן", en: "Japan" },
    flag: "🇯🇵",
    capital: "Tokyo",
    language: "Japanese",
    currency: "JPY (¥)",
    immigrationAuthority: {
      he: "ISA — סוכנות שירותי ההגירה",
      en: "ISA — Immigration Services Agency of Japan",
    },
    overview: {
      he: "יפן פתחה את שעריה להגירה בשנים האחרונות עם Digital Nomad Visa חדשה, Highly Skilled Professional עם מסלול מהיר לתושבות קבע (שנה בלבד!), ותוכניות לסטודנטים. הכלכלה השלישית בגודלה בעולם עם תרבות ייחודית.",
      en: "Japan has opened its doors to immigration in recent years with a new Digital Nomad Visa, Highly Skilled Professional with fast PR track (just 1 year!), and student programs. The world's third-largest economy with a unique culture.",
    },
    visaTypes: [
      {
        name: { he: "Highly Skilled Professional (HSP)", en: "Highly Skilled Professional (HSP)" },
        description: {
          he: "מסלול מבוסס נקודות למקצוענים ברמה גבוהה. 70 נקודות = תושבות קבע תוך 3 שנים, 80 נקודות = תוך שנה אחת בלבד!",
          en: "Points-based route for high-level professionals. 70 points = PR in 3 years, 80 points = PR in just 1 year!",
        },
        duration: "5 years (→ PR in 1–3 years)",
        requirements: [
          { he: "70 נקודות מינימום (גיל, השכלה, שכר, ניסיון)", en: "Minimum 70 points (age, education, salary, experience)" },
          { he: "הצעת עבודה ביפן", en: "Job offer in Japan" },
          { he: "תואר אקדמי או 10 שנות ניסיון", en: "Academic degree or 10 years experience" },
        ],
      },
      {
        name: { he: "Engineer / Specialist in Humanities", en: "Engineer / Specialist in Humanities" },
        description: {
          he: "אשרת העבודה הנפוצה ביותר — למהנדסים, מתכנתים, מעצבים, משווקים, ומורים.",
          en: "The most common work visa — for engineers, programmers, designers, marketers, and teachers.",
        },
        duration: "1–5 years (renewable)",
        requirements: [
          { he: "תואר אקדמי או 10 שנות ניסיון", en: "University degree or 10 years experience" },
          { he: "הצעת עבודה ממעסיק יפני", en: "Job offer from Japanese employer" },
          { he: "התאמה בין התואר לתפקיד", en: "Match between degree and position" },
        ],
      },
      {
        name: { he: "Digital Nomad Visa", en: "Digital Nomad Visa" },
        description: {
          he: "אשרה חדשה (2024) לעובדים מרחוק. מאפשרת שהייה ביפן עד 6 חודשים.",
          en: "New visa (2024) for remote workers. Allows stay in Japan for up to 6 months.",
        },
        duration: "6 months (non-renewable)",
        requirements: [
          { he: "הכנסה שנתית ¥10M+ (כ-$68,000)", en: "Annual income ¥10M+ (~$68,000)" },
          { he: "ביטוח בריאות פרטי", en: "Private health insurance" },
          { he: "אזרחות מדינה עם הסכם מס עם יפן", en: "Citizenship of a country with tax treaty with Japan" },
        ],
      },
      {
        name: { he: "Spouse / Family Visa", en: "Spouse / Family Visa" },
        description: {
          he: "לבני זוג וילדים של אזרחים יפניים או תושבי קבע.",
          en: "For spouses and children of Japanese nationals or permanent residents.",
        },
        duration: "1–3 years (renewable → PR)",
        requirements: [
          { he: "נישואים חוקיים לאזרח/ית יפני/ת", en: "Legal marriage to Japanese national" },
          { he: "הוכחת קשר אמיתי", en: "Proof of genuine relationship" },
          { he: "יכולת כלכלית", en: "Financial ability" },
        ],
      },
      {
        name: { he: "Student Visa", en: "Student Visa" },
        description: {
          he: "ללימודים במוסד יפני — אוניברסיטה, בית ספר לשפה יפנית, או מכללה מקצועית.",
          en: "For study at a Japanese institution — university, Japanese language school, or vocational college.",
        },
        duration: "1–2 years (renewable)",
        requirements: [
          { he: "אישור קבלה ממוסד מוכר", en: "Acceptance from recognized institution" },
          { he: "Certificate of Eligibility (CoE)", en: "Certificate of Eligibility (CoE)" },
          { he: "הוכחת יכולת כלכלית", en: "Proof of financial ability" },
        ],
      },
      {
        name: { he: "Business Manager Visa", en: "Business Manager Visa" },
        description: {
          he: "לפתיחת או ניהול עסק ביפן. דורש משרד פיזי והשקעה ראשונית.",
          en: "For starting or managing a business in Japan. Requires physical office and initial investment.",
        },
        duration: "1 year (renewable)",
        requirements: [
          { he: "משרד פיזי ביפן", en: "Physical office in Japan" },
          { he: "השקעה ¥5M+ (כ-$34,000) או 2 עובדים", en: "Investment ¥5M+ (~$34,000) or 2 employees" },
          { he: "תוכנית עסקית", en: "Business plan" },
        ],
      },
    ],
    process: [
      {
        title: { he: "בחירת מסלול", en: "Choose Pathway" },
        description: { he: "HSP, Engineer, Digital Nomad, Student, או Business Manager.", en: "HSP, Engineer, Digital Nomad, Student, or Business Manager." },
      },
      {
        title: { he: "Certificate of Eligibility (CoE)", en: "Certificate of Eligibility (CoE)" },
        description: { he: "המעסיק או בית הספר מגיש בקשת CoE ב-ISA ביפן.", en: "Employer or school submits CoE application at ISA in Japan." },
      },
      {
        title: { he: "ויזה בשגרירות", en: "Visa at Embassy" },
        description: { he: "עם ה-CoE — הגשת בקשת ויזה בשגרירות היפנית. 5–10 ימי עבודה.", en: "With CoE — apply for visa at Japanese embassy. 5–10 business days." },
      },
      {
        title: { he: "הגעה ורישום", en: "Arrival & Registration" },
        description: { he: "רישום בעירייה, קבלת Residence Card, ופתיחת חשבון בנק.", en: "Register at city hall, receive Residence Card, and open bank account." },
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
