import { ReactNode } from 'react';

const RegisterLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='flex flex-col items-center justify-center w-full gap-4'>
			{children}
		</main>
	);
};

export default RegisterLayout;
