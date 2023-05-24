import PageContainer from "../components/PageContainer/PageContainer";
import AuthForm from "../components/AuthForm/AuthForm";

export default function SignIn() {
  return (
    <PageContainer isCenter={true}>
      <AuthForm type="in"/>
    </PageContainer>
  );
}