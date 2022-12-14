import WelcomePage from './views/WelcomePage'
import Modal from './components/Modal'
import { UserContext } from './utils/Context'
import { useState } from 'react'

function App() {
    const [showModal, setShowModal] = useState(true)

    return (
        <UserContext.Provider value={{ showModal, setShowModal }}>
            <div className="App">
                <WelcomePage />
                {showModal && (
                    <Modal
                        aria={{
                            labelledby: 'heading',
                            describedby: 'full_description',
                        }}
                    />
                )}
            </div>
        </UserContext.Provider>
    )
}

export default App
