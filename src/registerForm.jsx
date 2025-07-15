/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Input } from "./components/Input";
import { FormProvider, useForm  } from "react-hook-form";
import {
  firstname_validation,
  lastname_validation,
  email_validation,
  phone_validation,
  company_validation,
} from './utils/inputValidations';
import { useState } from 'react';

export default function RegisterForm({ formTitle }) {

  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })
 const onReset = () => {
    methods.reset()
    setSuccess(false)
  }
  
  return (
    <>
      <section className="container-fluid">
        <div className="row min-vh-100 d-flex justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-8 col-12">
          <div className="card m-2">
            <div className="card-header fs-5 text-center bg-transparent text-capitalize fw-bold">
              {formTitle}
            </div>
            <div className="card-body p2">
                 <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate 
        className="m-0" >
                    <Input
                    {...firstname_validation}
                    />
                    <Input
                    {...lastname_validation}
                    />
                    <Input
                    {...email_validation}
                      // label="Email"
                      // type="email"
                      // id="email"
                      // placeholder="Enter email"
                      // validation={{
                      //   required: {
                      //     value: true,
                      //     message: 'required',
                      //   },
                      // }}
                    />

                    <Input
                    {...phone_validation}
                      // label="Phone"
                      // type="number"
                      // id="phone"
                      // placeholder="Enter phone"
                      // validation={{
                      //   required: {
                      //     value: true,
                      //     message: 'required',
                      //   },
                      // }}
                    />
                    <Input
                    {...company_validation}
                    />
                    {success && (
                      <div className="fw-bold text-success text-center formSuccess">
                       Form submitted successfully
                      </div>
                    )}
                  <div className="w-100 d-flex justify-content-center align-items-center mt-3">
                    <button onClick={onSubmit} className="btn btn-primary m-1 w-25">Register</button>
                    <button  onClick={onReset} className="btn btn-danger m-1 w-25">Reset</button>
                  </div>
                </form>
                </FormProvider>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
