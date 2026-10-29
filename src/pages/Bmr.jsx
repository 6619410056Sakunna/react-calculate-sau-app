import bmr from "./../assets/bmr.png";
import { Link } from "react-router";

export default function Bmr() {
  return (
    <>
      <div className="w-200 mt-40 mx-auto border-2 border-gray-100  shadow-2xl flex flex-col items-center p-15 ">
        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-kanit text-center">BMR Calculater</p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณค่า BMR
        </p>

        {/* แสดงรูป */}
        <img src={bmr} alt="bmr" className="mt-5 w-30" />

        {/* ส่วนของฟอร์ม */}
        <form className="w-full flex flex-col">
          <label className="font-kanit font-semibold mt-2 text-gray-700">
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-200 rounded-sm p-2 shadow-sm mt-2"
          />

          <label className="font-kanit font-semibold mt-2 text-gray-700">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-200 rounded-sm p-2 shadow-sm mt-2"
          />

          <label className="font-kanit font-semibold mt-2 text-gray-700">
            ป้อนอายุ (ปี)
          </label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-200 rounded-sm p-2 shadow-sm mt-2"
          />

          <p className="font-semibold font-kanit text-gray-700 mt-4">เพศ</p>
          <div className="flex items-center">
            <input className="w-5 h-5 border-none ring-2 ring-white  mt-2" type="radio" id="radio-metric" name="unitMeasurements"  />
            <label className="ml-2 mt-2 font-semibold font-kanit text-gray-700" for="radio-metric">ชาย</label>
          </div>
          <div className="flex items-center">
            <input className="w-5 h-5 border-none ring-2 ring-white mt-2" type="radio" id="radio-metric" name="unitMeasurements" />
            <label className="ml-2 mt-2 font-semibold font-kanit text-gray-700" for="radio-metric">หญิง</label>
          </div>

          <div className="flex justify-center gap-10 ">
            <button className="w-full bg-lime-700 text-white p-2 mt-5 rounded-sm font-kanit font-semibold hover:bg-lime-800 cursor-pointer shadow-sm">
              คำนวณ
            </button>

            <button className="w-full bg-red-500 text-white p-2 mt-5 rounded-sm font-kanit font-semibold hover:bg-red-600 cursor-pointer shadow-sm">
              ยกเลิก
            </button>
          </div>

        </form>

        {/* ส่วนแสดงผล */}
        <div className="flex items-center justify-center mt-5 gap-5">
          <p className="font-kanit font-semibold mt-5">ค่า BMR ที่คำนวณได้</p>
          <p className="font-kanit font-semibold mt-5 text-blue-600"> 0.00</p>
        </div>
        {/* กลับหน้า */}
        <Link to="/" className="w-full text-center bg-gray-400 text-white p-2 mt-4 rounded-sm font-kanit font-semibold shadow-sm">
          กลับหน้าหลัก
        </Link>
      </div>
    </>
  );
}