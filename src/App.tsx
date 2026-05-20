import { useState } from 'react'
import { Menu, X, ShoppingBag, ArrowRight, Check, Star, Mail, Instagram, Twitter, Globe } from 'lucide-react'

// ============================================
// CONFIGURATION
// ============================================
const SHOW_PRODUCTS = false

const products = [
  {
    id: 1,
    title: "Guide Anti-SIBO",
    price: 47,
    description: "Protocole complet de 30 jours pour soulager les ballonnements et réparer ton intestin.",
    image: "https://placehold.co/400x500/16a34a/ffffff?text=Guide+SIBO",
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "50 Aliments à Éviter",
    price: 9,
    description: "Le guide d'appel avec les substituts et tableau imprimable.",
    image: "https://placehold.co/400x500/ea580c/ffffff?text=50+Aliments",
    badge: "Populaire"
  }
]

// ============================================
// NAVBAR
// ============================================
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="section-container max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-200">
              <span className="text-white font-bold text-sm tracking-tight">GR</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-dark tracking-tight">Gut Reset</span>
              <span className="block text-[10px] text-gray-400 -mt-1 font-medium tracking-wide uppercase">Nutrition Digitale</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <a href="#about" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-all">À propos</a>
            <a href="#method" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-all">Méthode</a>
            {SHOW_PRODUCTS && (
              <a href="#products" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-all">Boutique</a>
            )}
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-all">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {SHOW_PRODUCTS ? (
              <a href="#products" className="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 flex items-center gap-2">
                <ShoppingBag size={16} />
                Voir la boutique
              </a>
            ) : (
              <a href="#newsletter" className="px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-xl hover:bg-accent-600 transition-all shadow-lg shadow-accent-200 flex items-center gap-2">
                <Mail size={16} />
                Me prévenir
              </a>
            )}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-1 border-t border-gray-100">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg font-medium transition-all">À propos</a>
            <a href="#method" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg font-medium transition-all">Méthode</a>
            {SHOW_PRODUCTS && (
              <a href="#products" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg font-medium transition-all">Boutique</a>
            )}
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg font-medium transition-all">Contact</a>
            <div className="pt-2">
              {SHOW_PRODUCTS ? (
                <a href="#products" onClick={() => setIsOpen(false)} className="block mx-4 py-3 bg-brand-600 text-white text-center rounded-xl font-semibold shadow-lg">Voir la boutique</a>
              ) : (
                <a href="#newsletter" onClick={() => setIsOpen(false)} className="block mx-4 py-3 bg-accent-500 text-white text-center rounded-xl font-semibold shadow-lg">Me prévenir du lancement</a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================
// HERO
// ============================================
function Hero() {
  return (
    <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="section-container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star size={14} className="fill-accent-500" />
              Bientôt disponible
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] mb-6 tracking-tight">
              Libère ton intestin.
              <span className="block text-brand-600 mt-2">Retrouve ta vie.</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Des guides nutritionnels scientifiquement informés pour soulager les ballonnements, 
              le SIBO et les troubles digestifs. Sans médicaments, sans restriction extrême.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#newsletter" className="btn-primary text-base">
                Être informé du lancement
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#method" className="btn-secondary text-base">
                Découvrir la méthode
              </a>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
                  <Check size={12} className="text-brand-600" />
                </div>
                <span>100% naturel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center">
                  <Check size={12} className="text-brand-600" />
                </div>
                <span>Basé sur la science</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-200 to-accent-200 rounded-3xl blur-2xl opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-6 sm:p-8 border border-gray-100">
                <div className="w-64 sm:w-80 h-80 sm:h-96 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Gut Reset</p>
                    <p className="text-sm opacity-70">Guides Nutritionnels</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-dark">Prochain guide</p>
                    <p className="text-xs text-gray-500">Anti-SIBO · 30 jours</p>
                  </div>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 text-xs font-bold rounded-full">Bientôt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// ABOUT
// ============================================
function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="section-container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Pourquoi Gut Reset ?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-4 tracking-tight">
            Parce que ton intestin mérite mieux qu'un "c'est du stress"
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <div className="w-12 h-12 bg-brand-100 rounded-2xl flex items-center justify-center mb-4"><Check size={24} className="text-brand-600" /></div>,
              title: "Sans bullshit",
              desc: "Pas de promesses magiques. Juste des protocoles testés, basés sur la recherche scientifique actuelle sur le SIBO et les FODMAPs."
            },
            {
              icon: <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center mb-4"><Star size={24} className="text-accent-600" /></div>,
              title: "Résultats concrets",
              desc: "Ballonnements réduits en 7-10 jours. Douleurs digestives diminuées en 2-3 semaines. Énergie retrouvée en 30 jours."
            },
            {
              icon: <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4"><Globe size={24} className="text-blue-600" /></div>,
              title: "Accessible partout",
              desc: "Guides numériques téléchargeables instantanément. Compatible smartphone, tablette, ordinateur. Mises à jour gratuites à vie."
            }
          ].map((item, i) => (
            <div key={i} className="card p-8">
              {item.icon}
              <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// METHOD
// ============================================
function Method() {
  return (
    <section id="method" className="py-20 lg:py-28 bg-brand-50">
      <div className="section-container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">La méthode</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-4 tracking-tight">
            3 phases. 30 jours. Un ventre libéré.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "01", title: "Éliminer", desc: "Retirer les 50 aliments qui sabotent ton intestin. Réparer la muqueuse avec des nutriments ciblés.", color: "bg-accent-500" },
            { num: "02", title: "Éradiquer", desc: "Chasser les bactéries en excès avec le protocole alimentaire et les suppléments stratégiques.", color: "bg-brand-500" },
            { num: "03", title: "Reconstruire", desc: "Réintroduire progressivement les aliments. Reconstituer une flore intestinale saine et durable.", color: "bg-blue-500" }
          ].map((step, i) => (
            <div key={i} className="card p-8 h-full">
              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <span className="text-white font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PRODUCTS (caché par défaut)
// ============================================
function ProductsSection() {
  if (!SHOW_PRODUCTS) return null
  
  return (
    <section id="products" className="py-20 lg:py-28 bg-white">
      <div className="section-container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Boutique</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mt-4 tracking-tight">
            Choisis ton guide
          </h2>
          <p className="text-gray-600 mt-4">Tous nos guides sont en format PDF, téléchargeables instantanément.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="card overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">{product.badge}</span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-dark">{product.price} €</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                <button className="w-full py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
                  Acheter maintenant
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// NEWSLETTER
// ============================================
function Newsletter() {
  return (
    <section id="newsletter" className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-accent-900/20"></div>
      <div className="section-container max-w-4xl mx-auto relative">
        <div className="text-center">
          <div className="w-16 h-16 bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={32} className="text-brand-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Sois le premier informé
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Inscris-toi pour recevoir un email dès que nos guides sont disponibles. 
            Bonus : reçois gratuitement les 10 premiers aliments à éviter.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ton-email@exemple.com" className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-brand-500 transition-all" />
            <button type="submit" className="px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-all shadow-lg whitespace-nowrap">
              S'inscrire
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            Pas de spam. Uniquement des infos sur le lancement. Désinscription à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="section-container max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-200">
                <span className="text-white font-bold text-sm">GR</span>
              </div>
              <span className="font-bold text-xl text-dark">Gut Reset</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm text-sm">
              Guides nutritionnels pour soulager les troubles digestifs. 
              Créés avec rigueur scientifique et passion humaine.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-dark mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-gray-600 hover:text-brand-600 transition">À propos</a></li>
              <li><a href="#method" className="text-gray-600 hover:text-brand-600 transition">Méthode</a></li>
              {SHOW_PRODUCTS && <li><a href="#products" className="text-gray-600 hover:text-brand-600 transition">Boutique</a></li>}
              <li><a href="#newsletter" className="text-gray-600 hover:text-brand-600 transition">Newsletter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-dark mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600"><Mail size={14} /> hello@gutreset.co</li>
              <li className="flex items-center gap-2 text-gray-600"><Instagram size={14} /> @gutreset</li>
              <li className="flex items-center gap-2 text-gray-600"><Twitter size={14} /> @gutreset</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Gut Reset. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-600 transition">Mentions légales</a>
            <a href="#" className="hover:text-brand-600 transition">Confidentialité</a>
            <a href="#" className="hover:text-brand-600 transition">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// APP
// ============================================
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Method />
      <ProductsSection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
