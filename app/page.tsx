import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LuGithub, LuMail } from 'react-icons/lu';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center h-screen w-full gap-4'>
			<h1 className='text-4xl text-zinc-950 font-bold'>Workshop Auth.js</h1>
			<div className='flex flex-row gap-4'>
				<Button className='w-60 hover:cursor-pointer'>Dashboard</Button>
				<Link
					href={'/api/auth/signin'}
					className={cn(buttonVariants()) + ' w-60'}
				>
					Login Simples (Nativo)
				</Link>

				<Link href={'/login-server'} className={cn(buttonVariants()) + ' w-60'}>
					Login - Server Components
				</Link>

				<Button className='w-60 hover:cursor-pointer'>
					Login - Client Components
				</Button>
			</div>

			<div className='flex flex-row gap-4'>
				<Button className='w-60 hover:cursor-pointer'>
					<LuGithub /> Login com Github
				</Button>

				<Button className='w-60 hover:cursor-pointer'>
					<LuMail /> Login com Email
				</Button>
			</div>
		</div>
	);
}
