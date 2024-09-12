import React from 'react'
import {Typography, Button} from '@mui/material';
import {Popup, Marker} from 'react-leaflet';
import {markers} from './marker';
export default function PopUpCard() {    
  return ( 
    <div>
        {markers.map((marker)=>{
            return <Marker position={marker.geocode}>
                     <Popup className="custom-popup">
                        <div style={{minWidth: '360px', minHeight: '480px',  padding:'20px'}}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', cursor: 'text' }}>
                                <Typography variant="h5" style={{fontWeight: 900}}>{marker.popUp.place}</Typography>
                            </div>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={marker.popUp.image} style={{ minWidth: '400px', height: 'auto', borderRadius: 20 }}/>
                            </div>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'center', cursor: 'text'}}>
                                <p className='subtitle'>{marker.popUp.subtitle}</p>
                            </div>
                            <br />
                            <div style={{display: 'flex', gap: 8}}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,minWidth:180, height: 30, background: '#00B558', borderRadius: 5, fontSize: 14 , cursor: 'text'}}>
                                    <strong>{`Elevation-${marker.altitude}m`}</strong>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,minWidth:180, height: 30, background: '#FFD401', borderRadius: 5, fontSize: 14, color: 'black', cursor: 'text'}}>
                                    <strong>{`District-${marker.district}`}</strong>
                                </div>
                            </div>
                        </div>
                     </Popup> 
                </Marker>
            })
        }
    </div>
  )
}


