import Home from "@/app/page";
import NavButton from "./navbutton";
import Experience from "@/app/experience/page";
import Projects from "@/app/project/page";

export default function NavBar() {
    return (
        <>
            <div className='flex justify-center items-center
                        h-16 w-screen top-0
                        fixed z-10 
                        bg-white/50 backdrop-blur-sm border-[1px] border-white'>
                <div className='flex flex-row gap-5
                                md:w-[800px] p-5
                                text-[18px] decoration-wavy'>
                    <NavButton destinaton=" " children="Home" />
                    <NavButton destinaton="experience" children="Experience" />
                    <NavButton destinaton="project" children="Projects" />
                </div>
            </div>
        </>
    )
}