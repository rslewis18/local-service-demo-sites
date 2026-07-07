type QuoteFormProps = {
  serviceOptions: string[];
};

export function QuoteForm({ serviceOptions }: QuoteFormProps) {
  return (
    <form className="quote-form" action="#quote">
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" placeholder="(555) 123-4567" />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" />
      </label>
      <label>
        Service Needed
        <select name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Preferred Date
        <input name="preferredDate" type="date" />
      </label>
      <label className="quote-form__full">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us what is happening and the best time to reach you."
        />
      </label>
      <button className="button button--primary quote-form__full" type="submit">
        Request a Free Quote
      </button>
    </form>
  );
}
