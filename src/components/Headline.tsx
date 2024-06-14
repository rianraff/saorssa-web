export default function Headline() {
    return(
        <div id="card" className="w-full h-60 flex flex-row px-4">
            <div id="text-box" className="basis-1/3 bg-black font-gotham p-7 flex flex-col justify-between">
                <div id="content" className="flex flex-col space-y-3">
                    <div id="topic" className="font-gotham font-light text-xs">TECH</div>
                    <div id="title" className="font-gotham font-medium text-2xl">Duis aute irure dolor in reprehenderit in voluptate</div>
                </div>
                <div id="author" className="flex justify-between text-xs">
                    <div id="person" className="font-light">
                        <div id="avatar"></div>
                        <div id="name">Alec Benjamin</div>
                    </div>
                    <div id="date">MONDAY - 17 Apr 24</div>
                </div>
            </div>
            <div id="img-box" className="basis-2/3 bg-headline-bg bg-cover bg-center">
                
            </div>
        </div>
    );
}