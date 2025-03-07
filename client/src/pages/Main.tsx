import { useState } from 'react';
import "../styles/styles.css";

function Avatar() {
    return (
      <div className="avatar" style={{ backgroundColor: 'grey' }}> <span className="avatar-title">Avatar</span></div>
    );
}

const Main = () => {
    const [background, setBackground] = useState('white');

    return (
        <div className='defaultScreen' style={{ backgroundColor: background }}>
            <Avatar />
            <div className='controls'>
                <button onClick={() => setBackground('red')} style={{ backgroundColor: 'red' }}></button>
                <button onClick={() => setBackground('blue')} style={{ backgroundColor: 'blue' }}></button>
                <button onClick={() => setBackground('green')} style={{ backgroundColor: 'green' }}></button>
                <input type='color' onChange={(e) => setBackground(e.target.value)} />
                <button onClick={() => setBackground('white')}>Reset</button>
            </div>
        </div>
    );
}

export default Main;
