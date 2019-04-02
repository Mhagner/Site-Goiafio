import React from 'react'

export default (props) => {
    return (
        <div>
            <p className={`comment-form-${props.model}`}>
                <label htmlFor={`${props.model}`}>{props.label}
                    <span className="required">{(props.required) ? ' * ' : ''}</span>
                </label>
                <input
                    type={props.type}
                    required={(props.required) ? 'required' : ''}
                    size={props.size}
                    name={props.model} />
            </p>
        </div>
    )
}