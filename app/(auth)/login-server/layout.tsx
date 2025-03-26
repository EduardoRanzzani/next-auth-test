import { ReactNode } from 'react';

const LoginLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='flex flex-col items-center justify-center w-full gap-4'>
			{children}
		</main>
	);
};

export default LoginLayout;
