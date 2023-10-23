import './textanimate.css'

function ColorBar({hundleColor}) {
    return ( 
        <nav className='color_links'>
            <div className="purple" id='#7000df' onClick={hundleColor}></div>
            <div className="pink" id='#df0052' onClick={hundleColor}></div>
            <div className="orange" id='#ff8400' onClick={hundleColor}></div>
            <div className="default" id='#00ff73' onClick={hundleColor}></div>
        </nav>
     );
}

export default ColorBar;