'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { LuLogIn } from 'react-icons/lu';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = Object.fromEntries(
			new FormData(e.currentTarget)
		);
		console.log({ email, password });

		signIn('credentials', {
			email,
			password,
			redirect: false,
			callbackUrl: '/',
		}).then((res) => {
			if (res && res.error === 'CredentialsSignin') {
				setError('Login e/ou senha inválidos!');
			} else {
				router.push('/dashboard');
			}
		});
	};

	return (
		<Card className='w-[25%] md:w-[60%]'>
			<CardHeader className='text-center'>
				<CardTitle className='text-xl font-bold'>Login</CardTitle>
				<CardDescription>Login to your account</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<Label className='text-xs text-zinc-500'>E-Mail:</Label>
							<Input type='email' name='email' />
						</div>

						<div className='flex flex-col gap-2'>
							<Label className='text-xs text-zinc-500'>Password:</Label>
							<Input type='password' name='password' />
						</div>

						<div>
							<Button
								type='submit'
								className='w-full hover:cursor-pointer flex flex-row items-center justify-center gap-4'
							>
								<LuLogIn /> Login
							</Button>
						</div>

						<div className='flex flex-row items-center justify-center'>
							<Link href={'/register'} className='flex flex-row'>
								Não possui conta?
							</Link>
						</div>

						{error && (
							<div>
								<p className='text-xs text-red-500 text-center'>{error}</p>
							</div>
						)}

						<div className='flex flex-row items-center justify-center text-center'>
							<p className='text-xs text-zinc-500'>Versão: 1.0.0</p>
						</div>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default LoginForm;
