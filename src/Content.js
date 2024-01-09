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
const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
function Content() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener');
        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener');
        }
    }, [])
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}>
                    Go to top
                </button>
            )}
        </div>
    )
}
export default Content