'use client';
import React from 'react';

const formInputs = {
  name:{ title:'Name',type:'text', required:true },
  email:{ title:'Email',type:'email', required:true },
  age:{ title:'Age (in yrs)', type:'number', required:true },
  gender:{title:'Gender', type:'select', options:['male', 'female'], required:true},
  height:{title:'Height (in cm)', type:'number', required:true},
  weight:{title:'Weight (in kg)', type:'number', required:true},
  resting_heart_rate:{title:'Resting Heart Rate (bpm)', type:'number', required:true},
  max_heart_rate: {title:'Max Heart Rate (bpm)', type:'number', required:true},  
  q1: {title:'How many days do you workout in a week?', type:'text', required:true},
  q2:{title:'How long is your average workout session (in mins)', type:'text', required:true},
  q3: {
    title:'Do you practice meditation, pranayam or any mindful/ relaxation activity regularly?',
    type:'select',
    options:['yes', 'no'],
    required:true
  },
  q4: {
    title:'Do you presently have any chronic or acute injury?',
    type:'select',
    options:['yes', 'no'],
    required:true
  },
  q5: {
    title:'Did you recover from any chronic or acute injury in last three years?',
    type:'select',
    options:['yes', 'no'],
    required:true
  },
  q6: {
    title:'Do you have any pre-existing condition like diabetes, asthma, hypertension?',
    type:'select',
    options:['yes', 'no'],
    required:true
  },  
    q7: {
    title:'How long can you run comfortably without stopping? (approx)',
    type:'select',
    options:['5km', '10km', '15km', '20km', '25km'],
    required:true
  },
  q8:{
    title:'How long does it take you to run that distance? (in mins) ',
    type:'number',    
    required:true
  },
  q9:{
    title:'How many burpees can you do in 2 mins? ',
    type:'number',
    required:true
  },
  q10:{
    title:'For how many seconds can you do the Body balance test? (in secs). (Stand on a flat surface, close your eyes, lift your right knee up to your chest, maintain balance as long as you can)',
    type:'number',
    required:true
  },
  q11:{
    title:'How many crunches can you do in 2 mins?',
    type:'number',
    required:true
  },
  q12:{
    title:'How many pushups can you do in 2 mins?',
    type:'number',
    required:true
  },
  q13:{
    title:'How many bench dips can you do in 2 mins? ',
    type:'number',
    required: true
  },
  q14:{
    title:'How many pull ups can you do in 2 mins?',
    type:'number',
    required: true
  },
  q15:{
    title:'How many body weight squats can you do in 3 mins?',
    type:'number',
    required:true
  },
  q16:{
    title:'Do you have any formal mountaineering training? ',
    type:'number',
    required:true
  },
  q17:{
    title:'Have you experienced any Altitude related illness in the past? *',
    type:'select',
    options:['yes', 'no'],
    required:true
  },
  q18:{
    title:'Have you participated in any trek or expedition before?',
    type:'number',
    requried:true
  },
}

export const Test = () => {
  return (
    <div className="test">
      <div className="left-content">
        <div className="sectionTitle">Readiness Test</div>
        <div className="sectionDescription"> —  Tell us a bit about yourself and we&apos;ll match you with the perfect mountaineering readiness check for your goals.</div>
      </div>
      <div className="right-content">
        <form>
          {Object.entries(formInputs).map(([key, config], index) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{index + 1}. {config.title}</label>

              {config.type === 'select' ? (
                <select
                  id={key}
                  name={key}
                  required={config.required}
                  className="form-control"
                >
                  <option value="">-- Select {key} --</option>
                  {config.options.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={key}
                  name={key}
                  type={config.type}
                  required={config.required}
                  className="form-control"
                />
              )}
            </div>
          ))}

          <button type='submit' className='btn-primary'>Submit</button>
        </form>        
      </div>
    </div>
  )
}
