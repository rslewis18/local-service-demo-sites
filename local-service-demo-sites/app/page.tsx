import Link from "next/link";
import Image from "next/image";
import { demoList } from "@/data/demos";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="container home-hero__content">
          <p className="eyebrow">Local business growth agency demos</p>
          <h1>Lead-generating websites for home service companies.</h1>
          <p>
            Three ready-to-show demo sites built around calls, booked jobs,
            faster response, review growth, and mobile-first local SEO.
          </p>
          <div className="home-hero__actions">
            <Link className="button button--light" href="/hvac">
              View HVAC Demo
            </Link>
            <Link className="button button--ghost-light" href="/plumbing">
              View Plumbing Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Choose a vertical</p>
            <h2>Purpose-built examples for service contractors</h2>
            <p>
              Each demo uses the same conversion strategy but changes the
              offer, trust points, visuals, services, FAQs, and urgency for the
              trade.
            </p>
          </div>

          <div className="demo-grid">
            {demoList.map((demo) => (
              <Link
                key={demo.slug}
                className={`demo-card ${demo.themeClass}`}
                href={`/${demo.slug}`}
              >
                <Image
                  src={demo.hero.image}
                  alt={demo.hero.imageAlt}
                  width={720}
                  height={420}
                  sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
                <span>{demo.industryLabel}</span>
                <h3>{demo.businessName}</h3>
                <p>{demo.homeSummary}</p>
                <strong>Open demo</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
