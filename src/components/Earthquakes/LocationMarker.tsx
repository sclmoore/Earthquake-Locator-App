import {Icon} from '@iconify/react'
import { Modal } from '@mantine/core';
import { useState } from 'react';
import { setInfo } from '../../features/info/infoSlice';
import { useAppDispatch } from '../../app/hooks'

export default function LocationMarker(props:any) {
    const [opened, setOpened] = useState(false);
    const dispatch = useAppDispatch()

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Earthquake Info"
            >
                <h3>Title :</h3>{props.info.title}<br/>
                <h3>Place :</h3>{props.info.place}<br/>
                <h3>Magnitude</h3>{props.info.mag}<br/>
            </Modal>
                
            <div className='location-marker'>
                <Icon icon={'wi:earthquake'} className='location-icon' onClick={() => { dispatch(setInfo({title:props.info.title, place:props.info.place, mag:props.info.mag}))}}/>
            </div>
        </>
    )
}