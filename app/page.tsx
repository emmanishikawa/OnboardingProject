import Image from "next/image";

export default function Home() {
    return (
        <>
        {/**name brief intro interests, pic */}
        <div className="flex h-screen w-screen justify-center items-center 
            bg-[#d8e4eb]">
            <div className="flex flex-row h-[600px] w-[350px] 
                        md:h-[350px] md:w-[600px] 
                            p-5
                            bg-[#f7fbfc] rounded-md drop-shadow-sm">
                <div className="flex flex-col">
                    <h1 className="text-[22px]">emma nishikawa</h1>
                    <p className="">second year / sixth</p>
                    <p className="">major: cognitive science - ml & nc</p>
                    <p className="">minor: computer science</p>
                </div>
                <div>
                    <img src="" alt="profile photo"/>pic
                </div>
            </div>
        </div>
        </>
    );
}
