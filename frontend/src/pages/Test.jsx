import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStreams } from '../actions/streams.js';

export default function Test() {
    const dispatch = useDispatch();
    const streams = useSelector((state) => state.streams);
    const [shownStreams, setShownStreams] = useState([]);

    useEffect(() => {
        dispatch(getStreams());
    }, [dispatch]);

    useEffect(() => {
        const streamSelection = Object.values(streams).filter(stream => stream.streamLink);
        setShownStreams(streamSelection);
    }, [streams]);

    return (
        <div>
            <h1>streams</h1>
            <ul>
                {shownStreams.map(stream => (
                    <li key={stream.id}>
                        <a href={stream.streamLink}>{stream.title} {stream.gameCategory}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
