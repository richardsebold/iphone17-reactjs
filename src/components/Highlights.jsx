function Highlights() {

    return (
        <section className="bg-black py-20 px-6 " id="design">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionario</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiencia</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className= "w-full rounded-2xl mb-4" src="../../public/img/titanium-design.jpg" alt="Design titanium" />
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. 0 smartphone mais forte e leve.</p>

                    </div>
                    
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className= "w-full rounded-2xl mb-4" src="../../public/img/ios-features.jpg" alt="IOS 2025" />
                        <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
                        <p className="text-gray-300">O Sistema operacional mais avançado do mundo IA integrada.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient ">A18 PRO</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso de um smartphone</p>
                    <img className= "w-full rounded-2xl mb-4" src="../../public/img/chip-a18-pro.jpg" alt="chip a18 pro" />

                    <ul className="space-y-3 text-gray-300">
                        <li>O mais forte e mais leve chip de um smartphone</li>
                        <li>Processamento mais rápido</li>
                        <li>Menor consumo de energia</li>
                        <li>Ray-tracing de alta qualidade</li>
                    </ul>
                </div>

                <div className="text-center" id="camera">
                    <h3 className="text-4xl font-bold mb-10">Sistema de camera Pro avançado</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transtion-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automatico</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transtion-all duration-300">
                            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra wide</h4>
                            <p className="text-gray-400">Campo de visao 120 com modo noturno</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transtion-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                            <p className="text-gray-400">Zoom optico de 5x com estabilizacao</p>
                        </div>
                    </div>

                    
                </div>

            </div>
        </section>
    )
}

export default Highlights