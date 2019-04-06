import React, { Component } from 'react'

class Input extends Component {
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        this.props.onChange(e)
    }

    render() {
        const { model, label, required, input, value, type, size, name } = this.props
        return (
            <div>
                <p className={`comment-form-${model}`}>
                    <label htmlFor={`${model}`}>{label}
                        <span className="required">{(required) ? ' * ' : ''}</span>
                    </label>
                    <input {...input}
                        onChange={this.onChange}
                        value={value}
                        type={type}
                        required={(required) ? 'required' : ''}
                        size={size}
                        name={name}
                         />
                </p>
            </div>
        )
    }
}

export default Input