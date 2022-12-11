import React        from 'react';
import 'components/list.css';
import { TypeItem } from './Interface';

interface ItemOptions {
    className?: string;
    item: TypeItem;
    templateItem?: React.FC<TypeItem>;
    onClick?: (item: TypeItem) => void;
}

const Item: React.FC<ItemOptions> =
    ({
        className,
        item,
        templateItem,
        onClick
     }) => {

    const clickItemHandler = (item: TypeItem) => {
        if (onClick) {
            onClick(item);
        }
    };

    return (
        <div className={ className + ' component-list__Item'}
             onClick={clickItemHandler}
        >
            {
                templateItem
                    ? templateItem({item})
                    : item.name
            }
        </div>
    );
};

export default Item;