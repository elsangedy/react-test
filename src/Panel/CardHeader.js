import React from 'react'
import PropTypes from 'prop-types'

const CardHeader = ({ onClick, title, content }) => (
  <div className="Panel__Card__Hearder" onClick={onClick}>
    <div className="Panel__Card__Hearder__Title">{title}</div>
    <div className="Panel__Card__Hearder__Content">{content}</div>
  </div>
)

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any
}

export default CardHeader
