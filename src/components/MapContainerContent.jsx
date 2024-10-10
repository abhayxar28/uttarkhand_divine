import React from 'react';
import { Typography } from '@mui/material';
import { markers } from './marker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Divider from '@mui/material/Divider';

export default function MapContainerContent() {
    return (
        <div>
            <div style={{ background: 'black', color: 'white', height: 40, padding: 20, display: 'flex', alignItems: 'center' }}>
                <Typography variant={'h6'} fontWeight={800} fontSize={20}>
                    Divine destinations
                </Typography>
            </div>
            {markers.map((marker) => (
                <div key={marker.id}>
                    <div className='mapText'>
                        <div className='mapTextDiv' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography
                                variant={'h6'}
                                fontWeight={'bolder'}
                                fontSize={20}
                            >
                                {marker.popUp.place}
                            </Typography>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                        <div className='mapsubtitle'>
                            <Typography variant={'subtitle2'}>
                                {marker.popUp.subtitle}....
                            </Typography>
                        </div>
                        <div className='divider-div'>
                            <Divider variant="middle" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
