import React, { useRef } from 'react'
import Controls from './pages/Controls'
import Canvascontainer from './pages/Canvascontainer'
import './index.css'

const App = () => {
  
  const refs = {
    heart_rate : useRef(null),
    h_p : useRef(null),
    b_p : useRef(null),
    h_q : useRef(null),
    b_q : useRef(null),
    h_r : useRef(null),
    b_r : useRef(null),
    h_s: useRef(null),
    b_s : useRef(null),
    h_t : useRef(null),
    b_t : useRef(null),
    l_pq : useRef(null),
    l_st : useRef(null),
    l_tp : useRef(null),
    n_p : useRef(null),
  }
  const other_refs = {
    rWaveEnabled : useRef(null),
    rWaveCount : useRef(null),
    rWaveInterval: useRef(null),
    pWaveEnabled : useRef(null),
    pWaveInterval : useRef(null),
    pWaveCount : useRef(null),
    repeatInterval : useRef(null),
    useCustomBeatParameters : useRef(false),
    PIXELS_PER_MV : useRef(null),
    submit : useRef(null),

  }
  const beat_config_refs = {
    beat_row : useRef(null),
    heart_rate : useRef(null),
    h_p : useRef(null),
    b_p : useRef(null),
    h_q : useRef(null),
    b_q : useRef(null),
    h_r : useRef(null),
    b_r : useRef(null),
    h_s: useRef(null),
    b_s : useRef(null),
    h_t : useRef(null),
    b_t : useRef(null),
    l_pq : useRef(null),
    l_st : useRef(null),
    l_tp : useRef(null),
    n_p : useRef(null),
    
  }

  return (
    <>
    <h1>ECG Waveform Animator (Custom Beats)</h1>
    <div className='container'>
      <Controls refs={refs} other_refs={other_refs} beat_config_refs={beat_config_refs} />
      <Canvascontainer refs={refs} other_refs={other_refs} beat_config_refs={beat_config_refs} />
    </div>
    </>
  )
}

export default App