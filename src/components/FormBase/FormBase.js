import React, { useState } from 'react'
import { validateForm } from '../../helpers/validateForm';
import { useForm } from '../../hooks/useForm';
import { Alert } from '../Alert/Alert';

export const FormBase = () => {

    const [formValues, handleInputChange, updateChecks, reset] = useForm({
        fields: {
            fullname: '',
            email: '',
            phone: '',
            city: '',
            comments: '',
            terms: false,
            revicedInformation: false
        },
        errors: {
            fullname: { isInvalid: false, isPristine: true },
            email: { isInvalid: false, isPristine: true },
            phone: { isInvalid: false, isPristine: true },
            city: { isInvalid: false, isPristine: true },
            comments: { isInvalid: false, isPristine: true },
            terms: { isInvalid: false, isPristine: true },
            revicedInformation: { isInvalid: false, isPristine: true },
        }
    });

    const { fields: { fullname, email, phone, city, comments }, errors } = formValues;


    const handleChecked = (e) => {
        updateChecks(
            {
                field: e.target.name,
                value: e.target.checked,
                event: e,
            }
        )
    }

    const [state, setState] = useState({ loading: false, ok: false });

    const { loading, ok } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm(errors);
        if (isFormValid) {
            setState({
                loading: true, ok: false,
            })
            //SIMULO EL POST
            setTimeout(() => {
                setState({
                    loading: false, ok: true,
                })
                reset();
            }, 2000)
        }
    }



    return (
        <section>
            {ok && <Alert />}

            <article className='row py-4'>
                <div className="col-2 col-md-2 text-center">
                    <img loading="lazy"
                        src="https://s3.amazonaws.com/imagenes.fincaraiz.com.co/FC_COL/Logos/28140_m.jpg"
                        alt="28140_m_logo"
                    />
                </div>
                <div className="col-10 col-md-10">
                    <h2 className="text-emphasys">??reas de 173m?? y 215m?? desde $1.373.250.000</h2>
                </div>
            </article>

            <article>
                <div className="card mx-auto px-3 py-3 ">
                    <p> Ingresa tus datos para obtener m??s informaci??n </p>
                    <p className="small d_none_s mb-2">* Campos Obligatorios </p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <input
                                name="fullname"
                                value={fullname}
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                type="text"
                                className="form-group-field"
                                maxLength="200" />
                            <div className="form-group-bar"></div>
                            <label className={`form-group-label ${fullname ? 'width-value' : ''}`}> *Nombre</label>
                            <div
                                className={`texterror d-none ${errors?.fullname?.isInvalid ? 'd-block' : ''}`}>
                                Escribe tu nombre y apellido
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                type="email"
                                className="form-group-field"
                                maxLength="100" />
                            <div className="form-group-bar"></div>
                            <label className={`form-group-label ${email ? 'width-value' : ''}`}> *Email / Correo Electr??nico</label>
                            <div className={`texterror d-none ${errors?.email?.isInvalid ? 'd-block' : ''}`}>
                                Escribe tu email, debe ser un email v??lido
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                name="phone"
                                value={phone}
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                type="tel"
                                className="form-group-field"
                                maxLength="15" />
                            <div className="form-group-bar"></div>
                            <label className={`form-group-label ${phone ? 'width-value' : ''}`}> *Tel??fono / Celular</label>
                            <div className={`texterror d-none ${errors?.phone?.isInvalid ? 'd-block' : ''}`} style={{ top: '50px' }}>
                                Escribe tu tel??fono, se admiten numeros de Medell??n y Bogot??
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                name="city"
                                value={city}
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                type="text"
                                className="form-group-field"
                                maxLength="100" />
                            <div className="form-group-bar"></div>
                            <label className={`form-group-label ${city ? 'width-value' : ''}`}> *Ciudad</label>
                            <div className={`texterror d-none ${errors?.city?.isInvalid ? 'd-block' : ''}`}>
                                Escribe tu Ciudad
                            </div>
                        </div>

                        <div className="form-group form-textarea">
                            <textarea
                                className="form-group-field"
                                value={comments}
                                onChange={handleInputChange}
                                onBlur={handleInputChange}
                                name="comments"
                                maxLength="1000"></textarea>
                            <label className={`form-group-label ${comments ? 'width-value' : ''}`}> *Comentario</label>
                            <div className={`texterror d-none ${errors?.comments?.isInvalid ? 'd-block' : ''}`}>Escribe tu comentario</div>
                        </div>


                        <div className="form-checkbox form-checkbox-inline my-3">
                            <label className="form-checkbox-label">
                                <input
                                    type="checkbox"
                                    className="form-checkbox-field"
                                    name="revicedInformation"
                                    onChange={handleChecked}
                                />
                                <i className="form-checkbox-button"></i>
                                <span className="small">* Autorizo a  AMARILO a que me env??e Informaci??n. </span>
                            </label>
                            <div className={`texterror texterrorCheck d-none ${errors?.revicedInformation?.isInvalid ? 'd-block' : ''}`}>
                                Requerido
                            </div>
                        </div>


                        <div className="form-checkbox form-checkbox-inline my-3">
                            <label className="form-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    className="form-checkbox-field"
                                    onChange={handleChecked}
                                />
                                <i className="form-checkbox-button"></i>
                                <span className="small">* Acepto Pol??tica de&nbsp;
                                    <a href="https://www.fincaraiz.com.co/politica_tratamiento_de_datos_personales.aspx"
                                        title="Ver tratamiento de datos"
                                        target="_blank"
                                        rel="noreferrer">tratamiento de datos</a> y&nbsp;
                                    <a href="https://www.fincaraiz.com.co/terminos_y_condiciones.aspx"
                                        title="Ver t??rminos y condiciones"
                                        rel="noreferrer"
                                        target="_blank">t??rminos y condiciones</a></span>
                            </label>
                            <div className={`texterror texterrorCheck d-none ${errors?.terms?.isInvalid ? 'd-block' : ''}`}>
                                Requerido
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button
                                disabled={loading}
                                className="enviar btn btn-send mt-2"
                                type="submit">
                                {loading && <i className="fa fa-spin fa-spinner"></i>} Enviar
                            </button>
                        </div>
                    </form>

                </div>
            </article>
        </section>
    )
}
