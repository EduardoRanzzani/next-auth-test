import { auth } from '@/auth';
import LoginForm from './_components/login-form';
import { redirect } from 'next/navigation';

const Login = async () => {
	const session = await auth();

	if (session) {
		redirect('/dashboard');
	}
	return <LoginForm />;
};

export default Login;
