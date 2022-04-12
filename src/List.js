import { useState } from 'react';

import ListHeader from './ListHeader';
import ListItem from './ListItem';

const initialList = Array.from([1, 2, 3, 4, 5, 6], (value) => ({
    id: value * +new Date(),
    value,
}));

const shuffleArray = (array) => {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

export const randomColor = () =>
    Math.floor(Math.random() * 16777215).toString(16);

const List = () => {
    const [list, setList] = useState(initialList);
    const [checkedIds, setChecked] = useState([]);

    const handleShuffle = () => {
        setList((prev) => shuffleArray([...prev]));
    };

    const handleCheck = (checked, id) => {
        setChecked(() =>
            checked
                ? [...checkedIds, id]
                : checkedIds.filter((checkedId) => checkedId !== id)
        );
    };

    return (
        <>
            <ListHeader
                checkedItemsLength={checkedIds.length}
                onShuffle={handleShuffle}
            />
            {list.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    checkedIds={checkedIds}
                    onCheck={handleCheck}
                />
            ))}
        </>
    );
};

export default List;
