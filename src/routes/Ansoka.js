import React from 'react'
import '../css/Ansoka.css'

function Ansoka() {
  return (
        <div>
            <form>
                <label className='fName'>Förnamn:</label><br/>
                <input type="text" className='fName'></input><br/>

                <label className='lName'>Efternamn:</label><br/>
                <input type="text" className='lfName'></input><br/>

                <label className='mail'>Mail:</label><br/>
                <input type="email" className='mail'></input><br/>
                
                <label className='utb'>Utbildning:</label><br/>
                <select name='utbildningar' id='utbildningar'>
                  <option className='options'>Mama</option>
                  <option>Web</option>
                  <option>kock</option>
                </select>
            </form>
        </div>
  )
}

export default Ansoka
