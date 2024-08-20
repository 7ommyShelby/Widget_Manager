import { useDispatch, useSelector } from 'react-redux'
import { widgetManager } from '../redux/slice'
import { useState } from 'react'


const Widget = ({ cid, id, title, description }) => {

  const dispatch = useDispatch();

  const [categories, setCategory] = useState(useSelector((state) => state));

  const removeWidget = (cid, wid) => {

    setCategory((prev) => {

      const updateddata = prev.map((e) => {
        if (e.id === cid) {
          
          return { ...e, widgets: e.widgets.filter((widget) => widget.id !== wid) }
        }
        console.log(e);
        return e
        
      })

      dispatch(widgetManager(updateddata))
      return updateddata

    })
  }
  // console.log("widget", categories);



  return (
    <>
      <div
        className="min-w-80 w-96 overflow-hidden flex justify-between bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
      >
        {/* <div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
        ></div> */}
        <div className="p-6 relative z-10">
          <p className="text-xl font-semibold text-gray-800">{title}</p>
          <p className="mt-2 text-wrap text-gray-600">{description}
          </p>
        </div>
        <button onClick={() => { removeWidget(cid, id) }} className='absolute flex right-0 top-0 px-6 py-2 bg-red-700 text-slate-400 font-extrabold' >X</button>
      </div>

    </>
  )
}

export default Widget
