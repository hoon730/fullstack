import React from 'react'
import './sass/Title.scss'


const SectionTitle = ({title, subTitle}: {title: string, subTitle?: string}) => {
  return (
    <div>
      <div className="titleBox">
        <h2 className="title">{title}</h2>
        <p className="subTitle">{subTitle}</p>
      </div>
    </div>
  )
}

export default SectionTitle
