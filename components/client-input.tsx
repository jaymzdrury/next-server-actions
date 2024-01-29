'use client'
import { useRef, useTransition } from "react";
import { post } from "../actions/actions";
import Input from "./input";

export default function ClientInput(): JSX.Element {
    const ref = useRef<HTMLInputElement>(null)
    const [pending, startTransition] = useTransition()

    return (
        <>
            <Input ref={ref} />
            <button 
                disabled={pending} 
                onClick={async() => {
                    startTransition(async() => {
                        await post(ref.current!.value)
                    })
                    ref.current!.value = ''
                }}
            >
                Submit
            </button>
        </>
    )

}