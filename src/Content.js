import { useEffect, useState } from "react"
// 1. useEffect(callback)
// - Goi callback moi khi component re-render
// - Goi callback sau khi component them element vao DOM
// 2. useEffect(callback, [])
// - Chi goi callback 1 lan sau khi pomponent mounted
// 3. useEffect(callback, [deps])
// - Callback se duoc goi lai moi khi deps thay doi
//------------------
// 1. Callback luon duoc goi sau khi component mounted
// 2. Cleanup function luon duoc goi truoc khi component unmounted
function Content() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        //Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}
export default Content