import React, { useState } from 'react'

export const Alert = () => {
    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false)
    }, 5000);
    return (
        <div className={`alert alert-success d-flex align-items-center  d-none ${show && 'd-block' }`} role="alert">
            <div>
                Gracias por escribirnos pronto nos estaremos comunicando con usted
            </div>
        </div>
    )
}
