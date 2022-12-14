// write a function called calculateAge that takes into account day, month and year and returns the age of the user. The function should return a number.

export function calculateAge(year, month, day) {
    const today = new Date()
    const birthDate = new Date(year, month, day)
    const age = today - birthDate
    // calculate the age in years
    const years = age / (1000 * 60 * 60 * 24 * 365.25)

    if (years >= 18) return true
    else return false
}
