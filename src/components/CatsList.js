import React from 'react';
import CatsListItem from './CatsListItem';
import './CatsList.scss'

const CatsList = (props) => {
  // const onClick = (item) => {
  //   props.onClick(item)
  // }
  return (
    <div className="list">
      {props.list.map(item => {
        console.log(item.image);
        return <CatsListItem id={item.id} item={item} />
      })}
    </div>
  )
}
export default CatsList;