import React from 'react';

const SectionTitle = ({Heading, subHeading, colorText}) => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-4xl font-semibold'>{Heading} <span className='text-color1'>{colorText}</span></h1>
            <h3 className='text-xl mt-3'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;