import React from 'react'

const Cards = ({item}) => {
  console.log(item);
  return (
    <>
    <div className='m-4'>
    <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.Category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">₹ {item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-slate-500 hover:text-white">Buy Now</div>
    </div>
  </div>
</div>
    </div>
      
    </>
  )
}

export default Cards
