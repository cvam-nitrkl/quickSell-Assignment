import React from 'react'
import "./filteredheader.css";
import ProfileImg from '../profileImage/ProfileImg';

const FilteredHeader = ({user,count}) => {
  return (
    <>
        <div className='filteredHeader'>
            <div className='filtered_left'>
                <ProfileImg />
                <h4 className='filtered_title'>{user.name}</h4>
                <h4 className='filtered_count'>{count}</h4>
            </div>
            <div className='filtered_right'>
                <h4 className='plus_icon'>+</h4>
                <i className="ri-more-fill"></i>
            </div>
        </div>
    </>
  )
}

export default FilteredHeader