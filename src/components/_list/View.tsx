import React, { useEffect, useState } from 'react';
import 'components/list.css';
import item, {default as Item} from './Item';
import { TypeItem }            from './Interface';
import { Server }          from 'hooks/useServer';

export interface ListOptions {
    source: Server<any>;
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
    dataLoadCallback?: (items: TypeItem) => void;
}

interface SourceState {
    loading: boolean;
    errors: string | null;
    items: TypeItem[]
}

const View = (
    {
        className,
        style = 'list',
        minWidth = 200,
        source,
        filter,
        keyProperty = 'id',
        selectedChanged,
        canSelected = true,
        markerVisible = true,
        autoSelected = true,
        templateItem,
        dataLoadCallback
    }: ListOptions) => {

    const [selectedKey, setSelectedKey] = useState(null);

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        source.query({filter}).then((items) => {
            if (dataLoadCallback) {
                dataLoadCallback(items)
            }
            setItems(items as []);
            setLoading(false);
            if (autoSelected) {
                setSelectedKey((items as []).at(0)?.[keyProperty] || null);
            }
        });
    }, [filter]);

    const clickItemHandler = (item: TypeItem) => () => {
        const key = item[keyProperty];
        setSelectedKey(key);
        if (selectedChanged) {
            selectedChanged(item);
        }
    }

    const getClassName = (item: TypeItem): string => {
        const classNames = ['component-list__View_item', 'component-list__View_item-' + style];
        if (selectedKey === item[keyProperty] && canSelected) {
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
                loading ? <div>Loading...</div>
                    : items.length
                        ?items.map((item) =>
                            <Item key={item[keyProperty]}
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
