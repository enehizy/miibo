import SearchIcon from './SearchIcon';

export default function Search() {
    return (
        <div className="  border-2 border-black rounded-md  inline-flex">
            <input type="text" placeholder="which state or city" className="p-4 border-black"/>
            <button className="bg-brandyellow  px-6 py-5">
             <SearchIcon/>
            </button>
        </div>
    )
}
