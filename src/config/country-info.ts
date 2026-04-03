import type { CountryInfo } from "./countries";

export const countryInfoMap: Record<string, CountryInfo> = {
  uk: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "67.7M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "£35,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "20–45%" },
      { label: { he: "שכירות (לונדון)", en: "Rent (London)" }, value: "£1,800/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 15" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "NHS (חינם)" },
    ],
    pros: [
      { he: "שפה אנגלית — אין מחסום שפה", en: "English-speaking — no language barrier" },
      { he: "NHS — שירותי בריאות חינם לתושבים", en: "NHS — free healthcare for residents" },
      { he: "שוק עבודה חזק בטכנולוגיה ופיננסים", en: "Strong job market in tech and finance" },
      { he: "מערכת חינוך עולמית (אוקספורד, קיימברידג')", en: "World-class education (Oxford, Cambridge)" },
      { he: "מעבר לאזרחות אחרי 6 שנים", en: "Path to citizenship after 6 years" },
    ],
    cons: [
      { he: "עלויות חיים גבוהות, במיוחד לונדון", en: "High cost of living, especially London" },
      { he: "מזג אוויר — גשום ואפור", en: "Weather — rainy and grey" },
      { he: "מערכת הגירה מורכבת ומשתנה", en: "Complex and changing immigration system" },
      { he: "NHS — זמני המתנה ארוכים", en: "NHS — long waiting times" },
    ],
    funFacts: [
      { he: "לונדון היא אחת הערים הכי מגוונות בעולם — מעל 300 שפות מדוברות בה", en: "London is one of the most diverse cities — over 300 languages spoken" },
      { he: "1 מכל 7 תושבי בריטניה נולד מחוץ למדינה", en: "1 in 7 UK residents were born abroad" },
      { he: "בריטניה היא המדינה הראשונה שיצרה מערכת נקודות להגירה", en: "The UK pioneered the points-based immigration system" },
    ],
    healthcareNote: {
      he: "מערכת ה-NHS מספקת טיפול רפואי חינם לכל תושב. זמני המתנה יכולים להיות ארוכים, אבל הטיפול באיכות גבוהה. ניתן לרכוש ביטוח פרטי בנוסף.",
      en: "The NHS provides free healthcare to all residents. Wait times can be long, but care quality is high. Private insurance is also available.",
    },
    costOfLiving: {
      he: "לונדון: £2,500–4,000/חודש לזוג. מחוץ ללונדון: £1,500–2,500. ארוחה במסעדה: £15–25. קפה: £3.50.",
      en: "London: £2,500–4,000/month for a couple. Outside London: £1,500–2,500. Restaurant meal: £15–25. Coffee: £3.50.",
    },
  },

  germany: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "84.5M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "€52,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "14–45%" },
      { label: { he: "שכירות (ברלין)", en: "Rent (Berlin)" }, value: "€1,200/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 10" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "חובה (ציבורי/פרטי)" },
    ],
    pros: [
      { he: "כלכלה חזקה — המובילה באירופה", en: "Strongest economy in Europe" },
      { he: "לימודי תואר חינם ברוב האוניברסיטאות", en: "Free tuition at most universities" },
      { he: "Chancenkarte — אשרת חיפוש עבודה ללא הצעה מראש", en: "Chancenkarte — job-seeking visa without prior offer" },
      { he: "מערכת בריאות מצוינת", en: "Excellent healthcare system" },
      { he: "מיקום מרכזי באירופה — קל לטייל", en: "Central European location — easy to travel" },
    ],
    cons: [
      { he: "בירוקרטיה גרמנית — תהליכים איטיים ומסורבלים", en: "German bureaucracy — slow and cumbersome processes" },
      { he: "שפה — גרמנית נדרשת ברוב המקרים", en: "Language — German required in most cases" },
      { he: "מס הכנסה גבוה (עד 45%)", en: "High income tax (up to 45%)" },
      { he: "קשה למצוא דירה בערים הגדולות", en: "Hard to find apartments in major cities" },
    ],
    funFacts: [
      { he: "גרמניה היא יעד ההגירה מס' 2 בעולם אחרי ארה\"ב", en: "Germany is the #2 immigration destination worldwide after the US" },
      { he: "ברלין זולה יותר מפריז, לונדון ואמסטרדם", en: "Berlin is cheaper than Paris, London, and Amsterdam" },
      { he: "Ausbildung — מערכת הכשרה מקצועית ייחודית שמשלבת לימודים ועבודה", en: "Ausbildung — unique vocational training combining study and work" },
    ],
    healthcareNote: {
      he: "ביטוח בריאות חובה בגרמניה. ניתן לבחור בין ביטוח ציבורי (GKV) לפרטי (PKV). הביטוח הציבורי כ-14.6% מהשכר (חצי על המעסיק). רמת הטיפול גבוהה מאוד.",
      en: "Health insurance is mandatory in Germany. Choose between public (GKV) and private (PKV). Public is ~14.6% of salary (half paid by employer). Care quality is very high.",
    },
    costOfLiving: {
      he: "ברלין: €1,800–3,000/חודש לזוג. מינכן: €2,500–4,000. ארוחה: €10–18. בירה: €4.",
      en: "Berlin: €1,800–3,000/month for a couple. Munich: €2,500–4,000. Meal: €10–18. Beer: €4.",
    },
  },

  usa: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "335M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "$63,000/yr" },
      { label: { he: "מס הכנסה (פדרלי)", en: "Federal Tax" }, value: "10–37%" },
      { label: { he: "שכירות (NYC)", en: "Rent (NYC)" }, value: "$3,500/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 20" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "פרטי (יקר)" },
    ],
    pros: [
      { he: "שוק העבודה הגדול והדינמי בעולם", en: "Largest and most dynamic job market in the world" },
      { he: "שכר גבוה — במיוחד בטכנולוגיה", en: "High salaries — especially in tech" },
      { he: "תרבות יזמית חזקה", en: "Strong entrepreneurial culture" },
      { he: "מגוון גאוגרפי ותרבותי עצום", en: "Huge geographic and cultural diversity" },
      { he: "אוניברסיטאות מובילות בעולם", en: "World-leading universities" },
    ],
    cons: [
      { he: "ביטוח בריאות יקר מאוד ולא אוניברסלי", en: "Very expensive, non-universal healthcare" },
      { he: "מערכת הגירה מורכבת עם זמני המתנה של שנים", en: "Complex immigration with years-long wait times" },
      { he: "H-1B מוגבל במכסה עם הגרלה", en: "H-1B limited by lottery cap" },
      { he: "עלויות חינוך גבוהות", en: "High education costs" },
      { he: "פערים חברתיים משמעותיים", en: "Significant social gaps" },
    ],
    funFacts: [
      { he: "מעל 45 מיליון תושבי ארה\"ב נולדו מחוץ למדינה — 13.7% מהאוכלוסייה", en: "Over 45 million US residents were born abroad — 13.7% of the population" },
      { he: "הגרלת הגרין קארד (DV Lottery) מחלקת 55,000 גרין קארד בשנה", en: "The DV Lottery distributes 55,000 green cards annually" },
      { he: "Silicon Valley מייצרת כמעט 20% מהתוצר של קליפורניה", en: "Silicon Valley generates nearly 20% of California's GDP" },
    ],
    healthcareNote: {
      he: "אין ביטוח בריאות אוניברסלי. רוב האמריקאים מבוטחים דרך המעסיק. עלות ממוצעת למשפחה: $22,000/שנה. Medicaid למצב כלכלי נמוך. Emergency rooms חייבים לטפל בכולם.",
      en: "No universal healthcare. Most Americans are insured through employers. Average family cost: $22,000/year. Medicaid for low income. ERs must treat everyone.",
    },
    costOfLiving: {
      he: "ניו יורק: $5,000–7,000/חודש לזוג. אוסטין: $3,000–4,500. ארוחה: $15–30. קפה: $5–7.",
      en: "NYC: $5,000–7,000/month for a couple. Austin: $3,000–4,500. Meal: $15–30. Coffee: $5–7.",
    },
  },

  canada: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "40.5M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "C$62,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "15–33% (פדרלי)" },
      { label: { he: "שכירות (טורונטו)", en: "Rent (Toronto)" }, value: "C$2,500/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 5" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "ציבורי חינם" },
    ],
    pros: [
      { he: "מדיניות הגירה ידידותית — Express Entry מהיר ושקוף", en: "Friendly immigration policy — fast and transparent Express Entry" },
      { he: "בריאות ציבורית חינם לתושבים", en: "Free public healthcare for residents" },
      { he: "חברה רב-תרבותית ומקבלת", en: "Multicultural and welcoming society" },
      { he: "איכות חיים גבוהה מאוד", en: "Very high quality of life" },
      { he: "תושבות קבע מהיום הראשון (ברוב המסלולים)", en: "Permanent residence from day one (most routes)" },
    ],
    cons: [
      { he: "חורף קשה ואון — מינוס 20–40 במקומות רבים", en: "Harsh winter — minus 20–40 in many areas" },
      { he: "שוק הדיור יקר מאוד (טורונטו, ונקובר)", en: "Very expensive housing (Toronto, Vancouver)" },
      { he: "שכר נמוך יותר מארה\"ב בהרבה מקצועות", en: "Lower salaries than US in many fields" },
      { he: "הכרה בתעודות חו\"ל — תהליך ארוך", en: "Foreign credential recognition — long process" },
    ],
    funFacts: [
      { he: "קנדה מקבלת כ-500,000 מהגרים חדשים בשנה — הכי הרבה ביחס לאוכלוסייה מבין מדינות G7", en: "Canada accepts ~500,000 immigrants/year — highest per capita among G7" },
      { he: "23% מתושבי קנדה נולדו מחוץ למדינה", en: "23% of Canadian residents were born abroad" },
      { he: "ויזת סטארטאפ — קנדה היחידה שנותנת PR ישירות ליזמים", en: "Startup Visa — Canada is the only country giving PR directly to entrepreneurs" },
    ],
    healthcareNote: {
      he: "מערכת בריאות ציבורית (Medicare) — חינם לכל תושב קבע. מכסה ביקורי רופא, אשפוז, ובדיקות. לא כולל שיניים ותרופות (בד\"כ דרך ביטוח מהעבודה).",
      en: "Public healthcare (Medicare) — free for all permanent residents. Covers doctor visits, hospitalization, tests. Dental and prescriptions usually through employer insurance.",
    },
    costOfLiving: {
      he: "טורונטו: C$3,500–5,000/חודש לזוג. מונטריאול: C$2,500–3,500. ארוחה: C$18–30. קפה: C$5.",
      en: "Toronto: C$3,500–5,000/month for a couple. Montreal: C$2,500–3,500. Meal: C$18–30. Coffee: C$5.",
    },
  },

  australia: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "26.5M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "A$95,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "19–45%" },
      { label: { he: "שכירות (סידני)", en: "Rent (Sydney)" }, value: "A$2,800/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 5" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "Medicare (ציבורי)" },
    ],
    pros: [
      { he: "שכר גבוה מאוד — מהגבוהים בעולם", en: "Very high salaries — among the highest globally" },
      { he: "איכות חיים יוצאת דופן — אקלים, טבע, חופים", en: "Exceptional quality of life — climate, nature, beaches" },
      { he: "שוק עבודה חזק עם ביקוש גבוה למקצוענים", en: "Strong job market with high demand for professionals" },
      { he: "Medicare — בריאות ציבורית", en: "Medicare — public healthcare" },
      { he: "חברה רב-תרבותית (30% נולדו בחו\"ל)", en: "Multicultural society (30% born overseas)" },
    ],
    cons: [
      { he: "רחוק מהכל — טיסות ארוכות ויקרות", en: "Far from everywhere — long and expensive flights" },
      { he: "עלויות חיים גבוהות (סידני, מלבורן)", en: "High cost of living (Sydney, Melbourne)" },
      { he: "תהליך הגירה תחרותי — צריך ניקוד גבוה", en: "Competitive immigration — need high points" },
      { he: "חום קיצוני באזורים מסוימים", en: "Extreme heat in certain areas" },
    ],
    funFacts: [
      { he: "אוסטרליה מקבלת כ-190,000 מהגרים קבועים בשנה", en: "Australia accepts ~190,000 permanent migrants per year" },
      { he: "שכר המינימום הגבוה בעולם — A$23.23 לשעה", en: "Highest minimum wage in the world — A$23.23/hour" },
      { he: "30% מתושבי אוסטרליה נולדו במדינה אחרת", en: "30% of Australian residents were born in another country" },
    ],
    healthcareNote: {
      he: "Medicare מספקת טיפול רפואי בסיסי חינם לאזרחים ותושבי קבע. כולל ביקורי רופא, בדיקות, ואשפוז ציבורי. רוב התושבים מוסיפים ביטוח פרטי לשיניים, עיניים, וביקורים פרטיים.",
      en: "Medicare provides free basic healthcare for citizens and PRs. Includes GP visits, tests, and public hospital. Most residents add private insurance for dental, optical, and private consultations.",
    },
    costOfLiving: {
      he: "סידני: A$4,000–6,000/חודש לזוג. מלבורן: A$3,500–5,000. ארוחה: A$20–35. קפה: A$5.",
      en: "Sydney: A$4,000–6,000/month for a couple. Melbourne: A$3,500–5,000. Meal: A$20–35. Coffee: A$5.",
    },
  },

  spain: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "48M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "€28,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "19–47%" },
      { label: { he: "שכירות (מדריד)", en: "Rent (Madrid)" }, value: "€1,200/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 20" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "ציבורי (מצוין)" },
    ],
    pros: [
      { he: "עלויות חיים נמוכות ביחס למערב אירופה", en: "Low cost of living compared to Western Europe" },
      { he: "אקלים מושלם — 300+ ימי שמש בשנה", en: "Perfect climate — 300+ sunny days per year" },
      { he: "Digital Nomad Visa — מהפופולריים באירופה", en: "Digital Nomad Visa — one of Europe's most popular" },
      { he: "מערכת בריאות ציבורית מצוינת", en: "Excellent public healthcare system" },
      { he: "אוכל, תרבות, ואיכות חיים יוצאי דופן", en: "Exceptional food, culture, and lifestyle" },
    ],
    cons: [
      { he: "שכר נמוך — קשה להתקיים רק משכר ספרדי", en: "Low salaries — hard to live on Spanish salary alone" },
      { he: "אבטלה גבוהה (11%+), במיוחד בקרב צעירים", en: "High unemployment (11%+), especially among youth" },
      { he: "בירוקרטיה — NIE ותהליכים ארוכים", en: "Bureaucracy — NIE and long processes" },
      { he: "ספרדית נדרשת — פחות אנגלית מצפון אירופה", en: "Spanish required — less English than Northern Europe" },
    ],
    funFacts: [
      { he: "ספרד היא יעד ה-Digital Nomad הפופולרי ביותר באירופה", en: "Spain is Europe's most popular Digital Nomad destination" },
      { he: "ברצלונה ומדריד נמצאות ב-Top 10 ערים לסטארטאפים באירופה", en: "Barcelona and Madrid are in Europe's Top 10 startup cities" },
      { he: "תוחלת חיים שנייה הכי גבוהה בעולם (83.5 שנים)", en: "Second-highest life expectancy in the world (83.5 years)" },
    ],
    healthcareNote: {
      he: "מערכת בריאות ציבורית מצוינת הפתוחה לכל תושב רשום. דירוג WHO: מקום 7 בעולם. ביטוח פרטי זמין ב-€50–150/חודש.",
      en: "Excellent public healthcare open to all registered residents. WHO ranking: 7th in the world. Private insurance available at €50–150/month.",
    },
    costOfLiving: {
      he: "מדריד: €1,800–2,800/חודש לזוג. ולנסיה: €1,400–2,200. ארוחה: €10–15. קפה: €1.50.",
      en: "Madrid: €1,800–2,800/month for a couple. Valencia: €1,400–2,200. Meal: €10–15. Coffee: €1.50.",
    },
  },

  france: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "68M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "€40,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "11–45%" },
      { label: { he: "שכירות (פריז)", en: "Rent (Paris)" }, value: "€1,600/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 15" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "ציבורי (מס' 1 בעולם)" },
    ],
    pros: [
      { he: "מערכת בריאות מס' 1 בעולם (WHO)", en: "WHO #1 healthcare system in the world" },
      { he: "שכר לימוד נמוך מאוד גם לזרים (~€300/שנה)", en: "Very low tuition even for foreigners (~€300/year)" },
      { he: "Talent Passport — מסלול מהיר למקצוענים", en: "Talent Passport — fast track for professionals" },
      { he: "35 שעות עבודה בשבוע + 5 שבועות חופשה", en: "35-hour work week + 5 weeks vacation" },
      { he: "מיקום מרכזי — גישה לכל אירופה", en: "Central location — access to all of Europe" },
    ],
    cons: [
      { he: "צרפתית נדרשת — גם בעבודה", en: "French required — even at work" },
      { he: "בירוקרטיה צרפתית מפורסמת", en: "Famous French bureaucracy" },
      { he: "מס גבוה על הכנסות גבוהות", en: "High tax on high incomes" },
      { he: "פריז יקרה מאוד", en: "Paris is very expensive" },
    ],
    funFacts: [
      { he: "צרפת היא יעד התיירות מס' 1 בעולם — 90 מיליון מבקרים בשנה", en: "France is the #1 tourist destination — 90 million visitors/year" },
      { he: "30% מסטארטאפי הטק בצרפת הוקמו ע\"י מהגרים", en: "30% of French tech startups were founded by immigrants" },
      { he: "Station F בפריז — הקמפוס הכי גדול לסטארטאפים בעולם", en: "Station F in Paris — the world's largest startup campus" },
    ],
    healthcareNote: {
      he: "מערכת בריאות מס' 1 בעולם (WHO). ביטוח ציבורי (Sécurité sociale) מכסה 70% מהעלויות, ומוטואל (ביטוח משלים) מכסה את השאר. רוב המעסיקים מספקים מוטואל.",
      en: "WHO #1 healthcare system. Public insurance (Sécurité sociale) covers 70% of costs, mutuelle (top-up insurance) covers the rest. Most employers provide mutuelle.",
    },
    costOfLiving: {
      he: "פריז: €2,500–4,000/חודש לזוג. ליון: €1,800–2,800. ארוחה: €14–22. קפה: €2.",
      en: "Paris: €2,500–4,000/month for a couple. Lyon: €1,800–2,800. Meal: €14–22. Coffee: €2.",
    },
  },

  uae: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "10M" },
      { label: { he: "שכר ממוצע (דובאי)", en: "Avg. Salary (Dubai)" }, value: "AED 16,000/mo" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "0%" },
      { label: { he: "שכירות (דובאי)", en: "Rent (Dubai)" }, value: "AED 6,000/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 25" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "חובה (פרטי)" },
    ],
    pros: [
      { he: "0% מס הכנסה — כל השכר שלך", en: "0% income tax — your full salary" },
      { he: "תשתיות עולמיות — בנייה, תחבורה, טכנולוגיה", en: "World-class infrastructure — construction, transport, tech" },
      { he: "בטיחות גבוהה מאוד", en: "Very high safety" },
      { he: "מסלולי ויזה גמישים ומהירים", en: "Flexible and fast visa routes" },
      { he: "מיקום אסטרטגי בין אירופה, אסיה ואפריקה", en: "Strategic location between Europe, Asia, and Africa" },
    ],
    cons: [
      { he: "חום קיצוני בקיץ (45°C+)", en: "Extreme summer heat (45°C+)" },
      { he: "עלויות חיים גבוהות — דיור, חינוך, בריאות", en: "High living costs — housing, education, healthcare" },
      { he: "ללא אזרחות — גם אחרי עשרות שנים", en: "No citizenship — even after decades" },
      { he: "חוקים שמרניים בנושאים מסוימים", en: "Conservative laws on certain matters" },
      { he: "תלות בספונסר (ברוב סוגי הויזה)", en: "Sponsor dependency (most visa types)" },
    ],
    funFacts: [
      { he: "88% מתושבי UAE הם זרים — רק 12% אזרחים", en: "88% of UAE residents are foreigners — only 12% citizens" },
      { he: "דובאי עברה מכפר דייגים למטרופולין עולמי ב-50 שנה", en: "Dubai went from fishing village to global metropolis in 50 years" },
      { he: "Golden Visa ל-10 שנים — מהארוכות בעולם", en: "10-year Golden Visa — one of the longest in the world" },
    ],
    healthcareNote: {
      he: "ביטוח בריאות חובה לכל תושב. המעסיק חייב לספק ביטוח לעובדים. בתי חולים פרטיים ברמה גבוהה מאוד. עלות ביטוח: AED 5,000–15,000/שנה.",
      en: "Health insurance mandatory for all residents. Employers must provide insurance. Private hospitals are top quality. Insurance cost: AED 5,000–15,000/year.",
    },
    costOfLiving: {
      he: "דובאי: AED 10,000–18,000/חודש לזוג (ללא שכירות). שכירות סטודיו: AED 4,000+. ארוחה: AED 40–80. קפה: AED 20.",
      en: "Dubai: AED 10,000–18,000/month for a couple (excl. rent). Studio rent: AED 4,000+. Meal: AED 40–80. Coffee: AED 20.",
    },
  },

  portugal: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "10.3M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "€20,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "14.5–48%" },
      { label: { he: "שכירות (ליסבון)", en: "Rent (Lisbon)" }, value: "€1,200/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 25" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "SNS (ציבורי)" },
    ],
    pros: [
      { he: "Digital Nomad Visa — מהפופולריים בעולם", en: "Digital Nomad Visa — one of the world's most popular" },
      { he: "אקלים מושלם — 300 ימי שמש, חופים מדהימים", en: "Perfect climate — 300 sunny days, amazing beaches" },
      { he: "עלויות חיים נמוכות ביחס למערב אירופה", en: "Low cost of living compared to Western Europe" },
      { he: "NHR — הטבת מס לתושבים חדשים", en: "NHR — tax benefits for new residents" },
      { he: "אנגלית נפוצה — אחת המדינות הכי אנגלו-פרנדלי באירופה", en: "English widely spoken — one of Europe's most English-friendly countries" },
    ],
    cons: [
      { he: "שכר מקומי נמוך מאוד", en: "Very low local salaries" },
      { he: "בירוקרטיה — SEF/AIMA ידועים לשמצה", en: "Bureaucracy — SEF/AIMA notoriously slow" },
      { he: "שוק דיור במשבר — עליות מחירים חדות", en: "Housing crisis — sharp price increases" },
      { he: "זמני המתנה ארוכים לאשרות", en: "Long waiting times for permits" },
    ],
    funFacts: [
      { he: "ליסבון היא בירת ה-Digital Nomads של אירופה", en: "Lisbon is Europe's Digital Nomad capital" },
      { he: "פורטוגל היא המדינה ה-3 הבטוחה ביותר בעולם", en: "Portugal is the 3rd safest country in the world" },
      { he: "אוכלוסיית הזרים גדלה ב-40% ב-5 שנים", en: "Foreign population grew 40% in 5 years" },
    ],
    healthcareNote: {
      he: "SNS — מערכת בריאות ציבורית עם עלות סמלית. ביקור רופא: €5. אשפוז חינם. רוב התושבים מוסיפים ביטוח פרטי (€30–80/חודש) לקיצור זמני המתנה.",
      en: "SNS — public healthcare with symbolic fees. Doctor visit: €5. Free hospitalization. Most residents add private insurance (€30–80/month) to reduce wait times.",
    },
    costOfLiving: {
      he: "ליסבון: €1,800–2,800/חודש לזוג. פורטו: €1,400–2,200. ארוחה: €8–14. קפה: €0.80.",
      en: "Lisbon: €1,800–2,800/month for a couple. Porto: €1,400–2,200. Meal: €8–14. Coffee: €0.80.",
    },
  },

  netherlands: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "17.9M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "€44,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "36.9–49.5%" },
      { label: { he: "שכירות (אמסטרדם)", en: "Rent (Amsterdam)" }, value: "€1,800/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 10" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "חובה (פרטי)" },
    ],
    pros: [
      { he: "30% Ruling — הטבת מס ענקית לעובדים זרים", en: "30% Ruling — huge tax benefit for foreign workers" },
      { he: "כמעט כולם מדברים אנגלית מצוינת", en: "Almost everyone speaks excellent English" },
      { he: "סביבת סטארטאפים חזקה (אמסטרדם, איינדהובן)", en: "Strong startup ecosystem (Amsterdam, Eindhoven)" },
      { he: "Work-life balance מצוין — שבוע עבודה קצר", en: "Excellent work-life balance — short work week" },
      { he: "תשתית אופניים מושלמת", en: "Perfect cycling infrastructure" },
    ],
    cons: [
      { he: "מזג אוויר — גשום, רוח, ואפור", en: "Weather — rainy, windy, and grey" },
      { he: "משבר דיור חמור — קשה מאוד למצוא דירה", en: "Severe housing crisis — very hard to find apartments" },
      { he: "מס גבוה (עד 49.5%)", en: "High tax (up to 49.5%)" },
      { he: "הולנדית נדרשת לשילוב חברתי ולאזרחות", en: "Dutch required for social integration and citizenship" },
    ],
    funFacts: [
      { he: "30% Ruling = 30% מהשכר פטור ממס — חוסך אלפי יורו בשנה", en: "30% Ruling = 30% of salary tax-free — saves thousands per year" },
      { he: "הולנד היא המדינה השנייה הכי שמחה בעולם", en: "Netherlands is the 2nd happiest country in the world" },
      { he: "יותר אופניים מאנשים — 23 מיליון אופניים ל-17.9 מיליון תושבים", en: "More bikes than people — 23M bikes for 17.9M residents" },
    ],
    healthcareNote: {
      he: "ביטוח בריאות חובה ופרטי. עלות בסיסית: €120–150/חודש. השתתפות עצמית: €385/שנה. רמת טיפול גבוהה מאוד. רופא משפחה (huisarts) הוא נקודת הכניסה למערכת.",
      en: "Mandatory private health insurance. Basic cost: €120–150/month. Deductible: €385/year. Very high care quality. GP (huisarts) is the gateway to the system.",
    },
    costOfLiving: {
      he: "אמסטרדם: €2,800–4,000/חודש לזוג. איינדהובן: €2,000–3,000. ארוחה: €15–25. קפה: €3.50.",
      en: "Amsterdam: €2,800–4,000/month for a couple. Eindhoven: €2,000–3,000. Meal: €15–25. Coffee: €3.50.",
    },
  },

  italy: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "59M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "€32,000/yr" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "23–43%" },
      { label: { he: "שכירות (מילאנו)", en: "Rent (Milan)" }, value: "€1,300/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 25" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "SSN (ציבורי)" },
    ],
    pros: [
      { he: "איכות חיים — אוכל, תרבות, ואדריכלות בלתי מתחרים", en: "Quality of life — unmatched food, culture, and architecture" },
      { he: "מס 7% לגמלאים שעוברים לדרום איטליה", en: "7% flat tax for retirees relocating to southern Italy" },
      { he: "Digital Nomad Visa חדשה (2024)", en: "New Digital Nomad Visa (2024)" },
      { he: "EU Blue Card ללא מכסה", en: "EU Blue Card without quota" },
      { he: "עלויות חיים סבירות מחוץ למילאנו ורומא", en: "Reasonable costs outside Milan and Rome" },
    ],
    cons: [
      { he: "בירוקרטיה — Questura ו-Permesso di Soggiorno ידועים לשמצה", en: "Bureaucracy — Questura and Permesso di Soggiorno notoriously slow" },
      { he: "שכר נמוך ביחס לצפון אירופה", en: "Low salaries compared to Northern Europe" },
      { he: "איטלקית נדרשת — פחות אנגלית מהצפון", en: "Italian required — less English than the north" },
      { he: "כלכלה לא יציבה בדרום", en: "Unstable economy in the south" },
    ],
    funFacts: [
      { he: "1 יורו בתים — עיירות בדרום איטליה מוכרות בתים ב-€1 כדי למשוך תושבים", en: "€1 houses — southern Italian towns sell houses for €1 to attract residents" },
      { he: "איטליה עם הכי הרבה אתרי מורשת עולמית של UNESCO", en: "Italy has the most UNESCO World Heritage sites" },
      { he: "תוכנית המס 7% משכה אלפי גמלאים מצפון אירופה", en: "The 7% tax program attracted thousands of retirees from Northern Europe" },
    ],
    healthcareNote: {
      he: "SSN — מערכת בריאות ציבורית מצוינת, מדורגת מקום 2 בעולם (WHO). רישום ב-ASL מקומי. ביקור רופא: €36 (ticket). תרופות בהנחה. אשפוז חינם.",
      en: "SSN — excellent public healthcare, ranked 2nd worldwide (WHO). Register at local ASL. Doctor visit: €36 (ticket). Discounted medicines. Free hospitalization.",
    },
    costOfLiving: {
      he: "מילאנו: €2,200–3,500/חודש לזוג. רומא: €2,000–3,000. דרום: €1,200–1,800. ארוחה: €10–18. קפה: €1.10.",
      en: "Milan: €2,200–3,500/month for a couple. Rome: €2,000–3,000. South: €1,200–1,800. Meal: €10–18. Coffee: €1.10.",
    },
  },

  sweden: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "10.5M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "SEK 42,000/mo" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "30–55%" },
      { label: { he: "שכירות (סטוקהולם)", en: "Rent (Stockholm)" }, value: "SEK 14,000/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 5" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "ציבורי (כמעט חינם)" },
    ],
    pros: [
      { he: "איכות חיים מהגבוהות בעולם", en: "Among the highest quality of life worldwide" },
      { he: "Work-life balance מצוין — 480 ימי חופשת לידה!", en: "Excellent work-life balance — 480 days parental leave!" },
      { he: "חינוך חינם כולל אוניברסיטה (EU)", en: "Free education including university (EU)" },
      { he: "שוק טכנולוגיה חזק (Spotify, Klarna, Ericsson)", en: "Strong tech market (Spotify, Klarna, Ericsson)" },
      { he: "ללא מכסה לאשרות עבודה", en: "No cap on work permits" },
    ],
    cons: [
      { he: "מס גבוה מאוד — עד 55%", en: "Very high tax — up to 55%" },
      { he: "חורף ארוך וחשוך — 6 שעות אור ביום", en: "Long dark winter — 6 hours of daylight" },
      { he: "קשה להשתלב חברתית — תרבות סגורה יחסית", en: "Hard to integrate socially — relatively closed culture" },
      { he: "שכירות בסטוקהולם — תור של שנים", en: "Stockholm rent — years-long waiting lists" },
    ],
    funFacts: [
      { he: "שוודיה היא בירת הסטארטאפים של אירופה ליחידת אוכלוסייה", en: "Sweden is Europe's startup capital per capita" },
      { he: "480 ימי חופשת לידה — 390 מהם בתשלום של 80% מהשכר", en: "480 days parental leave — 390 at 80% salary" },
      { he: "Fika — הפסקת קפה חובה פעמיים ביום בכל מקום עבודה", en: "Fika — mandatory twice-daily coffee break at every workplace" },
    ],
    healthcareNote: {
      he: "מערכת בריאות ציבורית מצוינת. ביקור רופא: SEK 300 (כ-€27). תקרת הוצאות שנתית: SEK 1,300. מעבר לזה — חינם. תרופות: תקרה SEK 2,800/שנה.",
      en: "Excellent public healthcare. Doctor visit: SEK 300 (~€27). Annual expense cap: SEK 1,300. Beyond that — free. Medicines: cap SEK 2,800/year.",
    },
    costOfLiving: {
      he: "סטוקהולם: SEK 25,000–35,000/חודש לזוג (€2,200–3,100). גטבורג: SEK 20,000–28,000. ארוחה: SEK 130–200. קפה: SEK 50.",
      en: "Stockholm: SEK 25,000–35,000/month for a couple (€2,200–3,100). Gothenburg: SEK 20,000–28,000. Meal: SEK 130–200. Coffee: SEK 50.",
    },
  },

  japan: {
    stats: [
      { label: { he: "אוכלוסייה", en: "Population" }, value: "124M" },
      { label: { he: "שכר ממוצע", en: "Avg. Salary" }, value: "¥5M/yr (~$34K)" },
      { label: { he: "מס הכנסה", en: "Income Tax" }, value: "5–45%" },
      { label: { he: "שכירות (טוקיו)", en: "Rent (Tokyo)" }, value: "¥120,000/mo" },
      { label: { he: "מדד איכות חיים", en: "Quality of Life" }, value: "Top 15" },
      { label: { he: "ביטוח בריאות", en: "Healthcare" }, value: "ציבורי (70% כיסוי)" },
    ],
    pros: [
      { he: "HSP — תושבות קבע תוך שנה אחת בלבד!", en: "HSP — permanent residence in just 1 year!" },
      { he: "בטיחות יוצאת דופן — מהמדינות הבטוחות בעולם", en: "Exceptional safety — one of the safest countries" },
      { he: "תשתיות מדהימות — רכבות, טכנולוגיה, ניקיון", en: "Amazing infrastructure — trains, tech, cleanliness" },
      { he: "תרבות עשירה וייחודית", en: "Rich and unique culture" },
      { he: "עלויות חיים סבירות (מחוץ לטוקיו)", en: "Reasonable costs (outside Tokyo)" },
    ],
    cons: [
      { he: "יפנית — שפה קשה מאוד ללימוד", en: "Japanese — very difficult language to learn" },
      { he: "תרבות עבודה אינטנסיבית — שעות ארוכות", en: "Intense work culture — long hours" },
      { he: "קשה להשתלב כזר — חברה הומוגנית", en: "Hard to integrate as a foreigner — homogeneous society" },
      { he: "רעידות אדמה וטייפונים", en: "Earthquakes and typhoons" },
    ],
    funFacts: [
      { he: "HSP עם 80 נקודות = תושבות קבע תוך שנה — המהיר בעולם", en: "HSP with 80 points = PR in 1 year — fastest in the world" },
      { he: "יפן פותחת את שעריה — מספר העובדים הזרים הכפיל את עצמו ב-5 שנים", en: "Japan is opening up — foreign workers doubled in 5 years" },
      { he: "טוקיו היא המטרופולין הגדול בעולם — 37 מיליון תושבים", en: "Tokyo is the world's largest metropolis — 37 million residents" },
    ],
    healthcareNote: {
      he: "ביטוח בריאות חובה — ציבורי (NHI) או דרך המעסיק. המבוטח משלם 30% מהעלות, הביטוח 70%. תקרה חודשית להוצאות. איכות טיפול גבוהה מאוד.",
      en: "Mandatory health insurance — public (NHI) or through employer. Patient pays 30%, insurance 70%. Monthly expense cap. Very high care quality.",
    },
    costOfLiving: {
      he: "טוקיו: ¥300,000–450,000/חודש לזוג (€1,800–2,700). אוסקה: ¥250,000–350,000. ארוחה: ¥800–1,500. קפה: ¥400.",
      en: "Tokyo: ¥300,000–450,000/month for a couple (€1,800–2,700). Osaka: ¥250,000–350,000. Meal: ¥800–1,500. Coffee: ¥400.",
    },
  },
};
