export default function OverFlowScroll({children}) {
    return (
        <div className="overflow-x-scroll py-1 md:overflow-x-hidden ">
            
             {children}
        </div>
    )
}
