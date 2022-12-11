import React, { useEffect, useState } from 'react';

interface Template {
    library: string;
    component: string;
}

interface IAsync {
    template: Template;
    className?: string;
}

const Loading = () => {
    return (
        <div>Loading...</div>
    );
}


const Async: React.FC<IAsync> = ({template, className}) => {

    const [component, setComponent] = useState(<Loading/>);

    useEffect(() => {
        import(`../${template.library}`).then((library) => {
            const Component = library.default[template.component] as React.FC;
            // @ts-ignore
            setComponent(<Component className={className}/>);
        });
    }, []);

    return (
        component
    )
}

export default Async;