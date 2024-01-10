import { memo } from "react";
function Content({ count }) {
    console.log('rerender');
    return (
        <h2>Hello hihi{count}</h2>
    )
}
export default memo(Content)