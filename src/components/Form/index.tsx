import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from "./styles";
import { Container } from "../../globalStyles";
import { validateForm } from "./validateForm";

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultError = validateForm({
      name,
      email,
      password,
      confirmPass,
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError(null);
    setSuccess("Application was submitted!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Name",
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirm Password",
      value: confirmPass,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setConfirmPass(e.target.value),
      type: "password",
    },
  ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>Sign up</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit">Signup</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};
