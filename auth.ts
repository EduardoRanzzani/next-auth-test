import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/lib/db';
import { compareSync, hashSync } from 'bcrypt-ts';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: { label: 'E-Mail:', type: 'email' },
				password: { label: 'Password:', type: 'password' },
			},
			async authorize(credentials) {
				const email = credentials.email as string;
				const password = credentials.password as string;

				if (!email || !password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: { email },
				});

				if (!user) {
					return null;
				}

				const matches = compareSync(password, user.password ?? '');
				if (matches) {
					return user;
				}
				return null;
			},
		}),
	],
});
