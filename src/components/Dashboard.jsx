import { useDispatch, useSelector } from 'react-redux'
import { widgetManager } from '../redux/slice'
import Widget from './Widget'
import '../App.css'

const Dashboard = () => {

    const dispatch = useDispatch()

    const categories = useSelector((state) => state);

    const addWidget = (id) => {

        const newWidget = {
            id: Math.random().toString(36).substring(2, 9),
            name: "Random Name",
            text: "This is a Testing Widget"
        }

        // console.log(categories);

        const updateddata = categories.map((e) => {
            if (e.id === id) {
                return { ...e, widgets: [...e.widgets, newWidget] }
            }
            return e
        })

        dispatch(widgetManager(updateddata));
    }


    return (
        <>
            <main className='h-screen w-full bg-slate-700'>

                {
                    categories?.map((e, index) => {
                        return (
                            <div key={index} className=' px-4 py-4 flex flex-col gap-4 bg-slate-400  '>
                                <h1 className='text-2xl'>{e.name}</h1>
                                <div className='flex gap-6 py-4 px-4 widgetcollection overflow-x-scroll'>
                                    {
                                        e?.widgets?.map((widget, idx) => {
                                            return (
                                                <>
                                                    <Widget key={idx} id={widget.id} cid={e.id} title={widget.name} description={widget.text} />
                                                </>
                                            )
                                        })
                                    }
                                    <div className='w-80 min-w-80 h-40 flex items-center justify-center px-3 rounded-xl shadow-md bg-white border border-gray-200'>
                                        <button onClick={() => { addWidget(e.id) }} className="flex items-center gap-3 px-6 py-3 text-white text-xs font-bold uppercase bg-blue-500 rounded-lg shadow-md transition-all duration-600 ease-in-out hover:shadow-lg focus:opacity-85 active:opacity-85">
                                            <svg
                                                aria-hidden="true"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                ></path>
                                                <path
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    d="M17 15V18M17 21V18M17 18H14M17 18H20"
                                                ></path>
                                            </svg>
                                            ADD WIDGET
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </main>
        </>
    )
}

export default Dashboard
