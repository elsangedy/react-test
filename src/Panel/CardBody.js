import React from 'react'
import PropTypes from 'prop-types'

const CardBody = ({ onClick, title, content }) => (
  <div className="Panel__Card__Body">
    <div className="Panel__Card__Body__Title" onClick={onClick}>{title}</div>
    <div className="Panel__Card__Body__Content">{content}</div>
  </div>
)

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any
}

export default CardBody
