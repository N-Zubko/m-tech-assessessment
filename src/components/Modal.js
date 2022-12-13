const Modal = () => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>
                        Joining us for{' '}
                        <span
                            className="first-colour"
                            style={{ color: '#CC905D' }}
                        >
                            coffee
                        </span>{' '}
                        or{' '}
                        <span
                            className="second-colour"
                            style={{ color: '#9A5580' }}
                        >
                            late night cocktails?
                        </span>
                    </h2>
                </div>
                <div className="modal-body">
                    <p>
                        Please verify that you are 18 years of age or older to
                        enter the site.
                    </p>
                </div>
                <fieldset className="modal-form">
                    <form className="d-inline-flex">
                        <label for="day" className="dropdown-item"></label>
                        <select name="day" id="day">
                            <option disabled selected>
                                Day
                            </option>
                            <option value="1">1</option>
                        </select>

                        <label for="month" className="dropdown-item"></label>
                        <select name="month" id="month">
                            <option disabled selected>
                                Month
                            </option>
                            <option value="1">1</option>
                        </select>

                        <label for="year" className="dropdown-item"></label>
                        <select name="year" id="year">
                            <option disabled selected>
                                Year
                            </option>
                            <option value="1">1</option>
                        </select>
                        <br />
                        <button type="submit" className="btn btn-dark">
                            Enter Site
                        </button>
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default Modal
