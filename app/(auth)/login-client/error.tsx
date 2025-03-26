'use client';
import ErrorCard from './_components/error-card';

const RegisterError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return <ErrorCard errorMessage={error.message} reset={reset} />;
};

export default RegisterError;
