type AppointmentRequestProps = {
  bookingSlots: string[];
  serviceOptions: string[];
};

export function AppointmentRequest({
  bookingSlots,
  serviceOptions,
}: AppointmentRequestProps) {
  return (
    <form className="appointment-form" action="#booking">
      <fieldset className="appointment-slots">
        <legend>Select one available time</legend>
        {bookingSlots.map((slot, index) => (
          <label className="appointment-slot" key={slot}>
            <input
              type="radio"
              name="appointmentTime"
              value={slot}
              defaultChecked={index === 0}
            />
            <span>{slot}</span>
          </label>
        ))}
      </fieldset>

      <label>
        Name
        <input name="appointmentName" type="text" placeholder="Your name" />
      </label>
      <label>
        Phone
        <input name="appointmentPhone" type="tel" placeholder="(555) 123-4567" />
      </label>
      <label>
        Service Needed
        <select name="appointmentService" defaultValue="">
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

      <button className="button button--primary" type="submit">
        Request Appointment
      </button>
    </form>
  );
}
