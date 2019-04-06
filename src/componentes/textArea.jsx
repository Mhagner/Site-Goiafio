import React, { Component } from 'react'

class TextArea extends Component {
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        this.props.onChange(e)
    }

    render() {
        const { model, label, textarea, value, required, row, cols, name } = this.props
        return (
            <div>
                <p className={`comment-form-${model}`}>
                    <label htmlFor={model}>{label}
                        <span className="required">{(required) ? ' * ' : ''}</span>
                    </label>
                    <textarea {...textarea}
                        value={value}
                        onChange={this.onChange}
                        required={(required) ? 'required' : ''}
                        aria-required={required}
                        rows={row}
                        cols={cols}
                        name={name}
                    >
                    </textarea>
                </p>
            </div >
        )
    }
}

export default TextArea
