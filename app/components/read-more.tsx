import Image from "next/image";
import '../globals.css';

export function ReadMore(props) {
    console.log(props,'readmore');
    return (
        <div className="read-more-btn py-3 relative">
        <button>
          <div className="absolute top-[50%] left-0 read-more-hexagon w-[40px] h-[40px]">
            <Image
              src="/read-more.png"
              width={40}
              height={40}
              alt="read more hexagon icon"
              className="shadow-white float-end"
            />
          </div>
          <p className="px-4 text-gray-400" style={{ fontSize: 16}}>立即製作</p>
        </button>
      </div>
    );
}