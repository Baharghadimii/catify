import React from 'react';
import CatsListItem from './CatsListItem';
import './CatsList.scss'

const CatsList = (props) => {
  const onClick = (item, cat) => {
    props.onClick(item, cat);
  }
  return (
    <div className="list">
      {props.list.map(item => {
        return <CatsListItem id={item.id} item={item} onClick={onClick} />
      })}
    </div>
  )
}
export default CatsList;