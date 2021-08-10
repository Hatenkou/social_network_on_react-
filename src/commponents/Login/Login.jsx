import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validator/validators';
import { Input, Textarea } from '../common/FormControls/FormsControls';


const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               validate={[required]}
               placeholder={'Login'}
               component={Input}
               name={'login'}
            />
         </div>
         <div>
            <Field placeholder={'Password'}
               validate={[required]}
               component={Input}
               name={'password'}
            />
         </div>
         <div>
            <Field component={Input}
               type={"checkbox"}
               name={'rememberMe'}
            />remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
};
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData);
   };
   return <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
};
export default Login;