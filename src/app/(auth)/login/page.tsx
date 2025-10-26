import AuthForm from "@/components/AuthForm";
import Container from "@/components/layout/Container";
import Heading from "@/components/common/Heading";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <Container className="min-h-screen">
      <Heading className="text-center">Login to your account</Heading>
      <AuthForm mode="login" />
    </Container>
  );
};

export default LoginPage;
