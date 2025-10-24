import AuthForm from "@/components/AuthForm";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <Container className="min-h-screen">
      <Heading className="text-center">Create an account</Heading>
      <AuthForm mode="signup" />
    </Container>
  );
};

export default SignUpPage;
