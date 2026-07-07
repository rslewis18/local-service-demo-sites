export type DemoConfig = {
  slug: "hvac" | "plumbing" | "electrical";
  businessName: string;
  shortMark: string;
  industryLabel: string;
  themeClass: string;
  phone: string;
  phoneHref: string;
  hours: string;
  serviceAreas: string;
  homeSummary: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    proof: string[];
  };
  salesFeatures: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  whyTitle: string;
  whyIntro: string;
  whyItems: Array<{
    title: string;
    description: string;
  }>;
  reviewsTitle: string;
  reviewsIntro: string;
  reviews: Array<{
    quote: string;
    name: string;
    location: string;
  }>;
  quoteTitle: string;
  quoteIntro: string;
  bookingTitle: string;
  bookingIntro: string;
  bookingSlots: string[];
  notificationCopy: string;
  reviewGrowthTitle: string;
  reviewGrowthCopy: string;
  faqTitle: string;
  faqIntro: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  contactTitle: string;
  contactIntro: string;
};

const salesFeatures = [
  "Request a Free Quote",
  "Book Service Online",
  "24/7 AI Assistant",
  "Instant Lead Notifications",
  "Google Review Automation",
  "Local SEO Ready",
  "Mobile-First Design",
];

export const demos: Record<DemoConfig["slug"], DemoConfig> = {
  hvac: {
    slug: "hvac",
    businessName: "Elite Comfort HVAC",
    shortMark: "EC",
    industryLabel: "HVAC Demo",
    themeClass: "theme-hvac",
    phone: "(555) 013-1020",
    phoneHref: "+15550131020",
    hours: "Open 24/7 for no-cool and no-heat emergencies",
    serviceAreas: "Cedar Park, Round Rock, Georgetown, Leander, and North Austin",
    homeSummary:
      "Comfort-first HVAC site focused on emergency calls, tune-ups, replacement estimates, and seasonal service plans.",
    hero: {
      eyebrow: "Same-day AC and heating service",
      title: "Fast comfort repairs when the house will not cool down.",
      subtitle:
        "Elite Comfort HVAC helps homeowners get quick answers, clear repair options, and booked service windows for AC repair, furnace service, and system replacement estimates.",
      image: "/images/hvac-hero.png",
      imageAlt: "HVAC technician servicing an outdoor residential AC unit",
      proof: ["24/7 emergency dispatch", "Licensed HVAC technicians", "Upfront repair options"],
    },
    salesFeatures,
    servicesEyebrow: "Heating and cooling services",
    servicesTitle: "Built for the jobs homeowners search for first",
    servicesIntro:
      "The page routes urgent no-cool calls, planned maintenance, and replacement shoppers into simple quote and booking paths.",
    services: [
      {
        icon: "AC",
        title: "AC Repair",
        description:
          "Rapid diagnostics for weak airflow, warm air, frozen coils, tripped breakers, and systems that stop during peak heat.",
      },
      {
        icon: "HT",
        title: "Furnace Service",
        description:
          "Safe heating repairs, ignition troubleshooting, blower motor service, and winter tune-ups before cold fronts arrive.",
      },
      {
        icon: "HP",
        title: "Heat Pump Installation",
        description:
          "Replacement consultations with right-sized equipment options, efficiency guidance, and clean install scheduling.",
      },
      {
        icon: "IAQ",
        title: "Indoor Air Quality",
        description:
          "Whole-home filtration, humidity control, and duct improvements for families dealing with dust and allergy complaints.",
      },
      {
        icon: "PM",
        title: "Maintenance Plans",
        description:
          "Spring and fall tune-ups that catch failing parts early and keep repeat customers on the calendar.",
      },
      {
        icon: "24",
        title: "Emergency HVAC",
        description:
          "Clear after-hours messaging for no-cool and no-heat calls, with click-to-call access from every mobile screen.",
      },
    ],
    whyTitle: "A comfort website that turns panic into booked jobs",
    whyIntro:
      "HVAC buyers often need help now. This demo keeps the phone number, quote form, emergency language, and booking slots close to every decision point.",
    whyItems: [
      {
        title: "Priority for urgent calls",
        description:
          "Emergency copy, mobile call buttons, and service-area language help homeowners act quickly when indoor temperatures are rising.",
      },
      {
        title: "Repair or replace clarity",
        description:
          "The site positions technicians as advisors with options, not pressure, which builds trust before dispatch.",
      },
      {
        title: "Seasonal SEO structure",
        description:
          "Service sections are written for local searches like AC repair, furnace tune-up, heat pump replacement, and indoor air quality.",
      },
    ],
    reviewsTitle: "Trust signals for high-stress HVAC calls",
    reviewsIntro:
      "Realistic reviews focus on response time, technician communication, clean work, and comfort restored the same day.",
    reviews: [
      {
        quote:
          "Our AC stopped cooling at 6 PM and Elite Comfort had a tech here that night. He explained the capacitor failure and had cold air running before bedtime.",
        name: "Megan R.",
        location: "Round Rock",
      },
      {
        quote:
          "They gave us repair and replacement numbers without pushing either one. We booked the install online and the crew was spotless.",
        name: "Daniel K.",
        location: "Cedar Park",
      },
      {
        quote:
          "The maintenance reminder saved us from a midsummer breakdown. Easy scheduling, on-time arrival, and no surprise charges.",
        name: "Priya S.",
        location: "Leander",
      },
    ],
    quoteTitle: "Ask for HVAC pricing without waiting on hold",
    quoteIntro:
      "Homeowners can describe the issue, choose the service, and send contact details directly to the office or dispatcher.",
    bookingTitle: "Book the next available HVAC window",
    bookingIntro:
      "Show simple appointment cards for urgent repairs and tune-ups so more visitors turn into scheduled jobs.",
    bookingSlots: ["Today 2:00 PM", "Tomorrow 10:00 AM", "Friday 1:30 PM"],
    notificationCopy:
      "When a homeowner submits the form, the team can receive a text or email alert with the service type, phone number, and preferred time.",
    reviewGrowthTitle: "More comfort calls should become more public proof",
    reviewGrowthCopy:
      "This is especially useful after emergency saves, seasonal maintenance visits, and replacement installs where happy customers are most likely to leave detailed feedback.",
    faqTitle: "Common HVAC questions before booking",
    faqIntro:
      "Answers reduce hesitation and help visitors self-select the right service before calling.",
    faqs: [
      {
        question: "Do you offer after-hours AC repair?",
        answer:
          "Yes. The demo highlights 24/7 emergency dispatch for no-cool and no-heat calls in the listed service areas.",
      },
      {
        question: "Can I request a replacement estimate online?",
        answer:
          "Yes. Visitors can use the quote form to request system replacement pricing and choose a preferred appointment date.",
      },
      {
        question: "What should I do if my AC is blowing warm air?",
        answer:
          "The site encourages a quick service request and lets the homeowner describe symptoms like weak airflow, ice buildup, or thermostat issues.",
      },
    ],
    contactTitle: "Need cooling or heating help today?",
    contactIntro:
      "Call for emergency service or send a quote request and let the dispatcher follow up with the fastest available window.",
  },
  plumbing: {
    slug: "plumbing",
    businessName: "Precision Flow Plumbing",
    shortMark: "PF",
    industryLabel: "Plumbing Demo",
    themeClass: "theme-plumbing",
    phone: "(555) 018-4427",
    phoneHref: "+15550184427",
    hours: "Open daily with emergency leak response",
    serviceAreas: "Plano, Frisco, McKinney, Allen, and Richardson",
    homeSummary:
      "Water-focused plumbing site built for leak calls, drain cleaning, fixture repair, water heater leads, and review growth.",
    hero: {
      eyebrow: "Leak detection and plumbing repair",
      title: "Stop water problems before they become insurance claims.",
      subtitle:
        "Precision Flow Plumbing gives homeowners a fast way to report leaks, clogged drains, failing water heaters, and fixture problems with online booking and clear next steps.",
      image: "/images/plumbing-hero.png",
      imageAlt: "Plumber inspecting pipes under a residential sink",
      proof: ["Fast leak response", "Drain and water heater pros", "Clean work and clear estimates"],
    },
    salesFeatures,
    servicesEyebrow: "Plumbing services",
    servicesTitle: "Designed around the calls plumbers want more of",
    servicesIntro:
      "The demo combines emergency urgency with trust-building copy for bigger-ticket jobs like water heaters, reroutes, and leak detection.",
    services: [
      {
        icon: "LK",
        title: "Leak Detection",
        description:
          "Pinpoint hidden leaks behind walls, under sinks, and below slabs before water damage spreads.",
      },
      {
        icon: "DR",
        title: "Drain Cleaning",
        description:
          "Clear kitchen, bath, laundry, and main line backups with straightforward scheduling for urgent clogs.",
      },
      {
        icon: "WH",
        title: "Water Heater Repair",
        description:
          "Repair and replacement options for no-hot-water calls, leaking tanks, pilot issues, and aging systems.",
      },
      {
        icon: "FX",
        title: "Fixture Installation",
        description:
          "Faucets, toilets, disposals, shutoff valves, and upgrades handled with tidy work and transparent pricing.",
      },
      {
        icon: "SL",
        title: "Slab Leak Help",
        description:
          "A clear path for homeowners who notice warm floors, high water bills, or unexplained moisture.",
      },
      {
        icon: "EM",
        title: "Emergency Plumbing",
        description:
          "Mobile call access and immediate booking language for active leaks, burst pipes, and sewer backups.",
      },
    ],
    whyTitle: "A plumbing site that captures urgent leaks and planned upgrades",
    whyIntro:
      "Visitors with water on the floor do not read forever. The layout moves them quickly from symptoms to call, quote request, or booking.",
    whyItems: [
      {
        title: "Leak-first messaging",
        description:
          "The hero and services use homeowner language around water damage, shutoff concerns, and fast arrival.",
      },
      {
        title: "High-intent service pages",
        description:
          "Service cards support searches for leak detection, drain cleaning, water heater repair, slab leaks, and emergency plumbing.",
      },
      {
        title: "Easy dispatcher handoff",
        description:
          "The quote form gathers symptoms, contact info, service type, and preferred date so every lead arrives with useful context.",
      },
    ],
    reviewsTitle: "Proof that the plumber shows up, protects the home, and fixes it",
    reviewsIntro:
      "Review copy highlights the details homeowners care about: clean work, quick repair, honest options, and less water damage.",
    reviews: [
      {
        quote:
          "A supply line started spraying under our sink. Precision Flow talked us through the shutoff and had someone out the same afternoon.",
        name: "Angela M.",
        location: "Plano",
      },
      {
        quote:
          "They found a slab leak another company missed and explained the repair choices clearly. The online quote form made the first step simple.",
        name: "Marcus T.",
        location: "Frisco",
      },
      {
        quote:
          "Our water heater failed on a Sunday morning. We booked a window from the website and had hot water again by dinner.",
        name: "Lena P.",
        location: "McKinney",
      },
    ],
    quoteTitle: "Request plumbing help with the details a dispatcher needs",
    quoteIntro:
      "The form turns vague messages into actionable leads by asking what service is needed, when the homeowner is available, and what they are seeing.",
    bookingTitle: "Offer clear plumbing appointment windows",
    bookingIntro:
      "Simple availability cards make it easy to commit before a visitor calls three other plumbers.",
    bookingSlots: ["Today 2:00 PM", "Tomorrow 10:00 AM", "Friday 1:30 PM"],
    notificationCopy:
      "The office can receive lead alerts immediately, including whether the issue is an active leak, clogged drain, or water heater problem.",
    reviewGrowthTitle: "Turn clean repairs into more Google trust",
    reviewGrowthCopy:
      "Plumbing customers often mention fast response and home protection. Automated review requests help capture that trust while the repair is still fresh.",
    faqTitle: "Plumbing questions that reduce call friction",
    faqIntro:
      "Clear answers help homeowners decide whether to call now, book a window, or request pricing.",
    faqs: [
      {
        question: "What should I do before a plumber arrives for a leak?",
        answer:
          "The demo can direct customers to shut off the nearest valve or main water supply, then call or submit the form for immediate help.",
      },
      {
        question: "Can I book drain cleaning online?",
        answer:
          "Yes. Visitors can choose drain cleaning in the service field and select a preferred date or one of the visible booking windows.",
      },
      {
        question: "Do you handle water heater replacement?",
        answer:
          "Yes. The page supports repair and replacement requests for tank and tankless water heater leads.",
      },
    ],
    contactTitle: "Have a leak, backup, or no hot water?",
    contactIntro:
      "Call for urgent service or send a quote request with photos and details so the team can respond with the right next step.",
  },
  electrical: {
    slug: "electrical",
    businessName: "BrightLine Electric",
    shortMark: "BL",
    industryLabel: "Electrical Demo",
    themeClass: "theme-electrical",
    phone: "(555) 019-7788",
    phoneHref: "+15550197788",
    hours: "Monday through Saturday plus emergency electrical support",
    serviceAreas: "Scottsdale, Tempe, Mesa, Chandler, and Phoenix",
    homeSummary:
      "Safety-forward electrical site for troubleshooting, panel upgrades, EV charger leads, lighting projects, and quote requests.",
    hero: {
      eyebrow: "Licensed electrical repair and upgrades",
      title: "Safe, reliable electrical work without the callback chase.",
      subtitle:
        "BrightLine Electric helps homeowners schedule panel inspections, troubleshooting, lighting upgrades, EV charger installs, and urgent electrical repairs with confidence.",
      image: "/images/electrical-hero.png",
      imageAlt: "Electrician inspecting a residential electrical panel",
      proof: ["Licensed electricians", "Panel and safety specialists", "Booked estimates and repair calls"],
    },
    salesFeatures,
    servicesEyebrow: "Electrical services",
    servicesTitle: "Built for safety concerns and upgrade-ready leads",
    servicesIntro:
      "The demo balances urgent troubleshooting with profitable projects like panels, lighting, generators, and EV chargers.",
    services: [
      {
        icon: "PN",
        title: "Panel Upgrades",
        description:
          "Modern electrical panels, breaker replacements, capacity planning, and code-focused upgrade consultations.",
      },
      {
        icon: "TR",
        title: "Troubleshooting",
        description:
          "Help for flickering lights, warm outlets, tripping breakers, dead circuits, and hard-to-find electrical faults.",
      },
      {
        icon: "EV",
        title: "EV Charger Install",
        description:
          "Dedicated circuit planning, charger installation, and clean scheduling for electric vehicle owners.",
      },
      {
        icon: "LT",
        title: "Lighting Installation",
        description:
          "Recessed lighting, exterior security lighting, smart switches, and room-by-room lighting upgrades.",
      },
      {
        icon: "SF",
        title: "Safety Inspections",
        description:
          "Electrical checks for older homes, remodels, home purchases, and concerns after breaker or outlet issues.",
      },
      {
        icon: "EM",
        title: "Emergency Electrical",
        description:
          "Clear call paths for burning smells, sparking outlets, partial power loss, and urgent breaker panel concerns.",
      },
    ],
    whyTitle: "A safety-first site that still sells booked electrical work",
    whyIntro:
      "Electrical buyers need confidence. The demo makes licensing, safety, code awareness, and easy scheduling visible from the first screen.",
    whyItems: [
      {
        title: "Trust before the quote",
        description:
          "The copy emphasizes licensed work, safe diagnostics, and clear options so visitors feel comfortable booking electrical service.",
      },
      {
        title: "Upgrade lead capture",
        description:
          "Panel, EV charger, and lighting sections help turn project research into form submissions and estimate appointments.",
      },
      {
        title: "Mobile emergency paths",
        description:
          "Floating call access supports urgent situations where a visitor needs help with power loss or unsafe outlets immediately.",
      },
    ],
    reviewsTitle: "Reviews that make safety and professionalism visible",
    reviewsIntro:
      "The testimonials show the electrician is careful, licensed, punctual, and able to explain complex work clearly.",
    reviews: [
      {
        quote:
          "BrightLine found the breaker issue quickly and explained what was safe to use until the repair was finished. Professional from the first call.",
        name: "Tom W.",
        location: "Tempe",
      },
      {
        quote:
          "We booked an EV charger estimate online. The electrician checked panel capacity, gave us options, and the install looks clean.",
        name: "Sofia L.",
        location: "Scottsdale",
      },
      {
        quote:
          "Our lights kept flickering and they treated it seriously. The tech found a loose connection and walked us through the safety fix.",
        name: "Nate C.",
        location: "Mesa",
      },
    ],
    quoteTitle: "Request an electrical quote with the right safety details",
    quoteIntro:
      "The form helps homeowners describe symptoms, project goals, and preferred timing before the office follows up.",
    bookingTitle: "Let homeowners book electrical service online",
    bookingIntro:
      "Appointment cards make estimate requests and troubleshooting visits feel immediate instead of open-ended.",
    bookingSlots: ["Today 2:00 PM", "Tomorrow 10:00 AM", "Friday 1:30 PM"],
    notificationCopy:
      "New submissions can notify the team with the service category, urgency, and customer contact details so safety concerns get seen quickly.",
    reviewGrowthTitle: "Build trust after every safe, clean job",
    reviewGrowthCopy:
      "Electrical reviews often mention professionalism, safety, and clear explanations. Automated review requests help make those trust signals public.",
    faqTitle: "Electrical questions customers ask before they book",
    faqIntro:
      "Good answers help homeowners move from concern to action while avoiding unsafe DIY decisions.",
    faqs: [
      {
        question: "When should I call for an electrical issue immediately?",
        answer:
          "The demo directs visitors to call for burning smells, sparking outlets, partial power loss, hot breakers, or repeated breaker trips.",
      },
      {
        question: "Can I request an EV charger estimate online?",
        answer:
          "Yes. EV charger installation is included as a quote form option and can be paired with panel capacity checks.",
      },
      {
        question: "Do you handle electrical work for older homes?",
        answer:
          "Yes. The safety inspection and panel upgrade sections are written for older homes, remodels, and pre-sale concerns.",
      },
    ],
    contactTitle: "Need a licensed electrician to take a look?",
    contactIntro:
      "Call now for urgent safety concerns or request a quote for an upgrade, inspection, or troubleshooting visit.",
  },
};

export const demoList = [demos.hvac, demos.plumbing, demos.electrical];
