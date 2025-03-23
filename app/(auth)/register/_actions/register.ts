'use server';
import prisma from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

export default async function register(formData: FormData) {
	const entries = Array.from(formData.entries());
	const { name, email, password } = Object.fromEntries(entries) as {
		name: string;
		email: string;
		password: string;
	};

	if (!name || !email || !password) {
		throw new Error('Os campos precisam estar preenchidos!');
	}

	const userExists = await prisma.user.findFirst({
		where: { email },
	});
	if (userExists) {
		throw new Error('Usuário já cadastrado!');
	}

	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: hashSync(password),
		},
	});

	redirect('/');
}
