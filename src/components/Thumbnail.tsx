
import Image from "next/image"; 
import avatar from '../../public/avatar.png';

export default function Thumbnail() {
    return(
        <div id="card" className="h-72 flex flex-row w-1/2 p-4">
            <div id="img-box" className="basis-1/3 bg-thumbnail-bg bg-cover bg-center">
                
            </div>
            <div id="text-box" className="basis-2/3 font-gotham p-7 flex flex-col justify-between text-black">
                <div id="content" className="flex flex-col space-y-3">
                    <div id="topic" className="font-gotham font-light text-xs">TECH</div>
                    <div id="title" className="font-gotham font-medium text-base"><p>Duis aute irure dolor in reprehenderit in voluptate</p></div>
                    <div className="font-light text-xs text-justify">
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>
                    </div>
                </div>
                <div id="author" className="flex justify-between items-center text-xs">
                    <div id="person" className="font-light flex items-center space-x-2">
                        <Image src={avatar} alt="avatar" width={20} height={20} />
                        <div id="name">Alec Benjamin</div>
                    </div>
                    <div id="date">17 Apr 24</div>
                </div>
            </div>
        </div>
    );
}