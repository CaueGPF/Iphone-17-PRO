function NavBar () {
    return (
      <nav className='fixed top-0 w-full z-50'>
        <div className='absolute inset-0 bg-black/80 backdrop-blur-md'></div>
        <div className='relative z-10 max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8'>
          <a className='hover:text-gray-300' href='#design'>
            Design
          </a>
          <a className='hover:text-gray-300' href='#camera'>
            Câmera
          </a>
          <a className='hover:text-gray-300' href='#performance'>
            Performance
          </a>
          <a className='hover:text-gray-300' href='#colors'>
            Cores
          </a>

          <button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full'>Comprar</button>
        </div>
      </nav>
    );
}

export default NavBar