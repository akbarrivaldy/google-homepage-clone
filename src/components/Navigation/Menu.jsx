import React from 'react'
import {
  Tooltip,
  OverlayTrigger
} from 'react-bootstrap'

export default function Menu() {
  const renderTooltip = props => (
    <Tooltip {...props}>
      Google Apps
    </Tooltip>
  )

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 0 }}
      overlay={renderTooltip}
    >
      <div className="menu__container mx-2">
        <i className="fas fa-th"></i>
      </div>
    </OverlayTrigger>
  )
}