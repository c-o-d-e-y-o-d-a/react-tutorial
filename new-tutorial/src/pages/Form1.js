import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolver/yup'


import * as yup from 'yup';




const Form1 = () =>{

    

    const schema = yup.object().shape({
        fullName : yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(4).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null])

    })

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    }
        

    );


    const onSubmit = (data) =>{
        console.log(data);
    };

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='name' {...register("full Name")}/>
            <input type="text" placeholder='email'/>
            <input type="text" placeholder='password'/>
            <input type="text" placeholder='confirm password'/>
            <input type="submit" />

        </form>
        </>
    )
    }

    export default Form1;