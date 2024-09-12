import React from 'react'

export default function VideoPage() {
  return (
    <div style={{marginTop: 80}}>
        <div className='video-card'>
            <video autoPlay muted loop>
                <source src="video1.mp4" />
            </video>
        </div>
    </div>
  )
}
