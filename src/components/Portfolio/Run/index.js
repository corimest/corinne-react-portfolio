import React from 'react'; 
import photo from '../../../assets/projects/runbuddy_pic.png';

function Run() {

    return (
        <section>
            <h1>Run Buddy</h1>
            <p>A website that offers fitness training services.</p>
        <div>
            <h2>Repo Link</h2>
                <p>https://github.com/corimest/run-buddy</p>
            <h2>Deployed Link</h2>
            <p>https://corimest.github.io/run-buddy/</p>
        </div>
        <img src={photo} style={{ width: '50%' }} alt='Run Buddy homepage picture'/>
        </section>
    )
}

export default Run; 