import React from 'react'
import styles from './ProjectsItem.module.css'
import { Link } from 'react-router-dom'


type ProjectsItemProps = {
  image: string
  title: string
  style: string
  size: number
}

const ProjectsItem = ({image, title, style, size}:ProjectsItemProps) => {
  return (
    <div>
      <div><img src={image} alt="projects-item"/></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.style}>{style}</div>
      <div className={styles.size}>{size} m<sup>2</sup></div>
    </div>
  )
}

export default ProjectsItem