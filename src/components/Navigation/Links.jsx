import React from 'react'

export default function Links({ links }) {
  return (
    <div className="d-flex gap-3 mx-2">
      {links.map(link => (
        <a key={link.name} href={link.href}>{link.name}</a>
      ))}
    </div>
  )
}