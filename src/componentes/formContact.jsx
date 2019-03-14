import React from 'react'

export default (props) => {
    return (
        <div className="col-md-6">
            <div className="mu-contact-left">
                <form className="contactform">
                    <p className="comment-form-author">
                        <label htmlFor="author">Name <span className="required">*</span></label>
                        <input type="text" required="required" size="30" name="author" />
                    </p>
                    <p className="comment-form-email">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" required="required" aria-required="true" name="email" />
                    </p>
                    <p className="comment-form-url">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" />
                    </p>
                    <p className="comment-form-comment">
                        <label htmlFor="comment">Message</label>
                        <textarea required="required" aria-required="true" rows="8" cols="45" name="comment"></textarea>
                    </p>
                    <p className="form-submit">
                        <input type="submit" value="Send Message" className="mu-post-btn" name="submit" />
                    </p>
                </form>
            </div>
        </div>
    )
}