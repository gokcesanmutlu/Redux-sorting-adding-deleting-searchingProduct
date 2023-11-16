import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import { useDispatch } from "react-redux"

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full absolute rounded-md" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2 ">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}₺</div>
      </div>
      {console.log(openEdit)}
      <div onClick={() => setOpenEdit(!openEdit)} className="absolute top-0 right-2">
        <BsThreeDots color="white" size={24} />
      </div>
      {console.log(openEdit)}
      {
        openEdit && (
          <div className="bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm">
            <div className="cursor-pointer">Sil</div>
            <div className="cursor-pointer">Update</div>
          </div>
        )
      }
    </div>
  )
}

export default ProductCard