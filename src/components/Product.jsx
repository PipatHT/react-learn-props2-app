

export default function Product({ pName, pPrice, pQuan, pImg }) {
    return (
        <div className="my-5 border-2
                        border-red-600
                        rounded-lg p-3">
            <img src={pImg} alt={pName} className="w-20" />
            <p className="font-bold">ชื่อสินค้า : {pName}</p>
            <p>ราคาสินค้า : {pPrice}</p>
            <p>จำานวนสินค้า : {pQuan}</p>
        </div>
    )
    
}