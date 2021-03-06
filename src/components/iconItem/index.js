import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Item, IconWrapper } from './styles'

function IconItem ({ itemData, itemIcon, children }) {
  return (
    <IconWrapper>
      <Icon src={itemIcon} />
      <Item>{itemData}</Item>
      {children}
    </IconWrapper>
  )
}

IconItem.propTypes = {
  itemData: PropTypes.string,
  itemIcon: PropTypes.string,
  children: PropTypes.string
}

export default IconItem
