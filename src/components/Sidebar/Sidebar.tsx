import info from './SidebarInfo'

const Sidebar = () => {
  return (
    <div className='bg-sidebar-desktop bg-cover bg-no-repeat bg-bottom h-[27rem] p-6 flex flex-col gap-y-5 rounded-md xxs:bg-sidebar-mobile'>
      {info.map((item, idx) => (
        <div key={idx} className='flex items-center gap-x-5'>
          <h3 className='px-4 text-alabaster py-2 text-center border-2 border-alabaster rounded-full'>
            {/* text-black bg-alabaster */}
            {item.digit}
          </h3>
          <div>
            <h3>
              {item.step}
            </h3>
            <h3 className='text-alabaster font-bold'>
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar