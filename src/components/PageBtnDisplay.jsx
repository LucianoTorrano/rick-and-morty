import React from 'react'
import btnLeft from '../assets/img/left-arrow.svg'
import btnRight from '../assets/img/right-arrow.svg'
import './PageBtnDisplay.css'

function PageBtnDisplay() {
  return (
    <div className='display-container'>
        <div className="btn-container">
            <img src={btnLeft} alt="Previous page" />
            <h4>Previous</h4>
        </div>
        <span>Page : 1</span>
        <div className="btn-container">
            <img src={btnRight} alt="Next page" />
            <h4>Next</h4>
        </div>
    </div>
)
}

export default PageBtnDisplay