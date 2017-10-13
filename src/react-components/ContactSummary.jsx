import React from 'react';
import {Link} from 'react-router';

const ContactSummary = ({contactSummary, title, id}) => (

     <section className="section">
            <div className="content column is-10">
            <div className="article-box">
        <h1 className="title">
                <Link to={`${id}&${about || false}`}>
                    {title}
                </Link>
        </h1>
            <article>
                <p>{postSummary}</p>
            </article>
        </div>
        </div>
    </section>
)

export default ContactSummary