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
// 3. Cleanup function luon duoc goi truoc khi callback duoc goi
function Content() {
    const [avatar, setAvatar] = useState()
    useEffect(() => {
        //Cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )
}
export default Content