import { forwardRef } from "react";

interface InputProps {
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ disabled }, ref) => {
  return <input ref={ref} type="text" name="text" disabled={disabled} />;
});

Input.displayName = "Input";

export default Input;
