export function ContactCard({ icon, linkUrl, linkText }) {
  return (
    <>
      <style global jsx>{`
        .contact-card {
          display: flex;
          align-items: center;
        }

        .contact-card-icon {
          font-size: 18px;
          margin-right: 4px;
        }
      `}</style>
      <div className="contact-card">
        <div className="contact-card contact-card-icon">{icon}</div>
        <div className="details">
          <a href={linkUrl}>{linkText}</a>
        </div>
      </div>
    </>
  )
}
