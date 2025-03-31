import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { compareSync } from 'bcrypt-ts';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/nodemailer';

const prisma = new PrismaClient();

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt',
	},
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
		GithubProvider({
			allowDangerousEmailAccountLinking: true,
		}),
		GoogleProvider({
			allowDangerousEmailAccountLinking: true,
		}),
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD,
				},
				from: process.env.EMAIL_FROM,
			},
		}),
	],
});
