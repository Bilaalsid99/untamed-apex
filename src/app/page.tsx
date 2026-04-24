const services = [
  {
    title: "Initial Session",
    description: "Assessment, movement breakdown, and foundational work.",
  },
  {
    title: "Ongoing Personal Training",
    description: "Structured sessions designed around your progression.",
  },
  {
    title: "Advanced Movement Training",
    description:
      "Handstands, partner work, and higher-level control once your foundation is ready.",
  },
];

const filters = [
  "You’re ready to take training seriously, even if you’re just starting.",
  "You want structure instead of random workouts.",
  "You’re open to learning how your body actually works.",
  "You care about doing things properly, not just quickly.",
  "You want progress you can feel, not just chase.",
];

const outcomes = [
  {
    title: "Build Strength",
    text: "Develop real, usable strength through controlled, progressive training.",
  },
  {
    title: "Improve Movement",
    text: "Learn how your body moves and address what is holding you back.",
  },
  {
    title: "Gain Confidence",
    text: "Understand what you are doing and why, so you are not relying on guesswork.",
  },
  {
    title: "Stay Consistent",
    text: "Follow a clear path that removes confusion and keeps you moving forward.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Untamed Apex Personal Training</p>

            <h1>Train with clarity. Build strength that actually lasts.</h1>

            <p className="heroText">
              For people who want to move better, get stronger, and feel in
              control of their body without guesswork or noise.
            </p>

            <div className="heroActions">
              <a href="#book" className="buttonPrimary">
                Book initial session
              </a>
              <a href="#services" className="buttonSecondary">
                View services
              </a>
            </div>
          </div>

          <div className="heroCard">
            <p className="cardLabel">Training focus</p>
            <h2>Strength. Movement. Control.</h2>
            <p>
              Built around long-term progression, not random intensity. You
              learn the foundations, train with purpose, and develop confidence
              in how your body moves.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColumn">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2>For people who want proper structure.</h2>
          </div>

          <ul className="checkList">
            {filters.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">What I help you do</p>
            <h2>Build the body with control, not confusion.</h2>
          </div>

          <div className="cardGrid">
            {outcomes.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">How it works</p>
            <h2>A simple path into training.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Initial session</h3>
              <p>
                We assess where you are, break down your movement, and build
                your foundation properly from the start.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Ongoing training</h3>
              <p>
                Structured sessions focused on progression, control, and
                building strength over time.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Movement and mobility handoff</h3>
              <p>
                You learn what to work on outside sessions so your body
                continues improving between training.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted" id="approach">
        <div className="container twoColumn">
          <div>
            <p className="eyebrow">Training approach</p>
            <h2>Simple, progressive, and clear.</h2>
          </div>

          <div className="bodyText">
            <p>
              This is not about rushing or forcing results. Training is built
              around doing things properly, improving how your body moves, and
              progressing step by step.
            </p>

            <p>
              You will understand what you are doing, feel the difference, and
              build something that holds.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Services</p>
            <h2>Choose the right starting point.</h2>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <div className="serviceCard" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="book">
        <div className="container ctaBox">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>Book your initial session.</h2>
            <p>
              Build this properly from the beginning with a clear first session,
              movement assessment, and practical direction.
            </p>
          </div>

          <a href="mailto:hello@untamedapex.co.uk" className="buttonPrimary">
            Book initial session
          </a>
        </div>
      </section>
    </main>
  );
}