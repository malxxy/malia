import React from 'react';
import Typewriter from 'typewriter-effect';
import '../dist/output.css'

function Type() {
    return (
        <Typewriter
            options={{
                strings: ['Fullstack Developer.', 'Project Manager.','Content Creator.'],
                autoStart: true,
                loop: true,
            }}
        />
    );
}

export default Type;