const Card = ({ teams, score }) => {
  return (
    <div className="flex justify-center items-center font-eurobold text-[12px] gap-2 my-1">
      <div className="flex gap-2 bg-[#0000004d] p-2 w-44 items-center">
        <img src={`./src/assets/${teams}.svg`} className="h-5" alt="" />
        <div>{teams}</div>
      </div>
      <div className="flex justify-center items-center bg-white text-black h-8 w-8">
        {score ? score : "-"}
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="max-w-60 m-auto">
      <div>
        <div className="font-eurobold text-sm mt-5">Minggu 11 Agustus 2024</div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Senin" />
          <Card teams="Sabtu" />
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Selasa" />
          <Card teams="Minggu" />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-eurobold text-sm mt-5">Senin 12 Agustus 2024</div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Senin" />
          <Card teams="Kamis" />
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Selasa" />
          <Card teams="Rabu" />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-eurobold text-sm mt-5">Selasa 13 Agustus 2024</div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Sabtu" />
          <Card teams="Kamis" />
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Minggu" />
          <Card teams="Rabu" />
        </div>
      </div>

      <div className="font-eurobold text-[12px] mt-8">Terakhir diperbarui: 11 Agustus 15:00 WIB</div>
    </div>
  );
};

export default Schedule;