import * as React from 'react'

import useListContext from './useListContext'

const RenderList: React.FC = () => {
  const list = useListContext()?.list ?? []

  return (
    <>
      {list.map((item, idx) => (
        <React.Fragment key={idx}>{item}</React.Fragment>
      ))}
    </>
  )
}

export default RenderList
