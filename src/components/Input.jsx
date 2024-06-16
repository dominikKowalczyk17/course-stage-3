export default function Input({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number" // Even if this is set to number
            required
            value={userInput.annualInvestment}
            onChange={
              (event) =>
                onChange("annualInvestment", Number(event.target.value)) //this yields a string, and when adding it only concats the strings
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}
