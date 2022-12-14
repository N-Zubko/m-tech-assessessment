import { useContext } from 'react'
import { UserContext } from '../utils/Context'
import { calculateAge } from '../utils/calculateAge'
import logo from '../assets/desktop-logo.png'

const Modal = () => {
    const { setShowModal } = useContext(UserContext)

    function validateAge(event) {
        event.preventDefault()
        const year = document.getElementById('year').value
        const month = document.getElementById('month').value
        const day = document.getElementById('day').value

        if (year >= 1900 && day >= 1 && month >= 1) {
            if (calculateAge(year, month, day)) {
                setShowModal(false)
            } else {
                alert(
                    'Book a table to celebrate your birthday when you turn 18'
                )
            }
        } else
            alert(
                'Please enter your date of birth to verify that you are 18 years of age or older'
            )
    }
    const dayOptions = Array(31)
        .fill()
        .map((_, i) => (
            <option key={i} value={i + 1}>
                {i + 1}
            </option>
        ))
    const monthOptions = Array(12)
        .fill()
        .map((_, i) => (
            <option key={i} value={i + 1}>
                {i + 1}
            </option>
        ))

    const yearOptions = Array(123)
        .fill()
        .map((_, i) => (
            <option key={i} value={2022 - i}>
                {2022 - i}
            </option>
        ))

    return (
        <div
            className="modal-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-label"
            aria-describedby="modal-description"
        >
            <div className="modal-content">
                <div className="modal-header">
                    <img
                        src={logo}
                        alt="Coffee & Co logo"
                        className="mobile-logo"
                    />
                    <h2 id="modal-label">
                        Joining us for{' '}
                        <span className="first-colour">coffee</span> or{' '}
                        <span className="second-colour">
                            late night cocktails?
                        </span>
                    </h2>
                </div>
                <div className="modal-body">
                    <i className="notice-text" id="modal-description">
                        Please verify that you are 18 years of age or older to
                        enter the site.
                    </i>

                    <fieldset className="modal-form">
                        <form className="form" onSubmit={validateAge}>
                            <select
                                name="day"
                                id="day"
                                required
                                defaultValue="Day"
                                aria-label="Day"
                            >
                                <option disabled value="Day">
                                    Day
                                </option>
                                {dayOptions}
                            </select>
                            <select
                                name="month"
                                id="month"
                                required
                                defaultValue="Month"
                                aria-label="Month"
                            >
                                <option disabled>Month</option>
                                {monthOptions}
                            </select>
                            <select
                                name="year"
                                id="year"
                                required
                                defaultValue="Year"
                                aria-label="Year"
                            >
                                <option disabled>Year</option>
                                {yearOptions}
                            </select>
                        </form>
                        <button
                            type="submit"
                            title="validate age and enter website"
                            onClick={validateAge}
                        >
                            Enter Site
                        </button>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Modal
