import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import moduleTwo from "./two.module.css";
import "./nested.css"

const logoName = "ttc-logo"

const module = await import(`./png-images/${logoName}.png`) as { default: string }
const modules = import.meta.glob<{ default: string }>("./png-images/*.png", {eager: true})

function App() {

    console.log({module, modules})

    return (<>
        <ul className="styled-list">
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
        </ul>
        <p className="item">This is NOT styled!</p>
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo"/>
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
        </div>
        {Object.values(modules).map(src => <img src={src.default} alt={src.default}/>)}
        <img src={module.default} alt={module.default}/>
        <h1 className={moduleTwo.another}>Vite + React</h1>
        <a href="/another-route/">Another route</a>
    </>)
}

export default App
