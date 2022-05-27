export const validateForm = (errors = {}) => {
    let errCount = Object.keys(errors).length;

    for (const key in errors) {
        let err = errors[key];
        if (err.isInvalid) {
            errCount--
        }
    }

    let pristineCount = Object.keys(errors).length;

    for (const key in errors) {
        let err = errors[key];
        if (err.isPristine) {
            pristineCount--
        }
    }

    if (pristineCount === 7 && errCount === 7) {
        return true;
    } else {
        return false;
    }
}