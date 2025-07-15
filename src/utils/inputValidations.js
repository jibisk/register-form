 
export const firstname_validation = {
  name: 'firstname',
  label: 'First Name',
  type: 'text',
  id: 'firstname',
  placeholder: 'Enter first name',
  validation: {
    required: {
      value: true,
      message: 'First name required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const lastname_validation = {
  name: 'lastName',
  label: 'Last Name',
  type: 'text',
  id: 'lastName',
  placeholder: 'Enter last name',
  validation: {
    required: {
      value: true,
      message: 'Last name required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

// export const desc_validation = {
//   name: 'description',
//   label: 'description',
//   multiline: true,
//   id: 'description',
//   placeholder: 'write description ...',
//   validation: {
//     required: {
//       value: true,
//       message: 'required',
//     },
//     maxLength: {
//       value: 200,
//       message: '200 characters max',
//     },
//   },
// }

// export const password_validation = {
//   name: 'password',
//   label: 'password',
//   type: 'password',
//   id: 'password',
//   placeholder: 'type password ...',
//   validation: {
//     required: {
//       value: true,
//       message: 'required',
//     },
//     minLength: {
//       value: 6,
//       message: 'min 6 characters',
//     },
//   },
// }

export const phone_validation = {
  name: 'phone',
  label: 'Phone',
  type: 'number',
  id: 'phone',
  isPhone:true,
  placeholder: 'Enter phone',
  validation: {
    required: {
      value: true,
      message: 'Phone no required',
    },
    // min:{
    //   value: 0,
    //   message: 'invalid format',
    // },
  },
}

export const email_validation = {
  name: 'email',
  label: 'Email',
  type: 'email',
  id: 'email',
  placeholder: 'Enter email',
  validation: {
    required: {
      value: true,
      message: 'Email required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Enter valid email',
    },
  },
}

export const company_validation = {
  name: 'company',
  label: 'Company',
  type: 'text',
  id: 'company',
  placeholder: 'Enter company',
  validation: {
    required: {
      value: true,
      message: 'Company required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}