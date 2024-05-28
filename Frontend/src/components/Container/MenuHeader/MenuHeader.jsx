import React from 'react'
import './MenuHeaderStyle.css'
const MenuHeader = () => {
  return (
    <div>
      <div className="background">
     <div className="container menu mt-5 pt-5">
      <div className="row d-flex p-4">
        <div className="col">
          <p>
          This is a type of resturent which typically serves food and drink,<span style={{ color: "#F54748" }}>in addition to</span>  light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food
          </p>
        </div>
        <div className="col">
          <img className='shadow' src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg" alt="" />
        </div>
      </div>
     </div>
      </div>
    </div>
  )
}

export default MenuHeader