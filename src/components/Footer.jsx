import "../styles/Footer.css";

export function Footer() {
  return (
    <footer>
      <p className="foot-giphy">
        App by{" "}
        <a
          className="foot-giphy-linkedin"
          href="www.linkedin.com/in/alejandro-arco-10a081227"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alejandro Arco
        </a>{" "}
        // Highlights by{" "}
        <a
          className="foot-giphy-design"
          href="https://www.highlights.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          highlights.design
        </a>{" "}
        // Icons by{" "}
        <a
          className="foot-giphy-lucide"
          href="https://lucide.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          lucide
        </a>
      </p>
    </footer>
  );
}
