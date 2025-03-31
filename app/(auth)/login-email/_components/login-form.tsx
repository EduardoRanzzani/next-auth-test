'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { LuMail } from 'react-icons/lu';
import emailLogin from '../_actions/login';

const EmailLoginForm = () => {
	return (
		<Card className='w-[25%] md:w-[60%]'>
			<CardHeader className='text-center'>
				<CardTitle className='text-xl font-bold'>Login</CardTitle>
				<CardDescription>Receive a magic link via email</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={emailLogin}>
					<div className='flex flex-col gap-4'>
						<div>
							<Button
								type='submit'
								className='w-full hover:cursor-pointer flex flex-row items-center justify-center gap-4'
							>
								<LuMail /> Login com EMail
							</Button>
						</div>

						<div className='flex flex-row items-center justify-center text-center'>
							<p className='text-xs text-zinc-500'>Versão: 1.0.0</p>
						</div>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default EmailLoginForm;
