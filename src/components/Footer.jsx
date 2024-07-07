import React from 'react'

export default function Footer(props) {
  const {handleToggleModal, data} = props
  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h3>{data?.title}</h3>
        <h2>NASA API APP / BAKR</h2>
      </div>
      <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
