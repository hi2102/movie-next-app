'use client';

import Image from 'next/image';
import { useState, ChangeEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchMovies } from '@/app/api/route';

export default function Finder() {
	const [findText, setFindText] = useState('');
	const router = useRouter();
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchMovies();
				setMovies(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [movies]);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setFindText(e.target.value);
	}

	function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();
		setFindText('');

		// 검색어와 일치하는 영화를 찾아 출력
		const foundMovies = movies.filter((movie: { title: string }) =>
			movie.title.toLowerCase().includes(findText.toLowerCase()),
		);

		if (foundMovies && foundMovies.length !== 0) {
			const searchString = findText;
			console.log('searchString =======> ', searchString);
			router.push(`movie/${searchString}`);
			// if (window.confirm('영화를 찾았습니다. 이동 하시겠습니까?')) {
			// }
		} else {
			window.confirm('Ooops~ Sorry, No movie found');
		}
	}

	return (
		<form className='flex' onSubmit={handleSubmit}>
			<div className='relative'>
				<input
					required
					type='text'
					placeholder='Search for a movie...'
					className='w-full px-4 py-2 rounded text-stone-900  focus:ring-indigo-500 focus:border-indigo-500'
					onChange={handleChange}
					value={findText}
				/>
				<div className='absolute inset-y-0 -left-11 flex items-center hover:cursor-pointer'>
					<Image
						priority
						src='/assets/icons/find.svg'
						width={24}
						height={24}
						className='w-7 h-7'
						alt='search'
					/>
				</div>
			</div>
		</form>
	);
}
