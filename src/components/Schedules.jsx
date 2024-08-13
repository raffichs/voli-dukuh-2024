const Card = ({ teams, score }) => {
  return (
    <div className="flex justify-center items-center font-eurobold text-[12px] gap-2 my-1">
      <div className="flex gap-2 bg-[#0000004d] p-2 w-44 items-center">
        <img src={`/assets/${teams}.svg`} className="h-5" alt="" />
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
      <div className="mt-8 mb-20">
        <div className="font-eurobold text-sm mt-5">
          Rabu 14 Agustus 2024 (<span className="text-[#49e46d]">Semi-finals</span>)
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Sabtu" />
          <Card teams="Rabu" />
        </div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Minggu" />
          <Card teams="Senin" />
        </div>
      </div>

      <div>
        <div className="font-eurobold text-sm mt-5">Minggu 11 Agustus 2024</div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Senin" score="0" />
          <Card teams="Sabtu" score="2" />
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Selasa" score="0" />
          <Card teams="Minggu" score="2" />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-eurobold text-sm mt-5">Senin 12 Agustus 2024</div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Senin" score="2" />
          <Card teams="Kamis" score="0" />
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Selasa" score="1" />
          <Card teams="Rabu" score="2" />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-eurobold text-sm mt-5">Selasa 13 Agustus 2024</div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Minggu" score="2" />
          <Card teams="Rabu" score="1" />
        </div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Sabtu" score="2" />
          <Card teams="Kamis" score="0" />
        </div>
      </div>

      <div className="font-eurobold text-[12px] mt-8">
        Terakhir diperbarui: 13 Agustus 22:00 WIB
      </div>
    </div>
  );
};

export default Schedule;
