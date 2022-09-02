import React from 'react'
import btnLeft from '../assets/img/left-arrow.svg'
import btnRight from '../assets/img/right-arrow.svg'
import './PageBtnDisplay.css'

function PageBtnDisplay({page,setPage}) {
  return (
    <div className='display-container'>
        <div className="btn-container" onClick={()=>{ page <= 1 ? setPage(34) : setPage(page-1)}}>
            <img src={btnLeft} alt="Previous page" />
            <h4>Previous</h4>
        </div>
        <span className='actual-page'>Page : {page}</span>
        <div className="btn-container"  onClick={()=>{  page >= 34 ? setPage(1) : setPage(page+1)}}>
            <img src={btnRight} alt="Next page" />
            <h4>Next</h4>
        </div>
    </div>
)
}

export default PageBtnDisplay