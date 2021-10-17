import MiiboLogo from "./MiiboLogo";
import SearchIcon from "./SearchIcon";

export default function Nav({open}) {
    return (
        <nav className="p-4 flex border-b-2 items-center justify-between">
    <div className="flex">
    <svg onClick={(e)=>{open(e)}} xmlns="http://www.w3.org/2000/svg" className="h-8 w-14 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>

      <MiiboLogo/>   
    </div>
           
    <SearchIcon/>
        </nav>
    )
}
