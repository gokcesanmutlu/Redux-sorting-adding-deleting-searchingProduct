import Modal from "../components/Modal"
import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { createDataFunc,updateDataFunc } from "../redux/dataSlice"
import Input from "../components/input"
import { useEffect, useState } from "react"
import Button from "../components/Button"
import { modalFunc } from "../redux/modalSlice"
import { useLocation, useNavigate } from "react-router-dom"


const Product = () => {
  const { modal } = useSelector(state => state.modal)
  const { data, keyword } = useSelector(state => state.data)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" })

  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }

  let loc = location?.search.split("=")[1]
  console.log(data, "data")
  useEffect(() => {
    if (loc) {
      setProductInfo(data.find(dt => dt.id == loc))
    }
  }, [loc])

  console.log(location?.search, "loc")

  const btnFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }))
    dispatch(modalFunc());
  }

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id:loc }))
    dispatch(modalFunc());
    navigate("/")
  }

  const contentModal = (
    <>
      <Input value={productInfo.name} type={"text"} placeholder={"ürün ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
      <Input value={productInfo.price} type={"text"} placeholder={"fiyat ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"resim seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
      <Button btnText={loc ? "ürün güncelle" : "ürün oluştur"} onClick={loc ? buttonUpdateFunc : btnFunc} />
    </>
  )

  const filtredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword))

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filtredItems.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))}
      </div>

      {modal && <Modal content={contentModal} title={loc ? "ürün güncelle" : "ürün oluştur"} />}
    </div>
  )
}

export default Product