import { auth } from '@/auth';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaRightFromBracket } from 'react-icons/fa6';
import { LuHouse } from 'react-icons/lu';
import logout from '../(auth)/_actions/logout';

const Dashboard = async () => {
	const session = await auth();
	if (!session) {
		redirect('/');
	}

	return (
		<main className='flex flex-col items-center justify-center w-full gap-8'>
			<h1 className='text-9xl font-extrabold'>Dashboard</h1>
			<div className='text-center flex flex-row gap-3 items-center justify-center'>
				<Image
					src={
						session.user?.image ??
						`https://avatar.iran.liara.run/username?username=${session.user?.name?.replace(
							' ',
							'+'
						)}&background=0a0a0a&color=a1a1a1`
					}
					alt='avatar'
					width={100}
					height={100}
					className='border border-zinc-300 rounded-full'
				/>
				<div className='flex flex-col items-start justify-center'>
					<p className='text-lg'>Boas vindas{`, ${session.user?.name}`}</p>
					<p className='text-sm text-muted-foreground'>
						E-Mail: {session.user?.email}
					</p>
				</div>
			</div>
			<hr className='border border-zinc-300 w-[60%]' />
			<div className='flex flex-row gap-3'>
				<form action={logout}>
					<Button
						className={' w-60 flex flex-row items-center justify-center gap-4'}
					>
						<FaRightFromBracket /> Logout
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
