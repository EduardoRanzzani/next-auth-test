import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { LuSave } from 'react-icons/lu';
import register from '../_actions/register';

const RegisterForm = () => {
	return (
		<Card className='w-[25%] md:w-[60%]'>
			<CardHeader className='text-center'>
				<CardTitle className='text-xl font-bold'>Register</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent>
				<form action={register}>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<Label className='text-xs text-zinc-500'>Name:</Label>
							<Input type='text' name='name' placeholder='John Doe' />
						</div>

						<div className='flex flex-col gap-2'>
							<Label className='text-xs text-zinc-500'>E-Mail:</Label>
							<Input
								type='email'
								name='email'
								placeholder='john.doe@example.com'
							/>
						</div>

						<div className='flex flex-col gap-2'>
							<Label className='text-xs text-zinc-500'>Password:</Label>
							<Input type='password' name='password' placeholder='********' />
						</div>

						<div>
							<Button
								type='submit'
								className='w-full hover:cursor-pointer flex flex-row items-center justify-center gap-4'
							>
								<LuSave /> Save
							</Button>
						</div>

						<div className='flex flex-row items-center justify-center'>
							<Link href={'/login-server'} className='flex flex-row'>
								Já possui conta?
							</Link>
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

export default RegisterForm;
