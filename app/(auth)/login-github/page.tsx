import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import GithubLoginForm from './_components/login-form';

const Login = async () => {
	const session = await auth();

	if (session) {
		redirect('/dashboard');
	}

	return <GithubLoginForm />;
};

export default Login;
