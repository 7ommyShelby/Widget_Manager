
import { useSelector, useDispatch } from "react-redux"
import { widgetManager } from "../redux/slice"
import { useState } from "react";

const Subsections = ({ cid }) => {

    const dispatch = useDispatch();

    const widgetlist = useSelector((state) => state.find((e) => e.id == cid))

    const [filterlist, setfilterlist] = useState(widgetlist)

    const removerHandler = (id) => {
        const filterlist = widgetlist.filter((e) => e.id !== id);
        setfilterlist(filterlist);
    }

    console.log(widgetlist);

    return (
        <>
            <div className="h-full flex flex-col gap-3">
                {
                    filterlist?.widgets?.map((widget, index) => {
                        return (
                            <div className="flex gap-2 items-center" key={index}>
                                <input onChange={() => removerHandler(widget.id)} type="checkbox" checked={widget.flag ? true : false} name="" id="" />
                                <h2 className="text-slate-900">{widget.name}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Subsections
