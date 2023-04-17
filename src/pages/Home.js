import React from 'react';
import Type from '../components/Typewriter';
import '../dist/output.css'

function Home() {
    return (
        <div>
            <h1>Malia Yraguen</h1>
            <div>
                <Type />
            </div>

            <div>
                <button href="#About">Learn More</button>
            </div>
        </div>
    )
};

export default Home;