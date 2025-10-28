"use client";

import React, { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import Form from "./common/Form";
import { supabase } from "@/lib/supabase/client";

const AuthForm: React.FC = () => {
  const defaultValues = { email: "", password: "" };
  const [userData, setUserData] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const { email, password } = userData;
      const action = supabase.auth.signUp({ email, password });

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
    <Form onSubmit={handleSubmit}>
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
        {loading ? "Please wait..." : "Sign Up"}
      </Button>
    </Form>
  );
};

export default AuthForm;
