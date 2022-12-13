import WelcomePage from './views/WelcomePage'
import Modal from './components/Modal'
import { UserContext } from './utils/Context'
import { useState } from 'react'

function App() {
    const [showModal, setShowModal] = useState(true)
    return (
        <div className="App">
            <WelcomePage />
            {showModal && <Modal />}
        </div>
    )
}

export default App
