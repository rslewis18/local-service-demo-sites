const BACKEND_BRILLIANCE_URL = "https://backendbrilliance.com";

export function PortfolioSignature() {
  return (
    <div className="portfolio-signature" aria-label="Portfolio attribution">
      <p>
        Powered by{" "}
        <a
          href={BACKEND_BRILLIANCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Backend Brilliance website"
        >
          Backend Brilliance
        </a>
      </p>
      <small>
        Conversion-focused websites and automation systems for growing
        businesses.
      </small>
    </div>
  );
}
