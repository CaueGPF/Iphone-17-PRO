function Footer() {
  const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas'];

  const sections = [
    {
      tittle: 'Comprar e Saber Mais',
      links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comprar modelos', 'Acessórios'],
    },

    {
      tittle: 'Especificações',
      links: ['Características Tecnicas', 'Câmera', 'Bateria', 'Display'],
    },

    {
      tittle: 'Suporte',
      links: ['Suporte ao iPhone', 'AppleCare+', 'IOS 19', 'Contato'],
    },

    {
      tittle: 'Apple',
      links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras'],
    },
  ];

  return (
    <footer className='bg-gray-900 border-t border-gray-800 '>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className='font-semibold mb-4'>{section.tittle}</h4>
              <ul className='space-y-2 text-sm text-gray-400'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href='#' className='hover:text-white cursor-pointer'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='border-t border-gray-800 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className="text-base text-gray-400">Copyright © 2025 Apple Inc. Todos os direitos reservados</p>
            <div className='flex gap-6 text-sm text-gray-400'>
              {buttonLinks.map((buttonLink, index) => (
                <a href='#' key={index} className='hover:text-white'>
                  {buttonLink}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
