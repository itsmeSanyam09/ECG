import React, { useEffect, useRef, useState } from 'react'
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
    submit : useRef(null),
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
    columns : useRef(null),
    
  }
  const [fields, setFields] = useState([

  ])
  const addField = () => {
    setFields([
      ...fields,
      {
        h_p : "0.15",
        b_p : "0.08",
        h_q : "-0.08",
        b_q : "0.025",
        h_r : "1.2",
        b_r : "0.05",
        h_s: "-0.25",
        b_s : "0.025",
        h_t : "0.2",
        b_t : "0.16",
        l_pq : "0.08",
        l_st : "0.12",
        l_tp : "0.3"

      }
    ]);
  };
const updateField = (index, key, value) => {
  setFields((prevFields) => {
    const newFields = [...prevFields];
    newFields[index] = {
      ...newFields[index],
      [key]: value // or parseFloat(value) if you want numbers
    };
    return newFields;
  });
};

  const removeField = (indexToRemove) => {
    setFields((prevFields) =>
      prevFields.filter((_, idx) => idx !== indexToRemove)
    );
  };


  return (
    <>
    <h1>ECG Waveform Animator (Custom Beats)</h1>
    <div className='container'>
      <Controls refs={refs} other_refs={other_refs} beat_config_refs={beat_config_refs} fields={fields} addField={addField} updateField={updateField} removeField={removeField} />
      <Canvascontainer refs={refs} other_refs={other_refs} beat_config_refs={beat_config_refs} fields={fields} />
    </div>
    </>
  )
}

export default App