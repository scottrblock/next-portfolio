export function ContactCard({ icon, linkUrl, linkText, rel = undefined }) {
  const linkAttrs = {
    href: linkUrl
  }

  if (rel) {
    linkAttrs.rel = rel
  }

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
          <a {...linkAttrs}>{linkText}</a>
        </div>
      </div>
    </>
  )
}
