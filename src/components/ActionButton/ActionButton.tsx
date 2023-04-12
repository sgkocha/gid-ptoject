import React from 'react'
import "./ActionButton.css"

type ActionButtonProps = {
    title: string
    bgColor: string
    txtColor: string
    brdColor?: string 
}

export const ActionButton = ({title, bgColor, txtColor, brdColor = bgColor}:ActionButtonProps) => {
  return (
    <button className='action-btn' style={{backgroundColor: bgColor, color: txtColor, border: `1px solid ${brdColor}`}}>{title}</button>
  )
}
