import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  const params = useParams()
  return (
    
    <div className="page container">
      <h1>This is contact Detail Page {params.id}</h1>
    </div>
  )
}

export default CourseDetail
