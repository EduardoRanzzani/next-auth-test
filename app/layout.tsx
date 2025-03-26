import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/components/theme-provider';
import ToggleTheme from '@/components/ToggleTheme';

const roboto = Roboto({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Next Auth Example',
	description: 'Test using next-auth',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${roboto.className} antialiased`}>
				<div className='h-screen  w-full p-8'>
					<SessionProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='light'
							enableSystem
							disableTransitionOnChange
						>
							<ToggleTheme />
							{children}
						</ThemeProvider>
					</SessionProvider>
				</div>
			</body>
		</html>
	);
}
