import React from 'react';
import CatsListItem from './CatsListItem';

const CatsList = (props) => {

  const onClick = (item) => {
    props.onClick(item)
  }
  return (
    <div>
      {props.list.map(item => {
        return <CatsListItem onClick={onClick} item={item} />
      })}
    </div>
  )
}
export default CatsList;