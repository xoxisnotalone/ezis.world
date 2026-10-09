import React from 'react';
import {createRoot} from 'react-dom/client';
import RippleDistortion from './RippleDistortion.jsx';
import './style.css';
function App(){return <main><header><span>20.09.2026</span><span>06:13 — EARTH</span></header><section className="center"><div className="name"><RippleDistortion src="/ezis-name.png" trigger="both" brushSize={135} strength={0.14} swirl={0.35} rings={3} spread={4} fade={2.4} spacing={12} dispersion={0} glint={0} tintAmount={0} grayscale={false} quality="medium" /></div><div className="subtitle">Entering the World</div><p className="message">The world,<br/>slightly rearranged.</p></section><footer><span>GUNST VAN DAELE</span><span>A NEW PRESENCE<br/>EST. 2026</span></footer></main>};
createRoot(document.getElementById('root')).render(<App/>);
