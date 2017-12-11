import React from 'react'
import PropTypes from 'prop-types'

import { CardHeader, CardBody } from './'

const Card = ({ onOpen, onClose, title, header, body, headerTitle, bodyTitle }) => {
  let element

  const click = () => {
    if (element.classList.contains('Panel__Card--is-close')) {
      element.classList.remove('Panel__Card--is-close')

      if (onOpen) {
        element.classList.add('Panel__Card--is-loading')

        onOpen()
          .then(() => {
            element.classList.remove('Panel__Card--is-loading')
            element.classList.add('Panel__Card--is-open')
          })
          .catch((e) => {
            console.log(e)
            element.classList.remove('Panel__Card--is-loading')
            element.classList.add('Panel__Card--is-open')
          })
      } else {
        element.classList.add('Panel__Card--is-open')
      }
    } else {
      element.classList.remove('Panel__Card--is-open')

      if (onClose) {
        element.classList.add('Panel__Card--is-loading')

        onClose()
          .then(() => {
            element.classList.remove('Panel__Card--is-loading')
            element.classList.add('Panel__Card--is-close')
          })
          .catch((e) => {
            console.log(e)
            element.classList.remove('Panel__Card--is-loading')
            element.classList.add('Panel__Card--is-close')
          })
      } else {
        element.classList.add('Panel__Card--is-close')
      }
    }
  }

  return (
    <div className="Panel__Card Panel__Card--is-close" ref={(c) => (element = c)}>
      <CardHeader title={headerTitle || title} content={header} onClick={click} />
      <CardBody title={bodyTitle || title} content={body} onClick={click} />
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.any.isRequired,
  body: PropTypes.any,
  headerTitle: PropTypes.string,
  bodyTitle: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
}

export default Card
