import React from 'react';

import './render.css'

export default function MyForm({ data }) {

    if ((data)) {
        try {
            var formdata = (JSON.parse(data));
            formdata.sort((a, b) => (a.sort > b.sort) ? 1 : -1)
            console.log((JSON.parse(data)), "ff", formdata);
        } catch (err) {
            console.log(err, "err")
        }
    }
    return (
        <div className='render'>

            <form className="form-horizontal">
                {(formdata?.length) &&

                    formdata.map(fdata => {
                        console.log(fdata, "main")
                        return (
                            <div>


                                {(fdata.uiType == 'Select') &&
                                    <>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">{fdata.label}
                                                {
                                                    (fdata.validate.required) && <>*</>
                                                }
                                            </label>
                                            <div className="col-sm-5">
                                                <select className="form-control">
                                                    {fdata.validate.options.map(radio => {
                                                        console.log(radio.value, "typre")
                                                        return (
                                                            <option value={radio.value} >{radio.label}</option>
                                                        )
                                                    })}
                                                </select></div></div>
                                        <hr></hr>
                                    </>
                                }
                                {(fdata.uiType == 'Group') &&
                                    <>
                                        <label >{fdata.label}
                                            {
                                                (fdata.validate.required) && <>*</>
                                            }
                                        </label>
                                        {fdata.subParameters.map(sub => {
                                            return (<>
                                                <div className="form-group">
                                                    <label className="col-sm-4 control-label">{sub.label}
                                                        {
                                                            (sub.validate.required) && <>*</>
                                                        }:
                                                    </label>
                                                    <div className="col-sm-5">
                                                        <select className="form-control">{
                                                            sub.validate.options.map(radio => {
                                                                return (
                                                                    <option value={radio.value} >{radio.label}</option>
                                                                )
                                                            })

                                                        } </select></div></div>

                                            </>
                                            )


                                        })}
                                        <hr></hr>

                                    </>
                                }

                                {(fdata.uiType == 'Input') &&
                                    <><div className="form-group">
                                        <label className="col-sm-2 control-label">{fdata.label}
                                            {
                                                (fdata.validate.required) && <>*</>
                                            }
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                className="form-control"
                                                type={fdata.uiType}

                                            /></div>
                                        <hr></hr></div>
                                    </>
                                }

                            </div>
                        )
                    })
                }
                {
                    (formdata) && (!formdata.length) &&
                    <>

                        {
                            (formdata.uiType == 'Input') &&
                            <><div className="form-group">
                                <label className="col-sm-2 control-label">{formdata.label}
                                    {
                                        (formdata.validate.required) && <>*</>
                                    }
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        className="form-control"
                                        type={formdata.uiType}

                                    /></div>
                                <hr></hr></div>
                            </>
                        }
                        {(formdata.uiType == 'Select') &&
                            <>
                                <div className="form-group">
                                    <label className="col-sm-4 control-label">{formdata.label}
                                        {
                                            (formdata.validate.required) && <>*</>
                                        }
                                    </label>
                                    <div className="col-sm-5">
                                        <select className="form-control">
                                            {formdata.validate.options.map(radio => {
                                                console.log(radio.value, "typre")
                                                return (
                                                    <option value={radio.value} >{radio.label}</option>
                                                )
                                            })}
                                        </select></div></div>

                            </>
                        }
                        {(formdata.uiType == 'Group') &&
                            <>
                                <label >{formdata.label}
                                    {
                                        (formdata.validate.required) && <>*</>
                                    }
                                </label>

                                {formdata.subParameters.map(sub => {
                                    return (
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">{sub.label}
                                                {
                                                    (sub.validate.required) && <>*</>
                                                }:
                                            </label>
                                            <div className="col-sm-5">
                                                <select className="form-control">{
                                                    sub.validate.options.map(radio => {
                                                        return (
                                                            <option value={radio.value} >{radio.label}</option>
                                                        )
                                                    })

                                                } </select></div></div>


                                    )


                                })}


                            </>
                        }




                    </>
                }
            </form>

        </div>
    )
}
