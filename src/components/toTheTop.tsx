'use client';

import { SyntheticEvent } from 'react';

export default function ToTheTop() {
	const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			onClick={handleClick}
			className='fixed bottom-4 right-4 bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded'>
			&#8679; 맨 위로
		</button>
	);
}
