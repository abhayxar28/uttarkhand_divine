import React from 'react'
import { Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import ImageScrollHorizontal from './ImageScrollHorizontal';
import DivineCuluturePage from './DivineCuluturePage';
import VideoPage from './VideoPage';
import Map  from './Map';
import MapContainerContent from './MapContainerContent';

export default function Landing() {

  return (
    <div>
        <header style={{overflowX: 'hidden'}}>
            <Typography style={{fontFamily: "Gajraj One", fontWeight: 400, fontStyle: 'normal', fontSize: 40, cursor:'pointer'}}>
            उत्तराखंड</Typography>
        </header>
        <main style={{overflowX: 'hidden'}}>
            <div className='video-card'>
                <video autoPlay muted loop>
                    <source src="video3.mp4" />
                </video>
            </div>
            <div className='some-text'>
            <TypeAnimation
                sequence={[
                        "Wander through the whispers of the Himalayas and share the serenity of Uttarakhand.",
                        "Discover the sacred tales of Uttarakhand—where every journey becomes a story of its own.",
                        "Explore the divine landscapes of Uttarakhand and let the mountains narrate their timeless tales.",
                        "In the heart of Uttarakhand, every path you tread writes a chapter in your travelogue.",
                        "Immerse in Uttarakhand's grandeur—where every moment you live is a story waiting to be told."
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ fontSize: '2em', display: 'inline-block', fontFamily:"Merienda", fontWeight: 400, }}
                    repeat={Infinity}
            />
            </div>
            <div className='some-text-para'>
                <div>
                    <Typography variant={'subtitle1'} style={{fontFamily: "Kalam"}}>It may sound poetic, but this phrase beautifully reflects the essence of exploring Uttarakhand. As you traverse its majestic landscapes and immerse yourself in its vibrant culture, you create and share stories that echo the grandeur of the Himalayas.</Typography>
                </div>
            </div>
           <div>
                <ImageScrollHorizontal></ImageScrollHorizontal>
           </div>
           <div className='some-text'>
                <Typography variant={'h4'} style={{ fontSize: '3em', fontFamily:"Merienda" , alignItems:'center', fontWeight: 300, overflow: "hidden"}}>Journey to the Divine Heart of Uttarakhand</Typography>
           </div>
           <div className='some-text-para'>
                <div>
                    <Typography variant={'subtitle1'} style={{fontFamily: "Kalam"}}>Unveil the sacred splendor of Uttarakhand, where every peak whispers ancient tales and every river flows with spiritual grace. Uttarakhand Divine invites you to traverse this mystical land through our mesmerizing travel films. Witness the sublime beauty of untouched landscapes, sacred temples, and the serene moments that define this hallowed region.</Typography>
                </div>
            </div>
           <div>
                <VideoPage></VideoPage>
           </div>
           <div className='box-container'>
                <div className='box-container-div'>
                    <DivineCuluturePage></DivineCuluturePage>
                </div>
           </div>
           <div style={{display:'flex', width: '100%', height: '100%'}}>
                <div className='mapContainer'>
                    <MapContainerContent></MapContainerContent>
                </div>
                <div className='vertical-dashed-line'></div>
                <Map></Map>
           </div>
        </main>
    </div>
  )
}
