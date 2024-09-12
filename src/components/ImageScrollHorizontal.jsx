import React from 'react'
export default function ImageScrollHorizontal() {
    const image = ['New folder/image1.jpg', 'New folder/image2.jpg', 'New folder/image3.jpg', 'New folder/image4.jpg', 'New folder/image5.jpg', 'New folder/image6.jpg'] 
  return (
<div className='wrapper'>
    <div className='items-container'>
        {image.map((img)=>{
            return<div className='item'>
                <img src={img} alt="" />
            </div>
        })}
            {/* duplicate item */}

        {image.map((img)=>{
            return<div className='item'>
                <img src={img} alt="" />
            </div>
        })}
        </div>
    </div>
  )
}
