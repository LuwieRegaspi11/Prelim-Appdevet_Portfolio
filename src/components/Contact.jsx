export default function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">CONTACT</h2>
      <form className="contact-form">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="text" placeholder="Phone number" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}