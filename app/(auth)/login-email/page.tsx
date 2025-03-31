import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import EmailLoginForm from './_components/login-form';

const Login = async () => {
	const session = await auth();

	if (session) {
		redirect('/dashboard');
	}

	return <EmailLoginForm />;
};

export default Login;
