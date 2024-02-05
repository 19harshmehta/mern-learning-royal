import React from 'react'
import { useParams } from 'react-router-dom'

export const SeriesDetail = () => {
    const id = useParams().id
  return (
    <div>SeriesDetail - {id}</div>
  )
}
