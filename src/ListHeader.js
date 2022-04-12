<<<<<<< HEAD
import { memo, useMemo } from 'react';
=======
import { memo } from 'react';
>>>>>>> 7929454 (first)

import { randomColor } from './List';

const ListHeader = ({ checkedItemsLength, onShuffle }) => {
<<<<<<< HEAD
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const background = useMemo(() => randomColor(), [checkedItemsLength]);
=======
    const background = randomColor();
>>>>>>> 7929454 (first)
    return (
        <>
            <div style={{ background: `#${background}` }}>
                Checked: {checkedItemsLength}; renderID: {background}
            </div>
            <div>
                <button onClick={onShuffle}>Shuffle</button>
            </div>
        </>
    );
};

export default memo(ListHeader);
