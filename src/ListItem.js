<<<<<<< HEAD
import { useMemo } from 'react';
import { randomColor } from './List';

const ListItem = ({ item: { id, value }, checkedIds, onCheck }) => {
    const includesId = useMemo(() => checkedIds.includes(id), [checkedIds, id]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const background = useMemo(() => `#${randomColor()}`, [includesId]);

=======
import { memo } from 'react';
import { randomColor } from './List';

const ListItem = ({ item: { id, value }, checked, onCheck }) => {
    const background = `#${randomColor()}`;
>>>>>>> 7929454 (first)
    const handleChange = ({ target: { checked } }) => onCheck(checked, id);

    return (
        <div style={{ userSelect: 'none', background }}>
            <input
                id={id}
                type='checkbox'
<<<<<<< HEAD
                checked={includesId}
=======
                checked={checked}
>>>>>>> 7929454 (first)
                onChange={handleChange}
            />
            <label htmlFor={id}>
                {value}; renderID: {background}
            </label>
        </div>
    );
};

<<<<<<< HEAD
export default ListItem;
=======
export default memo(ListItem);
>>>>>>> 7929454 (first)
