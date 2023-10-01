'use client';

import { useEffect, useState } from 'react';
import { fetchMovies } from '../api/route';
import Card from '../../components/card';
import { useParams } from 'next/navigation';
import ToTheTop from '@/components/toTheTop';

export default function MovieListPage() {
	const [movies, setMovies] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchMovies();
				setMovies(res); // 데이터를 상태로 설정
			} catch (error) {
				console.log(error);
			}
		};

		fetchData(); // 데이터를 가져오기 위한 함수 호출
	}, [id]); // 빈 의존성 배열을 전달하여 한 번만 실행되도록 설정

	return (
		<main className='bg-fuchsia-50 relative'>
			{movies.map((movie: any) => (
				<div className='flex' key={movie.id}>
					<Card movie={movie} />
				</div>
			))}
			<ToTheTop />
		</main>
	);
}
