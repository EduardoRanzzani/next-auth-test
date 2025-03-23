import { ReactNode } from 'react';

const RegisterLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='bg-zinc-600 flex flex-col items-center justify-center h-screen w-full gap-4'>
			{children}
		</main>
	);
};

export default RegisterLayout;
