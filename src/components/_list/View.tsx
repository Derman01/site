import React, { useState } from 'react';
import 'components/list.css';
import {default as Item}   from './Item';
import { TypeItem }        from './Interface';

export interface ListOptions {
    source: TypeItem[];
    filter?: object;
    style?: 'master' | 'list';
    keyProperty?: string;
    className?: string;
    minWidth?: number;
    canSelected?: boolean;
    autoSelected?: boolean;
    markerVisible?: boolean;
    templateItem?: React.FC<TypeItem>;
    selectedChanged?: (item: TypeItem) => void;
}

const View = (
    {
        className,
        style = 'list',
        minWidth = 200,
        source,
        keyProperty = 'id',
        selectedChanged,
        canSelected = true,
        markerVisible = true,
        autoSelected = true,
        templateItem
    }: ListOptions) => {


    const [selectedKey, setSelectedKey] = useState(autoSelected
        ? source.at(0)?.[keyProperty] || null
        : null);

    const clickItemHandler = (item: TypeItem) => () => {
        const key = item[keyProperty];
        setSelectedKey(key);
        if (selectedChanged) {
            selectedChanged(item);
        }
    }

    const getClassName = (item: TypeItem): string => {
        const classNames = ['component-list__View_item', 'component-list__View_item-' + style];
        if (selectedKey === (item[keyProperty] || item.get(keyProperty)) && canSelected) {
            classNames.push('component-list__View_item-selected');
            if (markerVisible) {
                classNames.push('component-list__View_item-marker')
            }
        }
        return classNames.join(' ');
    }

    return (
        <div className={className + ' component-list__View '}
             style={{minWidth: minWidth + 'px'}}
        >
            {
                source.length
                    ? source.map((item) =>
                        <Item key={item[keyProperty] || item.get(keyProperty)}
                              item={item}
                              templateItem={templateItem}
                              className={getClassName(item)}
                              onClick={clickItemHandler(item)}
                        />
                    )
                    : <div>Пусто</div>
            }
        </div>
    );
}

export default View;
