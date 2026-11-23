import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUp, ArrowUpRight, ChevronDown, CodeXml, MapPin, Menu, MessageCircle, Phone, Plus, Quote, TrendingUp, X } from 'lucide-react'
import './style.css'

const site = 'https://movictel.com'
const book = site + '/book-a-consultation/'
const media = name => '/media/' + name
const services = [
  ['Marketing', 'Social Media Marketing', 'Create campaigns people remember.', 'social.jpg'],
  ['Search', 'SEO & Local SEO', 'Get found when customers are looking.', 'seo.jpg'],
  ['Messaging', 'WhatsApp Business API', 'Turn enquiries into conversations.', 'wa.jpg'],
  ['Messaging', 'Bulk SMS & RCS', 'Send updates and offers at scale.', 'sms.jpg'],
  ['Development', 'Website & App Development', 'Build experiences that turn visits into action.', 'web.jpg'],
  ['Creative', 'Graphic Design & Landing Pages', 'Give every campaign a clear next step.', 'design.jpg']
]
const clients = [
  ['Jaigyan Realty', 'jaigyan.png'], ['Shri Krishna Group', 'krishna.webp'],
  ['Sheetla Properties', 'sheetla.webp'], ['Suryansh Realty', 'suryansh.webp'],
  ['Vinnora Realty', 'vinnora.webp'], ['Royal Homes', 'royal.webp']
]
const questions = [
 ['What is bulk SMS marketing and how effective is it?', 'Bulk SMS sends timely alerts, reminders and offers to opted-in customers. Results depend on timing and relevance.'],
 ['What is a digital marketing agency and how can it help my business?', 'An agency plans and runs online campaigns to help you reach customers and generate enquiries.'],
 ['How does SEO help improve website traffic and rankings?', 'SEO improves how search engines understand your pages and match them to relevant searches.'],
 ['What digital marketing services are best for small businesses?', 'A clear website and local SEO are useful starting points. Paid campaigns can help when you have a specific goal and budget.'],
 ['How does local SEO help my business get more customers?', 'It helps nearby customers discover your business and find practical details like your hours and contact information.'],
 ['Can social media marketing generate real leads and sales?', 'Targeted campaigns can send interested people to an enquiry form, online shop or messaging channel.'],
 ['What is the difference between Google Ads and Meta Ads?', 'Google Search Ads reach customers as they search. Meta Ads reach selected audiences across platforms such as Instagram and Facebook.'],
 ['Can I automate messages for customer follow-ups?', 'WhatsApp Business API and SMS can support opt-in follow-ups, reminders and updates.'],
 ['Do you offer custom website design or templates?', 'Movictel offers web development and landing page design. Contact the team to discuss the right approach for your project.']
]
const groupLinks = ['#marketing','#marketing','#promote','#promote','#development','#development']
const socials = [['IG', 'Instagram', 'https://www.instagram.com/movictel'], ['in', 'LinkedIn', 'https://www.linkedin.com/company/movictel/'], ['f', 'Facebook', 'https://www.facebook.com/Movictel/']]

function Socials() {
  return <div className="socials">{socials.map(([mark, name, url]) => <a href={url} key={name} aria-label={name}><span aria-hidden="true">{mark}</span></a>)}</div>
}

function Header() {
  const [menu, setMenu] = useState(false)
  return <header><div className="nav wrap">
    <a href="#home" aria-label="Movictel home"><img className="logo" src={media('logo-color.png')} alt="Movictel"/></a>
    <button type="button" className="menu" aria-expanded={menu} aria-controls="navigation" aria-label={menu ? 'Close menu' : 'Open menu'} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    <nav id="navigation" className={menu ? 'open' : ''} onClick={event => { if (event.target.closest('a')) setMenu(false) }}>
      <a href="#home">Home</a><details><summary>Services <ChevronDown size={13}/></summary><div>{services.map(([,name], i) => <a key={name} href={groupLinks[i]} onClick={event => event.currentTarget.closest('details').removeAttribute('open')}>{name}</a>)}</div></details>
      <a href={site + '/blog/'}>Blog</a><a href={site + '/about/'}>About</a><a href="#contact">Contact</a><a className="mobile-consult" href={book}>Book a consultation <ArrowUpRight size={16}/></a>
    </nav>
    <div className="nav-end"><Socials/><a className="button small" href={book}>Let’s talk <ArrowUpRight size={16}/></a></div>
  </div></header>
}


function Hero() {
  const channels = ['Bulk SMS','WhatsApp Business API','Voice SMS','Website Development','App Development','SEO & Visibility']
  return <><section className="new-hero" id="home"><div className="wrap hero-layout">
    <motion.div className="hero-copy" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.55}}>
      <p className="location"><MapPin size={16}/> Jaipur, Rajasthan</p>
      <h1>Best Digital Marketing &amp; Cloud Communication Agency</h1>
      <p className="intro">Movictel is a top-rated digital marketing agency in Jaipur, offering a 360-degree suite of internet marketing services.</p>
      <div className="hero-links"><a className="button" href={book}>Book a consultation <ArrowUpRight size={18}/></a><a className="outline-button" href="#services">Explore services <ArrowDown size={17}/></a></div>
    </motion.div>
    <figure className="hero-photo"><img src={media('hero.jpg')} fetchPriority="high" alt="Glass office buildings viewed from street level"/><figcaption><span/> Marketing · Messaging · Development</figcaption></figure>
  </div></section><div className="channel-strip"><div className="wrap">{channels.map((channel,i) => <a key={channel} href={['#promote','#promote','#promote','#development','#development','#marketing'][i]}>{channel}<ArrowUpRight size={14}/></a>)}</div></div>
  <section className="wrap agency-copy"><p>With expertise in bulk SMS marketing, WhatsApp Business API automation, performance marketing, and social media marketing services, we help brands generate qualified leads, automate communication, and boost conversions through data-driven strategies.</p><p>From lead generation and customer engagement to marketing automation and conversion optimization, we deliver innovative, scalable, and ROI-focused solutions tailored for modern, growth-oriented businesses.</p></section></>
}

const groups = [
  ['marketing','Marketing','Build visibility, trust, and conversions with our performance-driven digital marketing strategies.','seo.jpg',TrendingUp,['Social Media Marketing','Branding Services','Website & Local SEO','Content Writing Services']],
  ['promote','Promote','Engage your business customers instantly with scalable communication tools and services.','wa.jpg',MessageCircle,['WhatsApp Business API','Bulk SMS Services','RCS Messaging Services','Voice SMS Services']],
  ['development','Development','Build high-performing websites, apps, and landing pages that convert visitors into customers.','web.jpg',CodeXml,['Website Development','Mobile App Development','Graphic Designing','Landing Page Design']]
]

function Services() {
  return <section className="wrap section" id="services"><div className="section-head"><h2>Our services</h2><p>We offer end-to-end digital marketing, messaging solutions, and web/app development services to help businesses grow faster.</p></div>
  <div className="service-editorial">{groups.map(([id,title,description,photo,Icon,items]) => <motion.article key={id} id={id} initial={{y:12}} whileInView={{y:0}} viewport={{once:true}} className="service-feature">
    <div className="service-visual"><img src={media(photo)} alt="" loading="lazy"/></div>
    <div className="service-detail"><div className="service-label"><Icon size={22}/><h3>{title}</h3></div><p>{description}</p><ul>{items.map(name => <li key={name}><span>{name}</span></li>)}</ul><a className="service-explore" href={site+'/services/'}>Explore {title.toLowerCase()} services <ArrowUpRight size={17}/></a></div>
  </motion.article>)}</div></section>
}

function Industries() {
  return <section className="industry section"><div className="wrap"><div className="section-head"><h2>Built around your industry.</h2></div>
    {[['real-estate','Real estate','Turn property interest into qualified leads.','estate.jpg','property.webp'],['education','Education','Build stronger school brands.','campus.jpg','school.webp']].map(([id,label,title,photo,campaign]) =>
      <article className="industry-banner photo-card" id={id} key={id}><img src={media(photo)} alt="" loading="lazy"/><div className="photo-copy"><span>{label}</span><h3>{title}</h3><a className="button small" href={book}>Discuss your campaign <ArrowUpRight size={16}/></a><a className="campaign-link" href={media(campaign)}>View campaign <ArrowUpRight size={15}/></a></div></article>)}
  </div></section>
}

function Clients() {
  return <section className="section clients"><h2 className="wrap">Trusted by leading companies</h2><p className="wrap client-note">See a list of companies who awarded us the best digital marketing agency in Jaipur.</p><div className="marquee"><div className="marquee-track">{[0,1].map(copy => <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>{clients.map(([name,src]) => <li key={name}><img src={media(src)} alt={name} loading="lazy"/></li>)}</ul>)}</div></div></section>
}

function FAQ() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  return <section className="wrap section faq-layout"><div><h2>Frequently asked questions</h2><p>Whether you’re looking for an SEO company, website development company, Google Ads agency, or a complete digital marketing partner, here are answers to the questions we receive most often.</p></div><div><div className="accordion">{questions.map(([question,answer], i) => <div key={question}><button aria-expanded={active === i} aria-controls={'answer-' + i} onClick={() => setActive(active === i ? -1 : i)}>{question}<Plus size={18} className={active === i ? 'rotated' : ''}/></button><div id={'answer-' + i}><AnimatePresence initial={false}>{active === i && <motion.div className="answer" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduce ? 0 : .23}}><p>{answer}</p></motion.div>}</AnimatePresence></div></div>)}</div></div>
  </section>
}


const quotes = [
 ['Movictel’s bulk SMS services completely transformed our customer communication process.','Rohit Sharma','E-commerce Marketing Head'],
 ['Movictel’s WhatsApp automation services significantly improved how we connect with our customers.','Pooja Verma','CEO, Healthcare Startup'],
 ['Movictel proved to be the best web development agency in Jaipur for our growing business needs.','Ashish Sen','Founder, Automobile Company']
]
function Testimonials() {
 return <section className="testimonials section"><div className="wrap"><div className="section-head"><h2>What our clients say</h2><p>Authentic stories from businesses who chose Movictel and scaled faster. See what they have to say about our digital marketing services in Jaipur and beyond.</p></div><div className="quote-grid">{quotes.map(([copy,name,role])=><figure key={name}><Quote size={25}/><blockquote>{copy}</blockquote><figcaption><strong>{name}</strong><span>{role}</span></figcaption></figure>)}</div></div></section>
}
function Footer() {
 return <><section className="closing" id="contact"><div className="wrap"><div><h2>Ready to grow<br/>your business?</h2><p>Boost your online presence with result-driven digital marketing services. From SEO to paid ads, we help you attract quality leads, increase conversions, and scale faster.</p></div><a href={book} className="button">Get started <ArrowUpRight size={20}/></a></div></section>
 <footer className="site-footer"><div className="wrap"><div className="footer-grid">
 <div><a href="#home"><img className="logo" src={media('logo.webp')} alt="Movictel"/></a><p>Movictel is a digital marketing agency in Jaipur offering internet marketing and cloud communication services.</p><Socials/></div>
 <div><h3>Navigate</h3><a href="#home">Home</a><a href="#services">Services</a><a href={site+'/blog/'}>Blog</a><a href={site+'/about/'}>About</a><a href={site+'/contact/'}>Contact</a></div>
 <div><h3>Services</h3>{services.map(([,name],i)=><a key={name} href={groupLinks[i]}>{name}</a>)}</div>
 <div><h3>Visit &amp; contact</h3><address><MapPin size={18}/> Office 21, Tagore Nagar, Satya Colony, near Gopi Tower, C. M. Gora Hospital, 200 Ft Bypass, Ajmer Road, Jaipur, Rajasthan 302021</address><a href="tel:+919001955232"><Phone size={17}/> +91 90019 55232</a><a href="https://wa.me/919001955232"><MessageCircle size={17}/> WhatsApp us</a></div>
 </div><div className="copyright"><span>© {new Date().getFullYear()} Movictel. All rights reserved.</span><a href="#home">Back to top <ArrowUp size={17}/></a></div></div><div className="footer-wordmark" aria-hidden="true">movictel</div></footer></>
}
function App() {
  return <MotionConfig reducedMotion="user"><Header/><main><Hero/><Industries/><Services/><Clients/><FAQ/><Testimonials/><Footer/></main></MotionConfig>
}

createRoot(document.getElementById('root')).render(<App/>)



