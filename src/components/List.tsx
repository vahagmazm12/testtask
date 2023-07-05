import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Button from './Button';
import ListItem from './ListItem';
import { useTransition, animated } from 'react-spring';
import { addListItem, removeListItem } from '../feature/list/listSlice';

const List: React.FC = () => {
    const dispatch = useDispatch();
    const list = useSelector((state: RootState) => state.list.items);

    const handleAddClick = () => {
        const color = getRandomColor();
        dispatch(addListItem(color));
    };

    const handleRemoveClick = () => {
        dispatch(removeListItem());
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const transitions = useTransition(list, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
    });

    return (
        <div>
            <div>
                <Button text="Добавить" onClick={handleAddClick} />
                <Button text="Удалить" onClick={handleRemoveClick} />
            </div>
            <ul style={{ position: "relative" }} className="List">
                {transitions((style, item, t, index) => (
                    <animated.li
                        style={{
                            ...style,
                            position: 'absolute',
                            top: 0,
                            left: `${index * 20}%`,
                            width: '20%',
                            transform: style.transform.to((x: string) => `${x} translateX(${index * 20}%)`),
                            listStyle: 'none',
                            transition: "left ease-in-out .1s"

                        }}
                        key={item.id}
                        className="ListItem"
                    >
                        <ListItem color={item.color} />
                    </animated.li>
                ))}
            </ul>
        </div>
    );
};

export default List;
