import React from 'react';

const Title = ({text,align}) => (
    <h1 className={`title ${align}`}>
        {text}
    </h1>
)

export default Title