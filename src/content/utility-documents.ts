export type UtilityDocumentSection = {
  heading: string;
  body: string;
};

export type UtilityDocument = {
  title: string;
  effectiveDate: { iso: string; label: string };
  introduction: string;
  sections: readonly UtilityDocumentSection[];
  links: readonly { href: string; label: string }[];
};

export const UTILITY_EFFECTIVE_DATE = { iso: "2026-11-01", label: "November 1, 2026" } as const;

export const UTILITY_CONTACT = {
  phone: "804-486-7699",
  email: "front.desk@sigmacoremedicalcenter.com",
  addressLines: ["9020 Stony Point Pkwy #100", "Richmond, VA 23235"],
} as const;

export const UTILITY_DOCUMENTS = {
  privacy: {
    title: "Website Privacy Policy",
    effectiveDate: UTILITY_EFFECTIVE_DATE,
    introduction: "This policy explains how Sigma Core Medical Center handles information collected through www.sigmacoremedicalcenter.com. Medical records and protected health information are addressed separately in our Notice of Privacy Practices.",
    sections: [
      {
        heading: "Information you provide",
        body: "Our website inquiry forms request your first name, last name, email address and phone number. We use this information to respond to inquiries and coordinate contact with our office. If you contact us by phone or email, we also receive the information you choose to provide. Please share contact details only through public website forms. Do not send medical records, diagnoses, payment-card details or other sensitive information through these forms or ordinary email. Contact the office to ask how to share medical information appropriately.",
      },
      {
        heading: "Website activity and cookies",
        body: "The website uses hosting, security, anti-spam and analytics technologies. These may collect your IP address, device and browser information, pages visited, referring pages, campaign information and interactions with the site. Cookies or similar storage may be used to operate the site, prevent abuse, understand website use and measure inquiries. The site includes Google Analytics and Mega website services; additional analytics such as PostHog may operate when configured. These services may process information under their own privacy terms. This website policy does not mean that public website analytics are a medical-record system or that information submitted online is automatically protected by HIPAA.",
      },
      {
        heading: "How information is used and shared",
        body: "We use website information to respond to requests, operate and improve the website, understand how people find and use it, measure inquiries and protect against spam, fraud and misuse. Website hosting, form-delivery, customer-management, security and analytics providers may process information to perform these functions. We may also disclose information when required by law, to respond to valid legal process, or to protect legal rights and safety. Uses and disclosures of protected health information must follow our Notice of Privacy Practices and applicable law; this website policy does not authorize using medical information for advertising.",
      },
      {
        heading: "Your choices and requests",
        body: "You can choose not to submit a website inquiry and contact the office by phone instead. Your browser settings can limit or delete cookies, although some features may not work as intended. Google provides an Analytics opt-out browser add-on at https://tools.google.com/dlpage/gaoptout. Contact us to ask about access to, correction of or deletion of website contact information, or to raise a privacy concern. We will consider requests under the laws that apply; identity verification, legal retention requirements and other exceptions may affect what we can provide or delete. Medical-record requests follow the separate Notice of Privacy Practices. A general website inquiry is not agreement to an unrelated marketing or SMS subscription.",
      },
      {
        heading: "Retention and security",
        body: "Website information is retained as reasonably needed for the purposes described here and applicable legal, operational and recordkeeping obligations. Medical records may be subject to different retention requirements. No website, email or internet transmission can be guaranteed completely secure. Please use the office's instructions rather than a public form or ordinary email to send sensitive health information.",
      },
      {
        heading: "Children and external websites",
        body: "This website is intended for adults seeking information about our services, not for children under 13. If you believe a child has submitted personal information, contact the office so we can address it. External websites and services linked from this site have their own privacy policies; this policy does not control their practices.",
      },
      {
        heading: "Updates and contact",
        body: "We may update this policy by posting a revised version and effective date on this page. For website privacy questions, contact Sigma Core Medical Center at 804-486-7699 or front.desk@sigmacoremedicalcenter.com, or write to 9020 Stony Point Pkwy #100, Richmond, VA 23235. Please do not include sensitive medical details in an initial email.",
      },
    ],
    links: [
      { href: "/notice-of-privacy-practices", label: "Notice of Privacy Practices" },
      { href: "/terms", label: "Website Terms of Use" },
      { href: "/contact", label: "Contact" },
    ],
  },
  notice: {
    title: "Notice of Privacy Practices",
    effectiveDate: UTILITY_EFFECTIVE_DATE,
    introduction: "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully. It applies to care provided by Sigma Core Medical Center and is separate from our Website Privacy Policy.",
    sections: [
      {
        heading: "Your rights: access and corrections",
        body: "You can ask to inspect or receive an electronic or paper copy of the medical record and other health information we maintain about you. We generally respond within 30 days; if an extension is permitted, we will explain it in writing. A reasonable, cost-based fee may apply as permitted by law. You can ask us to correct information you believe is inaccurate or incomplete. If we deny a correction request, we will explain why in writing, generally within 60 days, and explain how you can submit a statement of disagreement.",
      },
      {
        heading: "Your rights: communications and limits",
        body: "You can request that we contact you in a particular way or at a different address. We will accommodate reasonable requests. You can ask us to limit uses or disclosures for treatment, payment or healthcare operations; we are not generally required to agree, but will explain our decision. If you pay for a service or item in full out of pocket, you can ask us not to share information about that service or item with your health plan for payment or healthcare operations, and we must agree unless disclosure is required by law. Tell us about this request before information is sent to a health plan.",
      },
      {
        heading: "Your rights: disclosure lists, copies and representatives",
        body: "You can request an accounting of certain disclosures made during the six years before your request, excluding disclosures such as those for treatment, payment and healthcare operations and other exceptions allowed by law. One accounting in a 12-month period is free; we will tell you in advance about any permitted charge for additional requests. You may request a paper copy of this notice at any time, even if you receive it electronically. A person with legally valid authority to make healthcare decisions for you may exercise your rights after we verify that authority.",
      },
      {
        heading: "Uses for treatment, payment and healthcare operations",
        body: "We may use and share health information to provide and coordinate your care, for example with another clinician involved in treatment. We may use and share information to bill for services or arrange payment when applicable. We may also use and share information to operate the practice, such as reviewing quality of care, training staff, scheduling and administering services. Service providers performing functions for us must protect information as required by applicable law and their agreements.",
      },
      {
        heading: "Other uses and disclosures permitted or required by law",
        body: "Subject to applicable legal conditions, information may be used or disclosed for public health and safety activities, reporting suspected abuse or neglect, preventing a serious threat to health or safety, health oversight, approved research, workers' compensation, lawful law-enforcement or government requests, medical-examiner or funeral-director duties, organ or tissue donation and responses to court orders or other valid legal process. For example, we may report an adverse reaction to a medication or provide information during an authorized health-oversight review. More protective federal or Virginia laws may limit these disclosures, including for mental-health, HIV-related and substance-use information; we follow those protections when they apply.",
      },
      {
        heading: "Your choices and written authorization",
        body: "You can tell us whether to share relevant information with family, friends or others involved in your care or payment, including for disaster-relief assistance. If you cannot express a preference, we may share information when permitted by law and our professional judgment finds it in your best interest, or when necessary to reduce a serious threat. Uses and disclosures not described in this notice require your written authorization. Written authorization is generally required for marketing, sale of protected health information and most disclosures of psychotherapy notes, subject to legal exceptions. You can revoke an authorization in writing at any time, except to the extent we have already relied on it. If we contact you for fundraising, you may opt out of further fundraising communications.",
      },
      {
        heading: "Additional protection for substance-use records",
        body: "If we receive substance-use-disorder patient records protected by 42 CFR Part 2, those records cannot be used or disclosed in civil, criminal, administrative or legislative investigations or proceedings against you without your written consent or a court order and a subpoena, as required by Part 2. If we use Part 2 information for fundraising, we will first provide clear notice and a choice about receiving those communications. This paragraph describes protections if we hold these records; it does not mean Sigma Core provides substance-use-disorder treatment.",
      },
      {
        heading: "Our responsibilities",
        body: "We are required to maintain the privacy and security of protected health information, provide this notice and follow the duties and privacy practices it describes. We will notify affected individuals of a breach of unsecured protected health information as required by law. We will not use or share your information outside this notice without written authorization unless otherwise permitted or required by law. We may change this notice and apply the revised notice to information we already hold. The current version will be available in our office, on this page and upon request.",
      },
      {
        heading: "Questions, requests and complaints",
        body: "To exercise a right, request a paper copy or make a privacy complaint, contact Sigma Core Medical Center at 804-486-7699 and ask for the person responsible for patient privacy. You may also write to 9020 Stony Point Pkwy #100, Richmond, VA 23235, or email front.desk@sigmacoremedicalcenter.com to ask how to submit your request securely. Please do not send medical records or sensitive details in an initial email. You may also complain to the U.S. Department of Health and Human Services Office for Civil Rights at https://www.hhs.gov/ocr/complaints/index.html, by phone at 1-877-696-6775, or by mail to 200 Independence Avenue SW, Washington, DC 20201. We will not retaliate against you for filing a complaint.",
      },
    ],
    links: [
      { href: "/privacy", label: "Website Privacy Policy" },
      { href: "/terms", label: "Website Terms of Use" },
      { href: "/contact", label: "Contact" },
    ],
  },
  accessibility: {
    title: "Accessibility",
    effectiveDate: UTILITY_EFFECTIVE_DATE,
    introduction: "Sigma Core Medical Center wants visitors to be able to access information about our services and contact our office. If you encounter a barrier on this website, please let us know so we can help you obtain the information you need.",
    sections: [
      {
        heading: "Request assistance or report a barrier",
        body: "Call 804-486-7699 or email front.desk@sigmacoremedicalcenter.com. Please identify the page or feature you could not use, describe the difficulty and tell us how you prefer to be contacted. Do not include sensitive medical information in your report. You may also contact us by mail at 9020 Stony Point Pkwy #100, Richmond, VA 23235. Our office hours are Monday through Thursday, 8:00 a.m. to noon and 12:30 p.m. to 5:30 p.m.",
      },
      {
        heading: "Website accessibility",
        body: "We aim to make website content understandable and usable with assistive technologies and different devices. This statement is not a claim that every page or third-party service has been independently audited or certified to meet a particular accessibility standard. If a feature is not accessible to you, contact the office to request assistance or an alternative way to obtain the information.",
      },
      {
        heading: "Third-party content and updates",
        body: "Linked websites and third-party tools may have accessibility features and limitations outside our control. Please tell us if one prevents you from obtaining information about our practice. We may update this statement as the website changes; the effective date above identifies this version.",
      },
    ],
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Website Privacy Policy" },
      { href: "/terms", label: "Website Terms of Use" },
    ],
  },
  terms: {
    title: "Website Terms of Use",
    effectiveDate: UTILITY_EFFECTIVE_DATE,
    introduction: "These terms apply to your use of the Sigma Core Medical Center website at www.sigmacoremedicalcenter.com. Please review them together with our Website Privacy Policy and Notice of Privacy Practices.",
    sections: [
      {
        heading: "General information, not individualized medical advice",
        body: "Website content, including articles, educational materials and service descriptions, is provided for general informational and educational purposes. It is not a diagnosis, a treatment recommendation for you or a substitute for evaluation and advice from a qualified healthcare professional who knows your medical history. Do not disregard professional advice or delay care because of something you read here. Service suitability, risks, alternatives and expected outcomes require an individual clinical evaluation; outcomes vary and are not guaranteed.",
      },
      {
        heading: "Not for emergencies",
        body: "Do not use this website, a website inquiry form or email to seek emergency care. If you believe you have a medical emergency, call 911 or go to the nearest emergency department. Website inquiries are not continuously monitored.",
      },
      {
        heading: "Inquiries, appointments and the care relationship",
        body: "Reading this website or sending an inquiry does not establish a clinician-patient relationship, provide treatment or confirm an appointment. The office must confirm scheduling and any next steps directly. Contact the office at 804-486-7699 for appointment information. The website does not replace clinical intake, informed consent or any separate treatment agreement.",
      },
      {
        heading: "Services, fees and clinical decisions",
        body: "Service descriptions are informational and do not promise that every service is available or appropriate for every person. Confirm availability, eligibility, fees and any payment or insurance questions with the office before proceeding. Any applicable treatment, payment, cancellation or refund terms will be provided separately; these website terms do not create a new financial or cancellation policy. Do not stop or change prescribed treatment without speaking with your treating healthcare professional.",
      },
      {
        heading: "Responsible use",
        body: "Use the website lawfully. Do not submit false information or another person's contact details without authority, attempt unauthorized access, introduce malicious code, interfere with the website or use automated tools to disrupt it. Share contact information only through public inquiry forms, not medical records or other sensitive data.",
      },
      {
        heading: "Website materials and external links",
        body: "Website text, graphics and other materials may be protected by copyright and other laws. You may view or print materials for personal, noncommercial use while retaining applicable notices. Other uses require permission from the relevant rights holder, unless permitted by law. Links to third-party resources are provided for convenience; we do not control their content, availability or privacy practices, and a link is not a guarantee or endorsement of their services.",
      },
      {
        heading: "Accuracy and availability",
        body: "We aim to keep website information useful and current, but information may change and errors or interruptions can occur. Confirm details relevant to your care directly with the office. Nothing in these terms limits rights or protections that cannot lawfully be limited, excuses professional duties or changes a separate agreement for healthcare services.",
      },
      {
        heading: "Updates and contact",
        body: "We may update these terms by posting a revised version and effective date here. Questions about website use can be directed to Sigma Core Medical Center at 804-486-7699 or front.desk@sigmacoremedicalcenter.com, or by mail to 9020 Stony Point Pkwy #100, Richmond, VA 23235.",
      },
    ],
    links: [
      { href: "/privacy", label: "Website Privacy Policy" },
      { href: "/notice-of-privacy-practices", label: "Notice of Privacy Practices" },
      { href: "/book", label: "Appointment information" },
      { href: "/contact", label: "Contact" },
    ],
  },
} as const satisfies Record<string, UtilityDocument>;
