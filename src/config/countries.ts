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
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map((c) => c.slug);
}
