'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LuCircleX, LuHouse } from 'react-icons/lu';

const ErrorCard = ({
	errorMessage,
	reset,
}: {
	errorMessage: string;
	reset: () => void;
}) => {
	return (
		<>
			<Card className='mx-auto min-w-96 border-red-700 w-[25%] md:w-[60%]'>
				<CardHeader>
					<CardTitle className='flex items-center justify-center gap-2 text-red-700 text-2xl font-bold'>
						<LuCircleX />
						Ops...
					</CardTitle>
					<CardDescription className='text-center text-red-400 text-lg'>
						Ocorreu um erro
					</CardDescription>
					<CardContent className='mt-3 underline w-full text-center'>
						{errorMessage}
					</CardContent>
					<CardFooter className='flex justify-center mt-4'>
						<Button variant={'outline'} onClick={reset}>
							Tentar Novamente
						</Button>
					</CardFooter>
				</CardHeader>
				<Link
					className={cn(buttonVariants({ variant: 'link' }), 'mt-3')}
					href={'/'}
				>
					<LuHouse /> Voltar para a Home
				</Link>
			</Card>
		</>
	);
};

export default ErrorCard;
