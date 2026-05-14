import { motion } from 'motion/react';
import { Instagram, Star } from 'lucide-react';

const whatsappLink = "https://wa.me/555199027036?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20otomodela%C3%A7%C3%A3o!";

const LogoSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <g>
      <path d="M 50 50 C 15 25 30 -5 50 15 C 70 -5 85 25 50 50 Z" />
      <path d="M 50 34 C 41 23 44 14 50 20 C 56 14 59 23 50 34 Z" fill="currentColor" stroke="none" />
      <g transform="rotate(90 50 50)">
        <path d="M 50 50 C 15 25 30 -5 50 15 C 70 -5 85 25 50 50 Z" />
        <path d="M 50 34 C 41 23 44 14 50 20 C 56 14 59 23 50 34 Z" fill="currentColor" stroke="none" />
      </g>
      <g transform="rotate(180 50 50)">
        <path d="M 50 50 C 15 25 30 -5 50 15 C 70 -5 85 25 50 50 Z" />
        <path d="M 50 34 C 41 23 44 14 50 20 C 56 14 59 23 50 34 Z" fill="currentColor" stroke="none" />
      </g>
      <g transform="rotate(270 50 50)">
        <path d="M 50 50 C 15 25 30 -5 50 15 C 70 -5 85 25 50 50 Z" />
        <path d="M 50 34 C 41 23 44 14 50 20 C 56 14 59 23 50 34 Z" fill="currentColor" stroke="none" />
      </g>
    </g>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-sage selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-light/90 backdrop-blur-md h-24 flex items-center transition-all">
        <div className="w-full flex items-center justify-between px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-2">
            <LogoSVG className="w-8 h-8 text-brand-dark" />
            <span className="font-sans font-medium text-2xl tracking-tight text-brand-dark lowercase ml-1">
              dermakey
            </span>
          </div>
          <div className="hidden md:flex items-center gap-12 font-sans text-xs font-bold uppercase tracking-[0.15em] text-brand-dark">
            <a href="#protocolos" className="md:hover:text-brand-sage transition-colors cursor-pointer">Procedimentos</a>
            <a href="#contato" className="md:hover:text-brand-sage transition-colors cursor-pointer">Avaliação Online</a>
            <a href="#sobre" className="md:hover:text-brand-sage transition-colors cursor-pointer">Sobre</a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center gap-2 bg-brand-dark text-brand-light px-8 py-3.5 font-bold text-xs uppercase tracking-widest md:hover:bg-brand-sage transition-colors duration-500 rounded-full"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-[1200px]"
        >
          <div className="text-brand-sage text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-8">
            Estética Avançada
          </div>
          <h1 className="text-[12vw] md:text-[8vw] lg:text-[110px] leading-[0.85] font-extrabold uppercase tracking-tight text-brand-dark mb-10">
            Sua Orelha<br />
            <span className="font-serif italic text-brand-sage font-normal">Como Sempre Quis.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl font-light opacity-80 mb-14 mx-auto leading-relaxed">
            O procedimento não cirúrgico que corrige as orelhas proeminentes com recuperação rápida, menos dor e resultados imediatos.
          </p>
          <a 
            href={whatsappLink} 
            className="inline-flex items-center gap-4 bg-brand-sage text-brand-light px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold md:hover:bg-brand-dark transition-colors duration-500 rounded-full shadow-xl shadow-brand-sage/20"
          >
            Falar com Especialista
          </a>
        </motion.div>
      </section>

      {/* Differentials */}
      <section className="py-24 md:py-32 bg-brand-sage text-brand-light px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
           >
             <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight mb-8">
               A Devolução<br />da <span className="font-serif italic font-normal">Autoestima.</span>
             </h2>
             <p className="text-lg md:text-xl opacity-90 font-light max-w-md leading-relaxed">
               Esqueça a necessidade de bloco cirúrgico e meses de recuperação. A otomodelação simplifica a correção estética.
             </p>
           </motion.div>
           <div className="flex flex-col gap-12">
             {[
               { title: "Sem Centro Cirúrgico", desc: "Procedimento minimamente invasivo, realizado no próprio consultório." },
               { title: "Para Todas as Idades", desc: "A partir de 7 anos já podem realizar a técnica, ajudando a evitar bullying escolar." },
               { title: "Recuperação Rápida", desc: "Retorno imediato às atividades do dia a dia. Você não precisa pausar sua vida." }
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col border-l border-brand-light/30 pl-8"
                >
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-3">{item.title}</h3>
                  <p className="opacity-80 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Myths/Truths & Dra. Melissa */}
      <section id="sobre" className="py-24 md:py-40 px-6 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
             <div className="aspect-[3/4] overflow-hidden rounded-[2rem]">
               <motion.img 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/drmelissa.jpg" 
                  className="w-full h-full object-cover transition-all duration-700"
                  alt="Dra. Melissa atendendo paciente"
               />
             </div>
             <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-10 -right-6 md:-right-16 bg-white p-8 md:p-12 shadow-2xl rounded-3xl max-w-[320px] md:max-w-sm"
             >
                <span className="font-serif text-6xl text-brand-sage absolute -top-6 left-8">"</span>
                <h3 className="font-serif text-3xl italic mb-2 mt-4 text-brand-dark">Dra. Melissa</h3>
                <div className="text-[10px] text-brand-sage uppercase tracking-[0.2em] font-bold mb-4">Fundadora</div>
                <p className="text-sm font-light opacity-80 leading-relaxed text-brand-dark">
                  "Combinamos excelência técnica e acolhimento para oferecer resultados que vão além da estética, devolvendo a confiança aos nossos pacientes."
                </p>
             </motion.div>
          </motion.div>

          <div className="md:pl-16 mt-20 md:mt-0">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <div className="text-brand-sage text-sm font-bold tracking-[0.2em] uppercase mb-6">A Verdade Técnica</div>
               <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight mb-8">
                 O Cuidado com<br /> o <span className="font-serif italic font-normal text-brand-sage">Paciente.</span>
               </h2>
               <ul className="space-y-8 mt-12">
                  {[
                    "Procedimento sob medida para o seu formato de rosto.",
                    "Menos riscos e muito mais acessível que a otoplastia.",
                    "Resultados harmônicos com a sua beleza natural."
                  ].map((text, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="text-xl md:text-2xl font-serif italic text-brand-dark leading-snug border-l-2 border-brand-sage pl-6"
                    >
                      {text}
                    </motion.li>
                  ))}
               </ul>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Cases / Resultados */}
      <section className="py-24 md:py-32 bg-brand-light px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="text-brand-sage text-sm font-bold tracking-[0.2em] uppercase mb-6">Resultados Reais</div>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight text-brand-dark">
              A Arte da <span className="font-serif italic font-normal text-brand-sage">Otomodelação.</span>
            </h2>
            <p className="max-w-2xl text-lg opacity-80 mt-6 mx-auto font-light text-brand-dark">
              Transformações autênticas. O equilíbrio perfeito entre a técnica avançada e a beleza natural de cada paciente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl relative group cursor-pointer border border-brand-dark/5"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={`/paciente${num}.jpg`}
                  className="w-full h-full object-cover"
                  alt={`Caso Clínico Dermakey ${num}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <div className="text-brand-sage font-bold uppercase tracking-widest text-xs mb-2">Antes & Depois</div>
                   <div className="text-brand-light font-serif italic text-3xl">Paciente 0{num}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols (Minimalist List) */}
      <section id="protocolos" className="py-24 md:py-40 bg-brand-dark text-brand-light">
        <div className="max-w-[1400px] mx-auto px-6 mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
           >
             <div className="text-brand-sage text-sm font-bold tracking-[0.2em] uppercase mb-6">Nossos Protocolos</div>
             <h2 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold uppercase leading-[0.9] tracking-tight max-w-4xl">
               A Excelência que <span className="font-serif italic font-normal text-brand-sage">Você Merece.</span>
             </h2>
           </motion.div>
           <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-md font-light opacity-80 text-lg leading-relaxed pb-4"
           >
             Planos de tratamento personalizados com valores justos. Agende hoje mesmo sua avaliação gratuita e descubra o protocolo ideal para você.
           </motion.p>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col border-t border-brand-light/20">
            {[
              { title: "Otomodelação", text: "Referência na região sul. Correção de orelhas de abano de forma definitiva, sem cirurgia, sem cortes e sem necessidade de centro cirúrgico." },
              { title: "Toxina Botulínica", text: "Suaviza a contração muscular prevenindo e amenizando linhas de expressão na testa e ao redor dos olhos. Aspecto descansado e rejuvenescido." },
              { title: "Preenchedores", text: "Reposição de volume e melhora da hidratação com ácido hialurônico de alta qualidade. Ideal para lábios, mandíbula, mento, nariz e zigomático." },
              { title: "Bioestimuladores", text: "Injetáveis ou fios que regeneram os tecidos estimulando células a produzirem colágeno natural, promovendo firmeza e potente rejuvenescimento facial." },
              { title: "Skinbooster", text: "Hidratação profunda de dentro para fora. Melhora cicatrizes de acne, ameniza aparência de olheiras e traz um viço incomparável à pele." }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={i}
                className="group border-b border-brand-light/20 py-10 md:py-16 px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between md:hover:bg-brand-sage transition-all duration-700 cursor-pointer"
              >
                <h3 className="text-3xl md:text-5xl font-serif italic mb-4 md:mb-0 group-hover:pl-6 transition-all duration-500">{item.title}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 md:w-1/2">
                  <p className="opacity-60 group-hover:opacity-100 transition-opacity duration-500 font-light leading-relaxed flex-1">
                    {item.text}
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap hidden md:block">
                    Agendar →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 bg-brand-sage text-brand-light px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="text-brand-dark text-sm font-bold tracking-[0.2em] uppercase mb-6">Depoimentos</div>
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight text-brand-light">
              A Confiança Que <span className="font-serif italic font-normal text-brand-dark">Entregamos.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                name: "Alice",
                text: "Não só indico como garanto a satisfação! Os procedimentos são muito bem executados e com excelentes produtos, mas o que faz toda a diferença é a profissional!! Super sincera, foco real na beleza e bem-estar, nada de empurrar procedimentos desnecessários. Merece muito mais que cinco estrelas! Esse lugar é 10!!! Amo!"
              },
              {
                name: "Cristina",
                text: "Muito bem atendida! Pesquisei bastante e foi o melhor custo beneficio. Profissionais super qualificadas. Já fiz um tratamento e já estou pensando e voltar novamente para outro procedimento. Estão de parabéns!"
              },
              {
                name: "Ingrid",
                text: "Recebemos um ótimo atendimento, desde a consulta online, até o dia do procedimento do meu filho, que saiu da clínica realizado, mega feliz. Obrigada Melissa pelo excelente atendimento, estávamos os dois muitooo nervosos, e ela nos acalmando o tempo todo, com toda certeza retorno para outros procedimentos."
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-brand-light p-10 md:p-12 rounded-[2.5rem] shadow-xl text-brand-dark flex flex-col"
              >
                <div className="flex items-center gap-1 mb-6 text-brand-sage">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="opacity-80 font-light leading-relaxed mb-8 flex-1 italic text-brand-dark text-lg">
                  "{review.text}"
                </p>
                <div className="font-bold text-sm uppercase tracking-widest text-brand-sage pt-6 border-t border-brand-dark/10">
                  {review.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-24 md:py-32 bg-brand-light px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-brand-sage text-sm font-bold tracking-[0.2em] uppercase mb-6">Fale Conosco</div>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight text-brand-dark">
            Agende sua <span className="font-serif italic font-normal text-brand-sage">Avaliação.</span>
          </h2>
          <p className="text-lg opacity-80 mt-6 max-w-2xl mx-auto font-light text-brand-dark">
            Deixe seus dados abaixo e entraremos em contato rapidamente pelo WhatsApp para entender suas necessidades.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-brand-dark/5"
          onSubmit={(e) => { e.preventDefault(); window.open(whatsappLink, '_blank'); }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-dark">Nome Completo</label>
              <input type="text" id="name" required className="border-b-2 border-brand-dark/20 py-3 bg-transparent text-brand-dark focus:outline-none focus:border-brand-sage transition-colors placeholder-brand-dark/30" placeholder="Digite seu nome" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-brand-dark">WhatsApp</label>
              <input type="tel" id="phone" required className="border-b-2 border-brand-dark/20 py-3 bg-transparent text-brand-dark focus:outline-none focus:border-brand-sage transition-colors placeholder-brand-dark/30" placeholder="(51) 90000-0000" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-10">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-dark">Como podemos ajudar?</label>
            <textarea id="message" rows={3} className="border-b-2 border-brand-dark/20 py-3 bg-transparent text-brand-dark focus:outline-none focus:border-brand-sage transition-colors resize-none placeholder-brand-dark/30" placeholder="Ex: Gostaria de saber mais sobre a otomodelação..."></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-dark text-brand-light py-5 uppercase tracking-[0.2em] text-sm font-bold md:hover:bg-brand-sage transition-colors duration-500 rounded-full shadow-xl">
            Enviar Mensagem
          </button>
        </motion.form>
      </section>

      {/* CTA & Footer */}
      <footer className="bg-brand-light pt-10 md:pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 mb-32 items-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-brand-dark">
               Pronto para <br/><span className="font-serif italic font-normal text-brand-sage">Transformar?</span>
             </h2>
             <p className="text-lg md:text-xl font-light opacity-80 mb-12 max-w-md text-brand-dark leading-relaxed">
               A otomodelação pode mudar a forma como você se enxerga. Faça uma avaliação sem compromisso.
             </p>
             <a href={whatsappLink} className="inline-flex items-center justify-center bg-brand-dark text-brand-light px-10 py-5 uppercase tracking-[0.2em] text-sm font-bold md:hover:bg-brand-sage transition-colors duration-500 rounded-full shadow-2xl">
               Agendar via WhatsApp
             </a>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-white rounded-[2.5rem] shadow-xl border border-brand-dark/5 overflow-hidden flex flex-col h-full min-h-[450px]"
           >
              <div className="p-10 md:p-12 pb-8">
                <div className="text-brand-sage text-sm font-bold tracking-[0.2em] uppercase mb-6">Nossa Localização</div>
                <p className="font-bold text-2xl md:text-3xl uppercase tracking-wide text-brand-dark mb-2">Rua José de Alencar, 521</p>
                <p className="text-base md:text-lg uppercase tracking-widest opacity-70 text-brand-dark">Sala 404 - Menino Deus</p>
              </div>
              <div className="flex-1 w-full relative mt-auto border-t border-brand-dark/5">
                <iframe
                  src="https://www.google.com/maps?q=Rua+Jos%C3%A9+de+Alencar,+521,+Porto+Alegre+-+RS&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-700"
                ></iframe>
              </div>
           </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto border-t border-brand-dark/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-widest font-bold opacity-60 text-brand-dark">
           <div className="flex items-center gap-2">
             <LogoSVG className="w-6 h-6" />
             <span>Dermakey © {new Date().getFullYear()}</span>
           </div>
           <a href="https://instagram.com/clinicadermakey" className="md:hover:text-brand-sage transition-colors flex items-center gap-2">
             <Instagram className="w-4 h-4" />
             @clinicadermakey
           </a>
           <div>
             Desenvolvido por <a href="https://jvitorvargasdev.com.br" className="underline md:hover:text-brand-sage transition-colors">J. Vítor Vargas Dev</a>
           </div>
        </div>
      </footer>
    </div>
  );
}

