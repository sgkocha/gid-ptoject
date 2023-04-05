import React from 'react'
import "./ActionButton.css"

type ActionButtonProps = {
    title: string
    bgColor: string
    txtColor: string
}

export const ActionButton = ({title, bgColor, txtColor}:ActionButtonProps) => {
  return (
    <button className='action-btn' style={{backgroundColor: bgColor, color: txtColor}}>{title}</button>
  )
}
