import React from 'react'
import { Typography } from '@mui/material'

export default function DivineCuluturePage() {
    const image = ['divine/img1.jpg','divine/img2.jpg','divine/img3.jpg','divine/img4.jpg','divine/img5.jpg','divine/img6.jpg']
    const image1 =['culture/pic1.jpg', 'culture/pic2.jpg', 'culture/pic3.jpg', 'culture/pic4.jpg', 'culture/pic5.jpg', 'culture/pic6.jpg'];
    const image2 =['Tourism/picture1.jpg','Tourism/picture2.jpg','Tourism/picture3.jpg','Tourism/picture4.jpg','Tourism/picture5.jpg','Tourism/picture6.jpg'];
  return (
    <div>
       <div className='box-container-1'>
            <div className='box-container-heading'>
                <Typography variant={'h5'} style={{ fontSize: '3em', display: 'inline-block', fontFamily: "Merienda", fontWeight: 300, overflow: "hidden"}}>Divine</Typography>
            </div>
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
            <div className='some-text-para'>
                <div>
                    <Typography variant={'subtitle1'} style={{fontFamily: "Kalam"}}>Uttarakhand is a divine sanctuary where every towering peak tells a story of ancient wisdom and every river embodies sacred grace. This enchanting land is a blend of majestic mountains and revered temples, each contributing to a profound sense of spirituality. The pristine landscapes and serene settings create a harmonious space where nature's beauty and spiritual significance merge, offering a truly transcendent experience.</Typography>
                </div>
            </div>
       </div>
       <div className='box-container-2'>
       <div className='box-container-heading'>
                <Typography variant={'h5'} style={{ fontSize: '3em', display: 'inline-block', fontFamily: "Merienda", fontWeight: 300, overflow: "hidden"}}>Culture</Typography>
            </div>
            <div className='wrapper'>
                <div className='items-container1'>
                    {image1.map((img)=>{
                        return<div className='item'>
                            <img src={img} alt="" />
                        </div>
                    })}

                        {/* duplicate item */}

                    {image1.map((img)=>{
                        return<div className='item'>
                            <img src={img} alt="" />
                        </div>
                    })}
                </div>
            </div>
            <div className='some-text-para'>
                <div>
                    <Typography variant={'subtitle1'} style={{fontFamily: "Kalam"}}>
                    Uttarakhand is a vibrant cultural mosaic, rich with traditions and heritage. The state’s culture is vividly expressed through its festivals, music, dance, and arts. Celebrations like Kumbh Mela and Nanda Devi Raj Jat highlight the community’s deep-rooted spiritual and cultural connections. Traditional folk dances and soulful music capture the region’s essence, while artisanal crafts such as handwoven textiles and intricate wood carvings reflect local craftsmanship. Uttarakhand’s culture is a living narrative of its history and values, offering a colorful and immersive experience of its rich legacy.</Typography>
                </div>
            </div>
       </div>
       <div className='box-container-3'>
       <div className='box-container-heading'>
                <Typography variant={'h5'} style={{ fontSize: '3em', display: 'inline-block', fontFamily: "Merienda", fontWeight: 300, overflow: "hidden"}}>Tourism</Typography>
            </div>
            <div className='wrapper'>
                <div className='items-container'>
                    {image2.map((img)=>{
                        return<div className='item'>
                            <img src={img} alt="" />
                        </div>
                    })}

                        {/* duplicate item */}

                    {image2.map((img)=>{
                        return<div className='item'>
                            <img src={img} alt="" />
                        </div>
                    })}
                </div>
            </div>
            <div className='some-text-para'>
                <div>
                    <Typography variant={'subtitle1'} style={{fontFamily: "Kalam"}}>Uttarakhand is a premier destination for travelers seeking both adventure and tranquility. From the snow-capped peaks of the Himalayas to the lush green valleys, the state's diverse landscapes offer endless exploration. Popular spots like Nainital, Rishikesh, and Mussoorie provide a mix of natural beauty and recreational activities, including trekking, river rafting, and yoga retreats. Sacred sites such as Haridwar and the Char Dham pilgrimage routes attract those on spiritual journeys. With its blend of serene environments, vibrant culture, and outdoor adventures, Uttarakhand promises an unforgettable experience for every traveler.</Typography>
                </div>
            </div>
       </div>
    </div>
  )
}
