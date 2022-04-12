<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useCallback } from 'react';
>>>>>>> 7929454 (first)

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
<<<<<<< HEAD

=======
>>>>>>> 7929454 (first)
    return array;
};

export const randomColor = () =>
    Math.floor(Math.random() * 16777215).toString(16);

const List = () => {
    const [list, setList] = useState(initialList);
    const [checkedIds, setChecked] = useState([]);

<<<<<<< HEAD
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
=======
    const handleShuffle = useCallback(() => {
        setList((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, []);

    const handleCheck = useCallback((checked, id) => {
        setChecked((prev) =>
            checked
                ? [...prev, id]
                : prev.filter((checkedId) => checkedId !== id)
        );
    }, []);
>>>>>>> 7929454 (first)

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
<<<<<<< HEAD
                    checkedIds={checkedIds}
                    onCheck={handleCheck}
=======
                    onCheck={handleCheck}
                    checked={checkedIds.includes(item.id)}
>>>>>>> 7929454 (first)
                />
            ))}
        </>
    );
};

export default List;
