import Link from 'next/link';
// import Finder from './finder';

export default function NavBar() {
	return (
		<nav className='w-full flex justify-center items-center bg-slate-700 p-4 text-purple-200 hover:bg-slate-500 '>
			<Link
				href='/'
				className='text-3xl  px-4 py-2 rounded hover:cursor-pointer'>
				My Movie Trip
			</Link>
			{/* <Finder /> */}
		</nav>
	);
}
