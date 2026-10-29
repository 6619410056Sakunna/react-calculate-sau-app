

export default function CardMenu({ imgShow, titleShow, stitleShow }) {
  return (
    <>
      <div className="w-80 flex flex-col items-center border-2 border-gray-200 p-10 rounded-2xl shadow-2xl">
        <img src={imgShow} alt="รูป" className="w-35" />

        <p className="mt-4 font-kanit text-xl font-bold">{titleShow}</p>

        <p className="mt-4 font-charm text-lg text-gray-500 text-center">
          {stitleShow}
        </p>
      </div>
    </>
  );
}
