

import { toast } from "react-hot-toast";


export  async function siginupValidation(values){
    const errors = nameVerify({},values)&& professionVerify({},values) && emailVerify({},values)&& passwordVerify({},values)&& phoneVerify({},values)
    return errors
}

export  async function loginValidation(values){
    const errors = emailVerify({},values)&& passwordVerify({},values)
    return errors
}



// ** validate full name**
function nameVerify(error = {} ,values){
    if(!values.name){
        error.name =toast.error('Name Required....🤔!');
    }
    return error;
}
//  emailvalidation 
function emailVerify(error = {} ,values){
    if(!values.email){
        error.email =toast.error('Email Required....😒!');
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)){
        error.email =toast.error('Invalid email....!');


    }
    return error;
}

// profession Verification
function professionVerify(error = {} ,values){
    if(!values.profession){
        error.profession =toast.error('Choose profession....🤔!');
    }
    return error;
}


// passwordvalidation
function passwordVerify(error = {} ,values){
    if(!values.password){
        error.password =toast.error('password Required....🙌!');
    }else if(values.password.length<4){
        error.password = toast.error('password must be more than 4! characters')
    }
    return error;
}

function phoneVerify(error = {} ,values){
    if(!values.phone){
        error.phone =toast.error('phone Required....🙌!');
    }else if(values.phone.length<9){
        error.phone =toast.error('phone number error...!🤷‍♂️')
    }
    return error;
}
