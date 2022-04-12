import { memo, useMemo } from 'react';

import { randomColor } from './List';

const ListHeader = ({ checkedItemsLength, onShuffle }) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const background = useMemo(() => randomColor(), [checkedItemsLength]);
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
