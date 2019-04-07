import React from 'react'

export default (props) => {
    return (
        <div>
            <p className="form-submit">
                <button type="submit" className="mu-post-btn" name="submit">
                    {props.name}
                </button>

            </p>
        </div>
    )
}