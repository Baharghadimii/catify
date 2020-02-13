import React from 'react';
import CatsListItem from './CatsListItem';

const CatsList = (props) => {

  const onClick = (item) => {
    props.onClick(item)
  }

  return (
    <div>
      <CatsListItem onClick={onClick} />
    </div>
  )
}
export default CatsList;