import React from 'react';

const Loading = () => {
    return(
        <div className="row text-center animated fadeIn">
            <div className="col">
                <i className="fas fa-redo-alt fa-spin fa-5x"></i>
            </div>
        </div>
    );
};

export default Loading;