import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [posts, setPosts] = useState<{ title: string }[]>([])

    useEffect(() => {
        fetch(import.meta.env.VITE_JSON_URL)
            .then(res => res.json())
            .then(json => {
                setPosts(json.posts)
            })
    }, [])
    return (<div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Main Route</h1>
            <a href="/another-route/">Another Route</a>
            <ul className="post-list">
                {posts.map((post, idx) => <li key={idx}>{post.title}</li>)}
            </ul>
        </div>)
}

export default App
