import Modal from "../components/Modal"
import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { createDataFunc } from "../redux/dataSlice"
import Input from "../components/input"
import { useState } from "react"
import Button from "../components/Button"
import { modalFunc } from "../redux/modalSlice"

const Product = () => {
  const { modal } = useSelector(state => state.modal)
  const { data } = useSelector(state => state.data)
  const dispatch = useDispatch()
  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })

  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }
  console.log(data)

  const btnFunc = () => {
    dispatch(createDataFunc(productInfo))
    dispatch(modalFunc());
  }

  const contentModal = (
    <>
      <Input type={"text"} placeholder={"ürün ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
      <Input type={"text"} placeholder={"fiyat ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"resim seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
      <Button btnText={"oluştur"} onClick={btnFunc} />
    </>
  )

  return (
    <div>
      <div className="flex items-center flex-wrap">
      {  data.map((dt, i)=>(
         <ProductCard key={i} dt={dt}/>
      ))}
      </div>
     
      {modal && <Modal content={contentModal} title={"ürün oluştur"} />}
    </div>
  )
}

export default Product