/* eslint-disable react/prop-types */

import { useFormContext } from "react-hook-form"
import { findInputError, isFormInvalid } from '../utils'
import { InputMask } from "primereact/inputmask"

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  isPhone,
}) => {

    const { 
      register,
      formState: { errors },
     } = useFormContext()


  const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)



  return (
    <div className="mb-2">
        <label  htmlFor={id} className="form-label">{label}</label>
         {isPhone ? (
        <InputMask 
            id={id}
            className="form-control"
            placeholder={placeholder}
            mask="(999) 999-99-9999"
            {...register(name, validation)}
        ></InputMask>
      ) : (
        <input 
            id={id}
            type={type} 
            className="form-control"
            placeholder={placeholder}

            // {...register(label, {
            //   required: {
            //     value: true,
            //     message: 'required',
            //   },
            // })}
             {...register(name, validation)}
        />
      )}
        
        {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
    </div>
  )
}


const InputError = ({ message }) => {
  return (
    <span
      className="text-danger errorMsg"
    >
      {message}
    </span>
  )
}
