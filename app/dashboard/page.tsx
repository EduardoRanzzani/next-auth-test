import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LuHouse, LuLogOut } from 'react-icons/lu';

const Dashboard = () => {
	return (
		<main className='flex flex-col items-center justify-center h-screen w-full gap-8'>
			<h1 className='text-9xl font-extrabold'>Dashboard</h1>
			<p className='text-lg'>Boas vindas!</p>
			<div className='flex flex-row gap-3'>
				<Link
					href={'/api/auth/signout'}
					className={
						cn(buttonVariants()) +
						' w-60 flex flex-row items-center justify-center gap-4'
					}
				>
					<LuLogOut /> Logout
				</Link>

				<Link href={'/'} className={cn(buttonVariants()) + ' w-60'}>
					<LuHouse /> Home
				</Link>
			</div>
		</main>
	);
};

export default Dashboard;
