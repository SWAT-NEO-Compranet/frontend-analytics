import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Item, IconWrapper } from './styles'

function IconItem ({ itemData, itemIcon }) {
  return (
    <IconWrapper>
      <Icon src={itemIcon} />
      <Item>{itemData}</Item>
    </IconWrapper>
  )
}

IconItem.propTypes = {
  itemData: PropTypes.string,
  itemIcon: PropTypes.string
}

export default IconItem
