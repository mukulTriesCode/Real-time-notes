import AuthForm from "@/components/SignUpForm";
import Container from "@/components/layout/Container";
import Heading from "@/components/common/Heading";
import React from "react";
import LoginForm from "@/components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Container className="min-h-screen">
      <Heading className="text-center">Login to your account</Heading>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
