import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LuHouse, LuLogOut } from 'react-icons/lu';
import logout from '../(auth)/_actions/logout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
	const session = await auth();

	if (!session) {
		redirect('/login-server');
	}

	return (
		<main className='flex flex-col items-center justify-center h-screen w-full gap-8'>
			<h1 className='text-9xl font-extrabold'>Dashboard</h1>
			<div className='text-center'>
				<p className='text-lg'>Boas vindas{`, ${session.user?.name}`}</p>
				<p className='text-sm text-muted-foreground'>
					E-Mail: {session.user?.email}
				</p>
			</div>
			<hr className='border border-zinc-300 w-[60%]' />
			<div className='flex flex-row gap-3'>
				<form action={logout}>
					<Button
						className={' w-60 flex flex-row items-center justify-center gap-4'}
					>
						<LuLogOut /> Logout
					</Button>
				</form>

				<Link href={'/'} className={cn(buttonVariants()) + ' w-60'}>
					<LuHouse /> Home
				</Link>
			</div>
		</main>
	);
};

export default Dashboard;
