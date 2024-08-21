import { useDispatch, useSelector } from 'react-redux'
import { widgetManager } from '../redux/slice'
import Widget from './Widget'
import '../App.css'
import { useEffect, useState } from 'react'
import Subsections from './Subsections';


const Dashboard = () => {

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [widgetName, setWidgetName] = useState('');
    const [widgetText, setWidgetText] = useState('');
    const [inputId, setInputId] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const categories = useSelector((state) => state);
    // const [sidebar, setSidebar] = useState(false);

    const addWidget = (id, name, text) => {

        const newWidget = {
            id: Math.random().toString(36).substring(2, 9),
            // flag: true,
            name: name,
            text: text
        }

        // console.log(newWidget , "categoryid =",id);

        const updateddata = categories.map((e) => {
            if (e.id === id) {
                console.log(id);
                return { ...e, widgets: [...e.widgets, newWidget] }
            }
            return e
        })

        dispatch(widgetManager(updateddata));
        setWidgetName('')
        setWidgetText('')
        closeModal()
    }

    const [search, setSearch] = useState('')

    const [widgetlist, setwidgetlist] = useState([])

    // const [filterwidgetlist, sefiltertwidgetlist] = useState([])

    useEffect(() => {
        const arr = []

        categories.map((e) => {
            return e.widgets.map((ele) => {
                arr.push(ele.name)
            })
        })
        setwidgetlist(arr);

    }, [categories])

    console.log(widgetlist);

    console.log(search);

    // const [cid, setCid] = useState(categories[0]?.id)


    return (
        <>
            <main className=' w-full h-screen '>

                <header className='px-6 py-2 flex justify-between items-center sticky top-0 z-20 bg-yellow-700 '>
                    <h1 className='text-4xl text-gray-100 font-bold uppercase'>Dashboard</h1>
                    <div className='w-[50%] h-[30%] bg-slate-400 rounded-xl relative'>
                        <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search Widgets...' className='w-full outline-none border-none px-4 py-2 rounded-xl' type="input" />
                        <div className={` flex-col w-full bg-slate-100 rounded-lg ${search !== '' ? 'flex px-4 py-2' : 'none'}`} >
                            {
                                search && widgetlist.map((e) => {
                                    if (e.startsWith(search)) {
                                        return (
                                            <>
                                                <h2 className='text-white'>
                                                    {e}
                                                </h2>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    {/* <div>
                        <button className="flex items-center gap-3 px-6 py-3 text-white text-xs font-bold uppercase bg-slate-600 border-[1px] rounded-lg shadow-md transition-all duration-600 ease-in-out hover:shadow-lg focus:opacity-85 active:opacity-85">
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
                    </div> */}
                </header>

                <section className='flex flex-1 w-full h-full bg-neutral-200  relative'>

                    <div className='h-full flex flex-col gap-1 categorycontainer overflow-y-scroll w-full'>
                        {
                            categories?.map((e, index) => {
                                return (
                                    <div key={index} className='border border-slate-600 rounded-xl px-4 py-2 flex flex-col   '>
                                        <h1 className='text-2xl mb-1 font-medium uppercase -tracking-tighter underline underline-offset-2'>{e.name}</h1>
                                        <div className='flex w-full gap-4 py-2 px-4 widgetcollection overflow-x-scroll'>
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

                                                <button onClick={() => { console.log(e.id); setInputId(e.id); openModal() }} className="flex items-center gap-3 px-6 py-3 text-white text-xs font-bold uppercase bg-blue-500 rounded-lg shadow-md transition-all duration-600 ease-in-out hover:shadow-lg focus:opacity-85 active:opacity-85">
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
                                                {isOpen && (
                                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                                        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                                                            <h2 className="text-2xl font-bold mb-4">Create Widget</h2>
                                                            <div>
                                                                <div className="mb-4">
                                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                        Widget Name
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        value={widgetName}
                                                                        onChange={(e) => setWidgetName(e.target.value)}
                                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                                                        required
                                                                    />
                                                                </div>

                                                                <div className="mb-4">
                                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                                        Widget Text
                                                                    </label>
                                                                    <textarea
                                                                        value={widgetText}
                                                                        onChange={(e) => setWidgetText(e.target.value)}
                                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                                                        rows="4"
                                                                        required
                                                                    ></textarea>
                                                                </div>

                                                                <div className="flex justify-end">
                                                                    <button
                                                                        type="button"
                                                                        onClick={closeModal}
                                                                        className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button

                                                                        onClick={() => { addWidget(inputId, widgetName, widgetText) }}
                                                                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                                                    >
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }</div>
                </section>
            </main>
        </>
    )
}

export default Dashboard
