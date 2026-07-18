type QuoteFormProps = {
  serviceOptions: string[];
};

export function QuoteForm({ serviceOptions }: QuoteFormProps) {
  return (
    <form className="quote-form" action="#quote" aria-describedby="quote-demo-note">
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" placeholder="(555) 123-4567" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" />
      </label>
      <label>
        Service Needed
        <select name="service" defaultValue="" required>
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
      <p className="form-demo-note quote-form__full" id="quote-demo-note">
        Demo lead form. No information is sent unless a real endpoint is added.
      </p>
    </form>
  );
}
