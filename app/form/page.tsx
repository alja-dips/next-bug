"use client"

import { Form, useForm } from "react-hook-form";
import { createTestObject, secondaryAction } from "../action";
import { useRouter } from "next/navigation";
import { TestObject } from "../store";
import { useState } from "react";

export default function MyForm() {
        const { register, handleSubmit, formState } = useForm<TestObject>();
    const router = useRouter();
    const [test, setTest] = useState(false);

    return (
        <form onSubmit={handleSubmit(async (data) => {
            await createTestObject(data.name, data.message);
            await secondaryAction();
            setTest(!test);
            router.push("/");
        })}>
            <p>
            {formState.isSubmitSuccessful ? "Submit success" : "Awaiting submit"} - 
            {test ? "Test is true" : "Test is false"}
            </p>
            <input {...register('name')} placeholder="Name" />
            <input {...register('message')} placeholder="Message" />
            <button type="submit">Submit</button>
        </form>
    );
}