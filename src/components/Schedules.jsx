const Card = ({ teams, score, set1, set2, set3, set4, set5 }) => {
  return (
    <div className="flex justify-center items-center font-eurobold text-[12px] gap-2 my-1">
      <div className="flex bg-[#0000004d] p-2 w-auto items-center">
        <img src={`/assets/${teams}.svg`} className="h-5 w-5 mr-2" alt="" />
        <div className="w-16 overflow-hidden text-ellipsis whitespace-nowrap">
          {teams}
        </div>
        <div className="flex">
          <div className="w-6 text-gray-300 text-xs">
            <span className="invisible">&nbsp;|&nbsp;</span>
            {set1}
          </div>
          <div className="w-6 text-gray-300 text-xs">
            {set2 ? "\u00A0|\u00A0" + set2 : ""}
          </div>
          <div className="w-6 text-gray-300 text-xs">
            {set3 ? "\u00A0|\u00A0" + set3 : ""}
          </div>
          <div className="w-6 text-gray-300 text-xs">
            {set4 ? "\u00A0|\u00A0" + set4 : ""}
          </div>
          <div className="w-6 text-gray-300 text-xs">
            {set5 ? "\u00A0|\u00A0" + set5 : ""}
          </div>
        </div>
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
          Kamis 15 Agustus 2024 (
          <span className="text-[#49e46d]">Finals</span>)
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Sabtu" score="" set1="" set2="" set3="" />
          <Card teams="Minggu" score="" set1="" set2="" set3="" />
        </div>
      </div>

      <div className="mt-8 mb-20">
        <div className="font-eurobold text-sm mt-5">
          Rabu 14 Agustus 2024 (
          <span className="text-[#49e46d]">Semi-finals</span>)
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Sabtu" score="3" set1="25" set2="25" set3="25" />
          <Card teams="Rabu" score="0" set1="13" set2="12" set3="7" />
        </div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card
            teams="Minggu"
            score="3"
            set1="25"
            set2="25"
            set3="23"
            set4="25"
          />
          <Card
            teams="Senin"
            score="1"
            set1="10"
            set2="22"
            set3="25"
            set4="22"
          />
        </div>
      </div>

      <div>
        <div className="font-eurobold text-sm mt-5">Minggu 11 Agustus 2024</div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Senin" score="0" set1="22" set2="21" />
          <Card teams="Sabtu" score="2" set1="25" set2="25" />
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Selasa" score="0" set1="23" set2="20" />
          <Card teams="Minggu" score="2" set1="25" set2="25" />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-eurobold text-sm mt-5">Senin 12 Agustus 2024</div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Senin" score="2" set1="25" set2="25" />
          <Card teams="Kamis" score="0" set1="16" set2="13" />
        </div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Selasa" score="1" set1="25" set2="21" set3="21" />
          <Card teams="Rabu" score="2" set1="18" set2="25" set3="25" />
        </div>
      </div>

      <div className="mt-8">
        <div className="font-eurobold text-sm mt-5">Selasa 13 Agustus 2024</div>
        <div className="mt-4">
          <div className="font-eurobold text-[#D4E2EA] text-xs">19:30 WIB</div>
          <Card teams="Minggu" score="2" set1="25" set2="22" set3="25" />
          <Card teams="Rabu" score="1" set1="12" set2="25" set3="22" />
        </div>
        <div className="mt-2">
          <div className="font-eurobold text-[#D4E2EA] text-xs">20:00 WIB</div>
          <Card teams="Sabtu" score="2" set1="25" set2="25" />
          <Card teams="Kamis" score="0" set1="9" set2="9" />
        </div>
      </div>

      <div className="font-eurobold text-[12px] mt-8">
        Terakhir diperbarui: 14 Agustus 22:00 WIB
      </div>
    </div>
  );
};

export default Schedule;
