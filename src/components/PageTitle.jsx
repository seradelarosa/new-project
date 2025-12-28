import "./PageTitle.css";

export default function PageTitle({ title, subtitle }) {
  return (
    <div className="site-title">
      <h1 key={title} className="title-main glitch" data-text={title}>
        {title}
      </h1>

      {/* prop */}
      {subtitle && (
        <span
        // key forces animation restart
          key={subtitle}
          className="title-sub glitch"
          // required for the glitch pseudo‑elements
          data-text={subtitle}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}
