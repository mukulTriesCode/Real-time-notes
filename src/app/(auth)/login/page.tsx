import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import LoginForm from "@/components/LoginForm";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <Container className="min-h-screen">
      <Heading className="text-center">Login to your account</Heading>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
