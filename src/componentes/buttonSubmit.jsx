import React from 'react'

export default (props) => {
    return (
        <div>
            <p className="form-submit">
                <input type="submit" value={props.name} className="mu-post-btn" name="submit" />
            </p>
        </div>
    )
}