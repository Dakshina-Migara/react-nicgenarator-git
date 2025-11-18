import React from 'react'
import Card1 from '../../common/component/Card1/Card1'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>

      <Link to={'/InputPage'}>
        <Card1 />
      </Link>

    </div>
  )
}
