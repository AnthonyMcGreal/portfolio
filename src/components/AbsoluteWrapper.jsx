import React from 'react';

const AbsoluteWrapper = ({children}) => {
    return (
        <div className="absoluteComponent">
            {children}
        </div>
    );
};

export default AbsoluteWrapper;