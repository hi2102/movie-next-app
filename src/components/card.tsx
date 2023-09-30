'use client';

import Image from 'next/image';
import { useState, MouseEvent } from 'react';
// import { useRouter } from 'next/navigation';

interface MovieProps {
	movie: {
		medium_cover_image: string;
		title: string;
		genres: string[];
		rating: string;
		summary: string;
		id: string;
	};
}

export default function Card({ movie }: MovieProps) {
	const [subtitle, setSubTitle] = useState('');
	const mainTitle = movie.title?.split(':')[0];
	// const router = useRouter();

	const summaryTexts =
		movie.summary.length !== 0 && movie.summary.length > 300
			? `${movie.summary.slice(0, 320)} ...`
			: movie.summary;

	// function handleClick(e: MouseEvent) {
	// 	e.preventDefault();
	// 	console.log('clicked');

	// 	router.push(`/movie/${movie.id}`);
	// }
	return (
		<>
			<div
				className='hover:cursor-pointer group relative hover:m-4 hover:bg-amber-50 rounded-2xl hover:px-2 hover:pb-4 w-full hover:border hover:border-fuchsia-100 hover:shadow-2xl'
				// onClick={handleClick}
			>
				<div className='flex mx-10 mt-4 py-4 gap-4 transform transition-transform duration-300 group-hover:scale-100 '>
					<Image
						priority
						width={100}
						height={100}
						alt='movie'
						className='w-[30rem] min-h-min rounded-2xl hover:border-amber-100 hover:opacity-80'
						src={movie.medium_cover_image}
					/>

					<div className='pl-4 bg-stone-100 rounded-2xl px-6 py-4 min-w-[400px] w-full '>
						<div className='bg-emerald-500 rounded-2xl p-4'>
							<h2 className='text-xl font-bold text-amber-300'>
								Title - {mainTitle}
							</h2>
							{subtitle ? (
								<h6 className='text-xs font-bold text-amber-100'>
									: {subtitle}
								</h6>
							) : (
								''
							)}
						</div>
						<div className='w-full flex justify-between  py-4 items-center'>
							{movie.genres.map((genre: any) => (
								<div key={genre} className='bg-orange-100 rounded-2xl p-4'>
									<div className='text-teal-900'>genres</div>
									<hr className='border-orange-400 mt-2 mb-1 border-2' />
									<div className='text text-violet-800'> - {genre}</div>
								</div>
							))}
							<div className='bg-orange-100 rounded-2xl p-4'>
								{' '}
								<div className='text-teal-900'>rating</div>
								<hr className='border-orange-400 mt-2 mb-1 border-2' />
								<div className='text text-violet-800'>
									- {movie.rating} / 10
								</div>
							</div>
						</div>
						<div>
							{summaryTexts ? (
								<div className='flex flex-col'>
									<div className='bg-lime-300 p-4 mb-2 rounded-2xl text-stone-700'>
										Movie Summary
									</div>
									<div className='p-4  bg-slate-200 text-sm rounded-2xl text-stone-700'>
										{summaryTexts}
									</div>
								</div>
							) : (
								<div className='text-stone-500 h-[11rem] bg-slate-200 rounded-2xl p-4'>
									no summary yet......
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
