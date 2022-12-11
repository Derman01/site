import React from 'react';

interface ViewOptions {
    src?: string;
    id: string;
    name: string;
    surname: string;
}

const FacePhoto: React.FC<ViewOptions> = () => {
    return (
        <div></div>
    );
}


const View: React.FC<ViewOptions> =
    ({
        id,
        src,
        name,
        surname
     }) => {
    return (
        <div className={'component-photo__View'}>
            {
                src
                    ? <img src={src} alt=""/>
                    : <div></div>
            }
        </div>
    );
};

export default View;