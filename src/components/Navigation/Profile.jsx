import React from 'react'
import {
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap'

export default function Profile({ profiles }) {
  const mainAccount = profiles[0]

  const renderTooltip = props => (
    <Tooltip {...props}>
      Google Account
      <br />
      {mainAccount.name}
      <br />
      {mainAccount.email}
    </Tooltip>
  )

  return (
    <OverlayTrigger
      placement='bottom'
      delay={{ show: 250, hide: 0 }}
      overlay={renderTooltip}
    >
      <div className="profile__container" >
        <img src={mainAccount.image} alt={mainAccount.name} />
      </div>
    </OverlayTrigger>
  )
}