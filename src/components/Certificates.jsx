import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpg";
import img4 from "../assets/c4.jpg";
import img5 from "../assets/c5.jpg";
import img6 from "../assets/c6.jpg";

export default function Portfolio() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="Certificates-grid">
        {images.map((image, i) => (
          <div key={i} className="certificates-item">
            <img src={image} alt={`Certificates ${i + 1}`} />
          </div>
        ))}
      </div>
      <p className="more"></p>
    </section>
  );
}