import Product from "./../components/Product";
import Hero from "./../assets/hero.png";
import { FaFacebook, FaGoogle } from "react-icons/fa";
 
export default function ShowProduct() {
    return (
        <>
            <div>
                <div className="mt-10 flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center text-4xl font-bold font-kanit text-pink-500">
                        แสดงข้อมูลสินค้า Show Product
                    </h2>

                    <div className="flex items-center gap-3">
                        <FaFacebook className="text-4xl text-blue-700" />
                        <FaGoogle className="text-4xl text-orange-600" />
                    </div>
                </div>
 
                <hr className="mt-10 mb-10 w-[80%] mx-auto h-2 bg-pink-800 border-none" />
 
                {/* แสดงสินค้า 4 ชิ้นต่อจากเส้น hr */}
                <div className="flex justify-center gap-5">
                    {/* สินค้าตัวที่ 1 */}
                    <Product pName="iPhone" pPrice={35000.50} pQuan={100} pImg={Hero} />
 
                    {/* สินค้าตัวที่ 2 */}
                    <Product pName="Samsung" pPrice={23000.75} pQuan={50} pImg={Hero} />
 
                    {/* สินค้าตัวที่ 3 */}
                    <Product pName="Vivo" pPrice={15000.25} pQuan={55} pImg={Hero} />
 
                    {/* สินค้าตัวที่ 4 */}
                    <Product pName="Oppo" pPrice={26000.50} pQuan={299} pImg={Hero} />
                </div>
            </div>
        </>
    );
}
 