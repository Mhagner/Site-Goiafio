import React from 'react'

export default (props) => {
    return (
        <div>
            <p className={`comment-form-${props.model}`}>
                <label htmlFor={props.model}>{props.label}</label>
                <textarea
                    required={(props.required) ? 'required' : ''}
                    aria-required={props.required}
                    rows={props.row}
                    cols={props.cols}
                    name={props.model}>
                </textarea>
            </p>
        </div>
    )
}