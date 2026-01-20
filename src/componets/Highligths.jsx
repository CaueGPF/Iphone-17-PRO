function Highlights() {

    const specs = [
      { value: '48MP', label: 'Sensor quad-pixel com foco automático', label2: 'Principal', color: 'text-blue-600' },
      { value: '12MP', label: 'Campo de visão de 120° com modo noturno', label2: 'Ultra Wide', color: 'text-orange-500' },
      { value: '12MP', label: 'Zoom óptico de 5x com estabilização', label2: 'Telefoto 5x', color: 'text-blue-600' },
    ];

    return (
      <section className='py-20 px-6 bg-black' id='design'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4'>Design revolucionário</h2>
            <p className='text-xl text-gray-400'>
              Cada detalhe foi pensado para criar a melhor experiência
            </p>
          </div>

          <div className='grid grid-cols-2 gap-8 mb-16'>
            <div className='bg-gray-900 rounded-3xl p-8'>
              <img
                className='w-full rounded-2xl mb-4'
                src='../../public/titanium-design.jpg'
                alt='iphone titanium'
              />
              <h3 className='font-bold mb-2 text-3xl'>Titânium Premium</h3>
              <p className='text-gray-300'>
                Estrutura em titânio de grau aeroespacial. o smartphone mais forte e leve.
              </p>
            </div>

            <div className='bg-gray-900 rounded-3xl p-8'>
              <img
                className='w-full rounded-2xl mb-4'
                src='../../public/ios-features.jpg'
                alt='IOS 2025'
              />
              <h3 className='font-bold mb-2 text-3xl'>IOS 26</h3>
              <p className='text-gray-300'>
                O sistema operacional mais avançado do mundo com IA integrada.
              </p>
            </div>
          </div>

          <div className='bg-gray-900 rounded-3xl p-12 mb-16' id='performance'>
            <h3 className='text-4xl font-bold mb-6 text-gradient'>A18 Pro</h3>
            <p className='text-gray-300 mb-6'>O chip mais poderoso em um smartphone</p>
            <img
              className='w-full rounded-2xl mb-4'
              src='../../public/chip-a18-pro.jpg'
              alt='chip a18'
            />

            <ul className='space-y-3 text-gray-300'>
              <li>CPU 20% mais rápida</li>
              <li>GPU 25% mais eficiente</li>
              <li>Neural Engine com 16 núcleos</li>
              <li>Ray Tracing acelerado por hardware</li>
            </ul>
          </div>

          <div className='text-center' id='camera'>
            <h3 className="text-4xl font-bold mb-10">Sistema de câmera Pro avançado</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specs.map((spec, index) => (
              <div key={index}>
                <div className="bg-gray-900 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-gray-600">
                  <div className={`text-4xl font-bold ${spec.color} mb-4`}>{spec.value}</div>
                  <h4 className="text-xl font-semibold mb-2">{spec.label2}</h4>
                  <p className="text-gray-400">{spec.label}</p>
                </div>
              </div>
            ))}
            </div>
          </div>


        </div>
      </section>
    );
}

export default Highlights