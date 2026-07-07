import Link from "next/link";
import { AppointmentRequest } from "@/components/AppointmentRequest";
import { FloatingActions } from "@/components/FloatingActions";
import { QuoteForm } from "@/components/QuoteForm";
import type { DemoConfig } from "@/data/demos";

type DemoPageProps = {
  demo: DemoConfig;
};

export function DemoPage({ demo }: DemoPageProps) {
  const heroStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(9, 16, 28, 0.88), rgba(9, 16, 28, 0.62) 48%, rgba(9, 16, 28, 0.18)), url(${demo.hero.image})`,
  };

  return (
    <main className={`demo-page ${demo.themeClass}`}>
      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand__mark">{demo.shortMark}</span>
          <span>
            <strong>{demo.businessName}</strong>
            <small>{demo.industryLabel}</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#quote">Free Quote</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href={`tel:${demo.phoneHref}`}>
          {demo.phone}
        </a>
      </header>

      <section className="demo-hero" style={heroStyle}>
        <div className="container demo-hero__content">
          <p className="eyebrow">{demo.hero.eyebrow}</p>
          <h1>{demo.hero.title}</h1>
          <p>{demo.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#quote">
              Request a Free Quote
            </a>
            <a className="button button--secondary" href="#booking">
              Book Service Online
            </a>
          </div>
          <div className="hero-proof" aria-label="Service highlights">
            {demo.hero.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-strip" aria-label="Lead generation features">
        <div className="container feature-strip__grid">
          {demo.salesFeatures.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{demo.servicesEyebrow}</p>
            <h2>{demo.servicesTitle}</h2>
            <p>{demo.servicesIntro}</p>
          </div>
          <div className="card-grid card-grid--three">
            {demo.services.map((service) => (
              <article className="info-card" key={service.title}>
                <span className="info-card__icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>{demo.whyTitle}</h2>
            <p>{demo.whyIntro}</p>
            <a className="text-link" href="#quote">
              Get pricing before dispatch
            </a>
          </div>
          <div className="reason-list">
            {demo.whyItems.map((item) => (
              <article className="reason" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Local reviews</p>
            <h2>{demo.reviewsTitle}</h2>
            <p>{demo.reviewsIntro}</p>
          </div>
          <div className="review-grid">
            {demo.reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="stars" aria-label="5 star review">
                  5.0
                </div>
                <p>&quot;{review.quote}&quot;</p>
                <strong>{review.name}</strong>
                <span>{review.location}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="quote">
        <div className="container quote-booking-grid">
          <div>
            <p className="eyebrow">Online quote request</p>
            <h2>{demo.quoteTitle}</h2>
            <p>{demo.quoteIntro}</p>
            <p className="form-purpose">
              <strong>Use this form to request pricing or help.</strong>
              Share the issue, preferred date, and contact details so the team
              can follow up with the right next step.
            </p>
            <QuoteForm serviceOptions={demo.services.map((service) => service.title)} />
          </div>

          <aside className="booking-panel" id="booking" aria-label="Appointment booking options">
            <p className="eyebrow">Appointment booking</p>
            <h2>{demo.bookingTitle}</h2>
            <p>{demo.bookingIntro}</p>
            <p className="form-purpose form-purpose--compact">
              <strong>Use this section to request a service time.</strong>
              Choose one available window and send the appointment request to
              the office.
            </p>
            <AppointmentRequest
              bookingSlots={demo.bookingSlots}
              serviceOptions={demo.services.map((service) => service.title)}
            />
            <div className="notification-note">
              <strong>Instant Lead Notifications</strong>
              <p>{demo.notificationCopy}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container growth-section">
          <div>
            <p className="eyebrow">Google review growth</p>
            <h2>{demo.reviewGrowthTitle}</h2>
            <p>
              After each completed job, customers automatically receive a review
              request link to help grow Google reviews.
            </p>
            <p>{demo.reviewGrowthCopy}</p>
          </div>
          <div className="growth-metrics" aria-label="Review growth workflow">
            <span>Job complete</span>
            <span>Text review link</span>
            <span>Google review posted</span>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>{demo.faqTitle}</h2>
            <p>{demo.faqIntro}</p>
          </div>
          <div className="faq-list">
            {demo.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>{demo.contactTitle}</h2>
            <p>{demo.contactIntro}</p>
            <div className="contact-actions">
              <a className="button button--primary" href={`tel:${demo.phoneHref}`}>
                Call Now
              </a>
              <a className="button button--secondary" href="#quote">
                Request a Free Quote
              </a>
            </div>
          </div>
          <div className="contact-details">
            <p>
              <strong>Phone</strong>
              <a href={`tel:${demo.phoneHref}`}>{demo.phone}</a>
            </p>
            <p>
              <strong>Hours</strong>
              {demo.hours}
            </p>
            <p>
              <strong>Service areas</strong>
              {demo.serviceAreas}
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div>
            <p>{demo.businessName} is built for fast local service requests.</p>
            <p className="demo-disclosure">
              Demo website created to showcase lead-generation features for
              local service businesses.
            </p>
          </div>
          <Link href="/">Back to demo directory</Link>
        </div>
      </footer>

      <FloatingActions phone={demo.phone} phoneHref={demo.phoneHref} />
    </main>
  );
}
