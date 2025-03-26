'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { FaGithub } from 'react-icons/fa6';
import githubLogin from '../_actions/login';

const GithubLoginForm = () => {
	return (
		<Card className='w-[25%]'>
			<CardHeader className='text-center'>
				<CardTitle className='text-xl font-bold'>Login</CardTitle>
				<CardDescription>Login to your account</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={githubLogin}>
					<div className='flex flex-col gap-4'>
						<div>
							<Button
								type='submit'
								className='w-full hover:cursor-pointer flex flex-row items-center justify-center gap-4'
							>
								<FaGithub /> Login com Github
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

export default GithubLoginForm;
