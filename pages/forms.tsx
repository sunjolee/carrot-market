import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Better validation
// Better Erros (set, clear, display)
// Have control over inputs

interface LoginForm {
    username: string;
    password: string;
    email: string;
    errors?: string;
}

export default function Forms() {
    const { register, handleSubmit, formState: { errors },
        watch,
        setError,
        setValue,
        reset,
        resetField,
    } = useForm<LoginForm>({mode:"onBlur"});
    const onValid = (data: LoginForm) => {
        console.log("im valid bby");
    };
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    };
    console.log(errors);
    return (
        // <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <form  >
            <div className={"display:flex;"}>
                <div>
                    <input
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                message: "The username should be longer than 5 chars.",
                                value: 5,
                            },
                        })}
                        type="text"
                        placeholder="Username"
                    />
                    <span className={"text-fuchsia-900"}>{errors.username?.message}</span>
                </div>
                <div>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            validate: {
                                notGmail: (value) => !value.includes("@gmail.com") || "Gmail is not allowed",
                            }
                        })}
                        type="email"
                        placeholder="Email"
                    />
                    <span className={"text-fuchsia-900"}>{errors.email?.message}</span>
                </div>
                <div>
                    <input
                        {...register("password", { required: "Password is required" })}
                        type="password"
                        placeholder="Password"
                    />
                    <span className={"text-fuchsia-900"}>{errors.password?.message}</span>
                </div>
                <div>
                    <input type="submit" value="Create Account" />
                </div>
            </div>
        </form>
    );
}