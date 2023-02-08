import React from 'react'

function Card2({products}) {
  return (
    <div>
        {
          products.map((item)=>{
        const{title,description,image,}=item
        return(
        <>
        <div className="container">
        
        <div className="card " style={{width: "20rem"}}>
  <img src={image} className="card-img-top" alt="..." style={{height:"300px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,15)}</h5>
    <p className="card-text">{description.slice(0,100)}</p>
    <a href="/content" className="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>
</>
)
      })
    }
    </div>
  )
}

export default Card2
