import React, { useEffect, useRef, useState } from 'react'

const Controls = ({refs,other_refs,beat_config_refs,fields,addField,removeField,updateField}) => {

        const [heart_rate, setHeart_rate] = useState("70")
        const [h_p, setH_p] = useState("0.15")
        const [b_p, setB_p] = useState("0.08")
        const [h_q, setH_q] = useState("-0.1")
        const [b_q, setB_q] = useState("0.025")
        const [h_r, setH_r] = useState("1.2")
        const [b_r, setB_r] = useState("0.05")
        const [h_s, setH_s] = useState("-0.25")
        const [b_s, setB_s] = useState("0.025")
        const [h_t, setH_t] = useState("0.2")
        const [b_t, setB_t] = useState("0.16")
        const [l_pq, setL_pq] = useState("0.08")
        const [l_st, setL_st] = useState("0.12")
        const [l_tp, setL_tp] = useState("0.3")
        const [n_p, setN_p] = useState("1")
        const [newBeatRow, setNewBeatRow] = useState(false)

        const [rWaveEnabled, setRWaveEnabled] = useState(false)
        const [rWaveCount, setRWaveCount] = useState(2)
        const [rWaveInterval, setRWaveInterval] = useState(5)

        const [pWaveEnabled, setPWaveEnabled] = useState(false)
        const [pWaveCount, setPWaveCount] = useState(0)
        const [pWaveInterval, setPWaveInterval] = useState(3)

        const [useCustomBeatParameters, setUseCustomBeatParameters] = useState(false)
        const [repeatInterval, setRepeatInterval] = useState(10)
        const [pixels_per_mv, setPIXELS_PER_MV] = useState(100)
        const [beatColumns, setBeatColumns] = useState(0);

        const inputs = [];



        
  return (
    <div className="controls">
        <div className="param-group">
            <label htmlFor="heart_rate">Heart Rate (bpm):</label>
            <input type="number" id="heart_rate" value={heart_rate}  onChange={(e)=>{setHeart_rate(e.target.value)}} ref={refs.heart_rate} step="1" min="20" max="250" />
        </div>
        <div className="param-group">
            <label htmlFor="pixelsPerMv">Pixels per mV:</label>
            <input type="number" id="pixelsPerMv" ref={other_refs.PIXELS_PER_MV} value={pixels_per_mv} onChange={(e)=>{setPIXELS_PER_MV(e.target.value)}} step="10" min="10" />
        </div>

        <h3>Wave Parameters (mV, sec)</h3>
        <div className="param-group"><label htmlFor="h_p">P Wave Height:</label><input type="number" id="h_p" ref={refs.h_p} value={h_p} onChange={(e)=>{setH_p(e.target.value)}}
                    step="0.01"/></div>
            <div className="param-group"><label htmlFor="b_p">P Wave Breadth:</label><input type="number" id="b_p" value={b_p} ref={refs.b_p} onChange={(e)=>{setB_p(e.target.value)}}
                    step="0.01"/></div>
            <div className="param-group"><label htmlFor="h_q">Q Wave Height:</label><input type="number" id="h_q" value={h_q} ref={refs.h_q} onChange={(e)=>{setH_q(e.target.value)}}
                    step="0.01"/></div>
            <div className="param-group"><label htmlFor="b_q">Q Wave Breadth:</label><input type="number" id="b_q" value={b_q} ref={refs.b_q} onChange={(e)=>{setB_q(e.target.value)}}
                    step="0.005"/></div>
            <div className="param-group"><label htmlFor="h_r">R Wave Height:</label><input type="number" id="h_r" value={h_r} ref={refs.h_r} onChange={(e)=>{setH_r(e.target.value)}}
                    step="0.1"/></div>
            <div className="param-group"><label htmlFor="b_r">R Wave Breadth:</label><input type="number" id="b_r" value={b_r} ref={refs.b_r} onChange={(e)=>{setB_r(e.target.value)}}
                    step="0.01"/></div>
            <div className="param-group"><label htmlFor="h_s">S Wave Height:</label><input type="number" id="h_s" value={h_s} ref={refs.h_s} onChange={(e)=>{setH_s(e.target.value)}}
                    step="0.01"/></div>
            <div className="param-group"><label htmlFor="b_s">S Wave Breadth:</label><input type="number" id="b_s" value={b_s} ref={refs.b_s} onChange={(e)=>{setB_s(e.target.value)}}
                    step="0.005"/></div>
            <div className="param-group"><label htmlFor="h_t">T Wave Height:</label><input type="number" id="h_t" value={h_t} ref={refs.h_t} onChange={(e)=>{setH_t(e.target.value)}}
                    step="0.01"/></div>
            <div className="param-group"><label htmlFor="b_t">T Wave Breadth:</label><input type="number" id="b_t" ref={refs.b_t} value={b_t} onChange={(e)=>{setB_t(e.target.value)}}
                    step="0.01"/></div>
            <div className="param-group"><label htmlFor="l_pq">PQ Segment Length:</label><input type="number" id="l_pq" ref={refs.l_pq}
                    value={l_pq} onChange={(e)=>{setL_pq(e.target.value)}} step="0.01"/></div>
            <div className="param-group"><label htmlFor="l_st">ST Segment Length:</label><input type="number" id="l_st"
                    value={l_st} step="0.01" ref={refs.l_st} onChange={(e)=>{setL_st(e.target.value)}}/></div>
            <div className="param-group"><label htmlFor="l_tp">TP Segment Length:</label><input type="number" id="l_tp" ref={refs.l_tp} 
                    value={l_tp} onChange={(e)=>{setL_tp(e.target.value)}} step="0.01"/></div>
            <div className="param-group"><label htmlFor="n_p">Default P Waves per QRS:</label><input type="number" id="n_p" ref={refs.n_p}
                    value={n_p} onChange={(e)=>{setN_p(e.target.value)}} step="1"/></div>

            <h3>Dynamic R Wave Pattern</h3>
            <div className="param-group"><label><input type="checkbox" id="rWaveEnabled" value={rWaveEnabled} onChange={(e)=>{setRWaveEnabled
                (e.target.value)
            }} ref={other_refs.rWaveEnabled} /> Enable R Wave Pattern</label>
            </div>
            
            <div className="param-group"><label htmlFor="rWaveCount">R Waves in Pattern:</label><input type="number"
                    id="rWaveCount" value={rWaveCount} onChange={(e)=>{setRWaveCount(e.target.value)}} ref={other_refs.rWaveCount}  step="1" min="0"/></div>
            <div className="param-group"><label htmlFor="rWaveInterval">Apply After N QRS:</label><input ref={other_refs.rWaveInterval} type="number"
                    id="rWaveInterval" value={rWaveInterval} onChange={(e)=>{setRWaveInterval(e.target.value)}} step="1" min="0"/></div>

            <h3>Dynamic P Wave Pattern</h3>
            <div className="param-group"><label><input type="checkbox" id="pWaveEnabled" ref={other_refs.pWaveEnabled} value={pWaveEnabled} onChange={(e)=>{setPWaveEnabled(e.target.value)}} /> Enable P Wave Pattern</label>
            </div>
            <div className="param-group"><label htmlFor="pWaveCount">P Waves in Pattern:</label><input type="number"
                    id="pWaveCount" ref={other_refs.pWaveCount} value={pWaveCount} onChange={(e)=>{setPWaveCount(e.target.value)}} step="1" min="0"/></div>
            <div className="param-group"><label htmlFor="pWaveInterval">Apply After N QRS:</label><input type="number"
                    id="pWaveInterval" ref={other_refs.pWaveInterval} value={pWaveInterval} onChange={(e)=>{setPWaveInterval(e.target.value)}} step="1" min="0"/></div>

            <h3>Custom Beat Sequence</h3>
            <div className="param-group"><label><input type="checkbox" ref={other_refs.useCustomBeatParameters} id="useCustomBeatParameters" value={useCustomBeatParameters} onChange={(e)=>{setUseCustomBeatParameters(e.target.value)}} /> Enable Custom Beat
                    Sequence</label></div>
            <div className="param-group"><label htmlFor="repeatInterval">Normal Beats BehtmlFore Repeat:</label><input type="number"
                    id="repeatInterval" ref={other_refs.repeatInterval} value={repeatInterval} onChange={(e)=>{setRepeatInterval(e.target.value)}} step="1" min="0"/></div>
                    <div className="" ref={beat_config_refs.columns}>
                        {
                                fields.map((field,idx)=>(
                                        <div id="customBeatsContainer" key={idx} ref={beat_config_refs.beat_row} style={{display:'flex',flexDirection:'column',border: '1px solid #a7a7a7ff',padding: '5px'}}>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>P Height :</label><input type='number'value={field.h_p} onChange={(e) => {updateField(idx,'h_p',e.target.value)}} step="0.01" ></input> 
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>Q Height :</label><input type='number' value={field.h_q} onChange={(e) => {updateField(idx,'h_q',e.target.value)}}  step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>R Height :</label><input type='number' value={field.h_r} onChange={(e) => {updateField(idx,'h_r',e.target.value)}}  step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>S Height :</label><input type='number' value={field.h_s} onChange={(e) => {updateField(idx,'h_s',e.target.value)}}  step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>T Height :</label><input type='number' value={field.h_t} onChange={(e) => {updateField(idx,'h_t',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>P Breadth :</label><input type='number' value={field.b_p} onChange={(e) => {updateField(idx,'b_p',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>Q Breadth :</label><input type='number' value={field.b_q} onChange={(e) => {updateField(idx,'b_q',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>R Breadth :</label><input type='number' value={field.b_r} onChange={(e) => {updateField(idx,'b_r',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>S Breadth :</label><input type='number' value={field.b_s} onChange={(e) => {updateField(idx,'b_s',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>T Breadth :</label><input type='number' value={field.b_t} onChange={(e) => {updateField(idx,'b_t',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>PQ Length :</label><input type='number' value={field.l_pq} onChange={(e) => {updateField(idx,'l_pq',e.target.value)}}  step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>ST Length :</label><input type='number'value={field.l_st} onChange={(e) => {updateField(idx,'l_st',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <div className='newColumnwrapper' style={{display:'flex',alignItems: 'center',gap: '6px',marginBottom: '4px',}}><label>TP Length :</label><input type='number' value={field.l_tp} onChange={(e) => {updateField(idx,'l_tp',e.target.value)}} step="0.01" ></input>
                                              </div>
                                              <button style={{marginTop:"5px",width:"10rem",backgroundColor:"#e74c3c",color:"white",border:"none",padding:"4px 8px",cursor:"pointer",}} onClick={()=>{removeField(idx)}}>Remove Beat</button>
                                        </div>))
                                                }
                    </div>



            <button id="addCustomBeatBtn" onClick={()=>{addField()}}>+ Add Custom Beat</button>

            <button id="applyBtn" ref={refs.submit} >Apply Changes</button>

    </div>

  )
}

export default Controls