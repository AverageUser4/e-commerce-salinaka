import PageContainer from "../components/PageContainer/PageContainer";
import AuthForm from "../components/AuthForm/AuthForm";

export default function SignUp() {
  return (
    <PageContainer isCenter={true}>
      <AuthForm type="up"/>
    </PageContainer>
  );
}