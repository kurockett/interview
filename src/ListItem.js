import { useMemo } from 'react';
import { randomColor } from './List';

const ListItem = ({ item: { id, value }, checkedIds, onCheck }) => {
    const includesId = useMemo(() => checkedIds.includes(id), [checkedIds, id]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const background = useMemo(() => `#${randomColor()}`, [includesId]);

    const handleChange = ({ target: { checked } }) => onCheck(checked, id);

    return (
        <div style={{ userSelect: 'none', background }}>
            <input
                id={id}
                type='checkbox'
                checked={includesId}
                onChange={handleChange}
            />
            <label htmlFor={id}>
                {value}; renderID: {background}
            </label>
        </div>
    );
};

export default ListItem;
