import { FC } from "react"
import { AnimeInfo } from "../services/types/AnimeInfo"
import { Link } from "react-router-dom"
import { shortText } from "../utils/shortText"
import { useAppDispatch } from "../hooks/hooks"
import { setGenre } from "../redux/slices/filterSlice"

interface FullCardProps extends AnimeInfo { }
const FullCard: FC<FullCardProps> = ({ image, genres, otherName, title, subOrDub, description, releaseDate, status, type, totalEpisodes }) => {
	const dispatch = useAppDispatch()
	return (
		<div className="card card-side bg-base-100 shadow-xl">
			<figure className='object-fill min-w-[230px] max-w-[230px] justify-start'><img className='object-fill self-start' src={image} alt="Movie" /></figure>
			<div className="card-body p-6 pr-8">
				<div className='flex justify-between'>
					<h2 className="card-title">{title}</h2>
					<div className={`capitalize ${subOrDub === 'dub' && 'bg-indigo-500'} bg-accent p-[1px] px-3 rounded-full self-start text-white ml-2 text-basic align-top font-semibold`}>{subOrDub}</div>
				</div>
				<div className='pr-8' dangerouslySetInnerHTML={{ __html: shortText(otherName, 120) }}></div>
				<ul className='flex gap-2 mb-2 flex-wrap'>
					{genres.map((genre) => <Link to={'/'} key={genre}>
						<li
							onClick={() => setTimeout(() => { dispatch(setGenre(genre)), 1000 })}
							className='cursor-pointer px-2 py-1 pb-[6px] text-info border-info text-sm border leading-4 rounded-full hover:border-indigo-400 hover:text-indigo-400'
						>
							{genre}
						</li>
					</Link>)}
				</ul>
				<div className='text-sm text-slate-500' dangerouslySetInnerHTML={{ __html: shortText(description, 300) }}></div>
				<div className='flex gap-4 text-sm text-slate-300'>
					<div>
						<p>Realse: {releaseDate}</p>
						<p>Status: {status}</p>
					</div>
					<div>
						<p>Episodes: {totalEpisodes}</p>
						<p>type: {type}</p>
					</div>
				</div>

			</div>
		</div>
	)
}
export default FullCard