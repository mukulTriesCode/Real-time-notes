import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import SignUpForm from "@/components/SignUpForm";
import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <Container className="min-h-screen">
      <Heading className="text-center">Create an account</Heading>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
