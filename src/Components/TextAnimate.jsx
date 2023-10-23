import { useState } from 'react';
import './textanimate.css'
import ColorBar from './colorbar';

function TextAnimate() {

    const [name, setName] = useState('Jawad')
    const [color, setColor] = useState('#00ff73')

    const hundleColor = (e)=> {
        setColor(e.target.id)
    }

    return ( 
        <section className='mainArea'>
            <header style={{background: color}}>
                Dori Codes
            </header>
            <main>
                <input type="text"
                    autoFocus
                    placeholder='Type your name'
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="text">
                    <h2 className='outer'>{name}</h2>
                    <h2 className="inner" style={{color: color, borderColor: color}}>{name}</h2>
                </div>
            </main>

            <ColorBar
                color = {color}
                hundleColor = {hundleColor}
            />
        </section>
     );
}

export default TextAnimate;