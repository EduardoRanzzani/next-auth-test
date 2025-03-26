'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoginForm from './_components/login-form';
import { useEffect } from 'react';

const Login = () => {
	const router = useRouter();
	const session = useSession();

	// useEffect(() => {
	if (session.status === 'authenticated') {
		router.push('/dashboard');
	}
	// }, [session.status]);

	return <LoginForm />;
};

export default Login;
