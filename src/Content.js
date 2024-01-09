import { useEffect, useState } from "react"
const lessons = [
    {
        id: 1,
        name: 'reactjs la gi 1?'
    },
    {
        id: 2,
        name: 'reactjs la gi 2?'
    },
    {
        id: 3,
        name: 'reactjs la gi 3?'
    },
]
function Content() {
    const [lessonId, setLessonId] = useState(1)
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Content