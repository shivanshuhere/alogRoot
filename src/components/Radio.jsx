import React from 'react'
import "../styles/Radio.css"
function Radio({ heading, setSort }) {
    return (
        <div className='radio-container'>
            <div className="radio-input">
                <span className='label'>{heading}</span>
                <label className="label">
                    <input type="radio" id="value-1" name="value-radio" value="Ascending" onClick={() => setSort('asc')} />
                    <p className="text">Ascending</p>
                </label>
                <label className="label">
                    <input type="radio" id="value-2" name="value-radio" value="descending" onClick={() => setSort('desc')} />
                    <p className="text">Descending</p>
                </label>

            </div>

        </div>
    )
}

export default Radio