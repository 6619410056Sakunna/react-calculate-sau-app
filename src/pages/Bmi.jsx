import bmi from "./../assets/bmi.png";

export default function Bmi() {
  return (
    <>
      <div className="w-200 mt-40 mx-auto border-2 border-gray-100  shadow-2xl flex flex-col items-center p-15 ">
        {/* แสดงชื่อคำนวณ */}
        <p className="text-3xl font-kanit text-center">BMI (ดัชนีมวลกาย)</p>
        <p className="text-lg font-kanit text-center text-gray-700">
          คำนวณค่าดัชนีมวลกาย
        </p>

        {/* แสดงรูป */}
        <img src={bmi} alt="bmi" className="mt-5 w-30" />

        {/* ส่วนของฟอร์ม */}
        <form className="w-full flex flex-col">
          <label className="font-kanit font-bold ">
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-500 rounded-sm p-2"
          />

          <label className="font-kanit font-bold ">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            name=""
            id=""
            className="border border-gray-500 rounded-sm p-2"
          />

          <button className="bg-blue-600 text-white p-2 mt-5 rounded-sm font-kanit font-bold hover:bg-blue-800 cursor-pointer">
            คำนวณ
          </button>

          <button className="bg-gray-400 text-white p-2 mt-2 rounded-sm font-kanit font-bold hover:bg-gray-600 cursor-pointer">
            ยกเลิก
          </button>
        </form>

        {/* ส่วนแสดงผล */}
        <div className="flex items-center justify-center mt-5 gap-5">
          <p className="font-kanit font-bold mt-5">ค่า BMI ที่คำนวณได้</p>
          <p className="font-kanit font-bold mt-5 text-blue-600"> 0.00</p>
        </div>
      </div>
    </>
  );
}
