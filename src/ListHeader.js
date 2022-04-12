import { memo } from 'react';

import { randomColor } from './List';

const ListHeader = ({ checkedItemsLength, onShuffle }) => {
    const background = randomColor();
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
