import React from 'react'

function Personal() {
    return (
        <div>
            <form>
                <label className='fName'>Förnamn:</label><br/>
                <input id='fName' type="text" className='fName'></input><br/>

                <label className='lName'>Efternamn:</label><br/>
                <input id='lName' type="text" className='lfName'></input><br/>

                <label className='mail'>Mail:</label><br/>
                <input id='email' type="email" className='mail'></input><br/>
                
                <label id='bKonto' className='bKonto'>Bankkonto:</label><br/>
                <input id='bKonto' type="number" className='bKonto'></input><br/>

                <button className='submitBtn' id='submitBtn'>Submit</button>
            </form>
        </div>
    )
}

export default Personal