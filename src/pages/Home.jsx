import calculate from "./../assets/calculate.png";
import CardMenu from "../components/CardMenu";
import Bmi from "./../assets/bmi.png";
import Bmr from "./../assets/bmr.png";
import Car from "./../assets/car.png";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={calculate} alt="calculate" className="w-30 mt-20" />
        <P className="font-kanit text-3xl font-bold mt-5">
          เครื่องคำนวณออนไลน์
        </P>
        <p className="font-itim text-xl text-gray-700 ">
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>

        {/* แสดงเมนู 3 เมนู */}
        <div className="mt-2 flex gap-10 ">
          <Link></Link>
          <CardMenu
            imgShow={Bmi}
            titleShow="BMI (ดัชนีมวลกาย)"
            stitleShow=" คำนวฯน้ำหนักและส่วนสูงว่าเหมาะสมหรือไม่"
          />
          <CardMenu
            imgShow={Bmr}
            titleShow="BMR (อัตราการเผาผลาญ)"
            stitleShow=" คำนวณอัตราการเผาผลาญที่ร่างกายต้องการ"
          />
          <CardMenu
            imgShow={Car}
            titleShow="CAR ()"
            stitleShow=" คำนวณเงินผ่อนรถยนต์หรือรถเครื่องต่อเดือน"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
