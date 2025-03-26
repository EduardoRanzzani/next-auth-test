'use server';

import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

export default async function githubLogin() {
	await signIn('github');
}
