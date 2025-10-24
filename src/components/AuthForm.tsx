"use client";

import React, { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import Form from "./common/Form";
import { supabase } from "@/lib/supabase/client";

type AuthFormProps = {
  mode: "login" | "signup";
};

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const defaultValues = { email: "", password: "" };
  const [userData, setUserData] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const { email, password } = userData;
      const action =
        mode === "signup"
          ? supabase.auth.signUp({ email, password })
          : supabase.auth.signInWithPassword({ email, password });

      const { error } = await action;
      if (error) setErrorMsg(error.message);
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setUserData(defaultValues);
      }, 2000);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="max-w-[500px] mx-auto card flex flex-col gap-4"
    >
      <Input
        id="email"
        type="email"
        label="Email"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        required
      />

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? "Please wait..." : mode === "signup" ? "Sign Up" : "Login"}
      </Button>
    </Form>
  );
};

export default AuthForm;
