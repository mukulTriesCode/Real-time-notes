"use client";

import React, { useState } from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import Form from "./common/Form";
import { supabase } from "@/lib/supabase/client";

const LoginForm: React.FC = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });
    console.log(error);
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
      <Button type="submit" variant="primary">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
