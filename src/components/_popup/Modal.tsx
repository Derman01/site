import React from 'react';
import Store from 'hooks/useStore';
import 'components/popup.css';

interface ITemplate {
    close: () => void;
    [name: string]: any;
}

interface IModal {
    id?: number;
    Template: React.FC<ITemplate | any>;
    templateOptions?: object;
}

const Modal: React.FC<IModal> = (
    {
        id,
        Template,
        templateOptions
    }) => {

    const close = () => {
        Store.call('CLOSE_POPUP', id);
    };

    return (
        <div className={'component-popup__Modal'}>
            <div className="component-popup__Modal_Template"
                 onClick={(e) => e.preventDefault()}>
                <Template close={close} {...templateOptions}/>
                <button className={'component-popup__Modal_close'}
                        onClick={close}
                >Закрыть</button>
            </div>
        </div>
    );
};

const getId = (() => {
    let id = 0;
    return (): number => {
        return id++;
    }
})()

export const ModalOpen = (props: IModal) => {
    const id = getId();
    Store.call('OPEN_POPUP', {
        id,
        popup: <Modal id={id}
                      Template={props.Template}
                      templateOptions={props.templateOptions}/>
    })
};

export default Modal;