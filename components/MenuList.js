
export default function MenuList({text,children}) {
    return (
<li className="flex  space-x-3">
    {children}
   <p className="font-semibold">{text}</p>
</li>
    )
}
