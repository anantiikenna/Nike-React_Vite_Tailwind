import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} width={120} height={120} className="rounded-full object-cover"/>
        <p className="mt-6 max-sm:text-center info-text">{feedback}</p>
        <div>
          <img src={star} className="w-[24px] h-[24px] object-contain m-0" />
        </div>
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard