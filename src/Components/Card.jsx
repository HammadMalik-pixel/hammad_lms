import React from 'react'

function Card({data}) {
    const{image,title,description}=data
  return (
    
      <div className="card " style={{width: "20rem"}}>
  <img src={image } className="card-img-top" alt="..." style={{height:"300px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,15)}</h5>
    <p className="card-text">{description.slice(0,100)}</p>
    <a href="#" className="btn btn-primary">Add to cart</a>
  </div>
</div>

  )
}

export default Card
