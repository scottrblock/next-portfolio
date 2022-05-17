import { DOMElement, ReactComponentElement } from 'react'

export function ContactCard(props: {
  icon: HTMLElement
  linkUrl: string
  linkText: string
}) {
  return (
    <div className="contact-card">
      {props.icon}
      <div className="details">
        <a href={props.linkUrl}>{props.linkText}</a>
      </div>
    </div>
  )
}
