import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center gap-4'>
			<h1 className='text-4xl font-bold'>Workshop Auth.js</h1>
			<hr className='border-b border-[var(--foreground)]' />
			<div className='flex flex-row gap-4'>
				<Link href={'/dashboard'} className={cn(buttonVariants()) + ' w-60'}>
					Dashboard
				</Link>
				<Link
					href={'/api/auth/signin'}
					className={cn(buttonVariants()) + ' w-60'}
				>
					<abbr
						title='Login utilizando a tela do auth.js'
						className='no-underline'
					>
						Login Simples (Nativo)
					</abbr>
				</Link>

				<Link href={'/login-server'} className={cn(buttonVariants()) + ' w-60'}>
					Login - Server Components
				</Link>

				<Link href={'/login-client'} className={cn(buttonVariants()) + ' w-60'}>
					Login - Client Components
				</Link>
			</div>

			<div className='flex flex-row gap-4'>
				<Link href={'/login-github'} className={cn(buttonVariants()) + ' w-60'}>
					<FaGithub /> Login com Github
				</Link>

				<Button className='w-60 hover:cursor-pointer'>
					<LuMail /> Login com Email
				</Button>
		</div>
		</div>
	);
}
