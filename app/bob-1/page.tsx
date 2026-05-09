'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// --- ИЗМЕНЕНИЕ: Супер-элегантные шрифты ---
import { Cormorant_Garamond, Sacramento } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'] });
const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

// --- ДАННЫЕ ГЛАВЫ 1 ---
const chapterOne = {
  paragraphs: [
    "Yuqori sinfda kuzning hidi doim bir xil bo'ladi: bo'r, eski pardalarning changi va yaqinlashib kelayotgan vahima hidi.",
    "Men deraza oldidagi eng oxirgi partada o'tiribman. Men o'qigan yuzlab mangalar syujetiga ishonadigan bo'lsak, bu joy faqatgina aqlbovar qilmas voqealar girdobiga tortiladigan bosh qahramonlar uchun mo'ljallangan. Lekin keling, realist bo'lamiz: men bosh qahramon emasman. Eng yaxshi holatda, men — \"O'quvchi S\", sinf bo'sh ko'rinmasligi uchungina kerak bo'ladigan fon personajiman.",
    "Sinfda quloqni qomatga keltiruvchi shovqin hukm surardi. Doskada qiyshiq, shoshilinch harflar bilan shunday yozilgandi: «Madaniy festival! Bizning loyiha — PYESA!».",
    "Sinf sardori faol imo-ishoralar bilan orqa qatordagilardan balandroq ovozda gapirishga urinardi. Qizlar partalarni birlashtirib, kim liboslar tikishini qizg'in muhokama qilishar, yigitlar esa bosh yovuz qahramon roli kimga nasib etishi ustida tortishishardi. Havo tom ma'noda ularning energiyasidan uchqun sochardi. Ular kulishar, bir-birlarining gapini bo'lishar, ko'zlarida ishtiyoq yonardi.",
    "Men ularga o'zimning juda katta, qulay oversize-sviterimning yoqasi ortidan qarab turardim, ayniqsa qattiq kulgi portlashini eshitganida o'ng qulog'im asabiy pirpirab ketdi. Uzun, oq, paxmoq quyon qulog'i.",
    "Men beixtiyor boshimni yelkamga tortdim. Lekin, albatta, hech kim hech narsani sezmadi. Kiyim burmalari ostiga yashiringan paxmoq dumim stressdan tugun bo'lib qolsa ham — inson miyasi o'zining qulay «ko'r nuqtasi» bilan buni baribir reallikdan o'chirib tashlagan bo'lardi. Ular uchun men shunchaki Sumire edim. Doim burnini kitobga suqib yuradigan, tinch va biroz g'alati sinfdosh qiz.",
    "To'g'risini aytsam, bu qulay edi. Ko'rinmas bo'lish — mening ongli tanlovim. Hech kim seni doskaga chaqirmaydi, hech kim ziyofatlarda qadah so'zi aytishni so'ramaydi, hech kim ob-havo haqidagi noqulay suhbatlarni davom ettirishga majbur qilmaydi.",
    "Ammo aynan bugun, bu shovqinli, jonli sinfga qarab, ichimda nimadir g'amgin siqilayotganini his qildim.",
    "— Ssenariy! Bizga zudlik bilan tuzukroq ssenariy yozib beradigan odam kerak! — sinf sardorining umidsiz ovozi qulog'imga chalindi. — Axir biz shunchaki do'stlik kuchi bilan ajdahoni yenggan qahramon haqidagi hikoyani sahnalashtira olmaymiz-ku. Bu juda oddiy!",
    "— Bizda kim yozishni eplay oladi? — kimdir o'ylanib qolib savol berdi.",
    "Atrofda sukunat cho'kdi.",
    "Sumkamda bitta yon daftarim bor edi, unda men zerikkanimdan o'nlab syujet burilishlarini yozib chiqqan, to'qima dunyolarning tarixi va hech qachon ovoz chiqarib aytmaydigan dialoglarni o'ylab topgan edim. Men hikoyani qanday qilib qiziqarli qilishni bilardim. Nima uchun qahramon ikkilanishi kerakligini va tomoshabinlar nafasini yutib kuzatishi uchun ziddiyatni qanday to'g'ri qurishni bilardim.",
    "\"Qani, buni ayt,\" — pichirladi ichki ovozim. — \"Shunchaki qo'lingni ko'tar. 'Men urinib ko'rishim mumkin', de\".",
    "Yuragim tomog'imning qayeridadir ura boshladi. Partaning chetiga changallagan barmoqlarim oqarib ketdi. Ijtimoiy batareyam tanqidiy quvvat darajasidan ogohlantirib, qizil rangda miltillay boshladi. Agar men hozir ovoz chiqarsam, hamma menga qaraydi. Yigirmata juft ko'z. Ular mendan so'z kutishadi. Agar tutilib qolsam-chi? Ovozim qaltirab ketsa-chi? Yoki ular: \"Oho, u gapirishni bilar ekan-ku?\" deb o'ylashsa yoki g'oyamni ustidan kulishsa-chi?",
    "Men ko'zlarimni qattiq yumdim va... xuddi tarix darsligini o'qishga berilib ketgandek o'zini ko'rsatib, boshimni yanada pastga egdim.",
    "Sinfdagi sukunat qanday tez boshlangan bo'lsa, shunday tez tugadi. — Mayli, kelinglar shunchaki biror eski filmning syujetini ko'chirib qo'yaqolamiz! — qo'l siltadi yigitlardan biri va sinf yana muhokamalar shovqiniga g'arq bo'ldi.",
    "Imkoniyat qo'ldan boy berildi.",
    "Bir vaqtning o'zida ham yengillik, ham... o'zimdan hafsalam pir bo'lganini his qilib, chuqur xo'rsinib qo'ydim.",
    "Vaqt shunchalik tez o'tmoqda. Ularning barchasi qayergadir harakat qilishmoqda, xato qilishmoqda, urishishmoqda, yarashishmoqda, xotiralar yaratishmoqda. Men esa o'zimning qulay, xavfsiz sukunatimda o'tiribman va ularning nuriga uzoqdan qarab turibman. Bu maktab kunlari tugaganda nima bo'ladi? Butun dunyodan qo'rqadigan bu qo'rquvim bilan qayerga boraman?",
    "Nigohimni derazaga qaratdim. Kuzgi shamol osmondagi og'ir bulutlarni haydab borardi.",
    "Men o'z xohishim bilan ko'rinmasman. Ammo negadir aynan hozir kimdir meni payqashini shunchalik qattiq xohlab ketdim."
  ],
  img: '/images/1.webp'
};

// ============================================================
// Парящие лунные светлячки (Particles)
// ============================================================
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, 
      y: Math.random() * 100, 
      size: Math.random() * 3 + 1, 
      duration: Math.random() * 10 + 10, 
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#c4a6eb] rounded-full blur-[1px]"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 100, 0],
            x: [0, 50, -50, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Компонент абзаца
const FadeInParagraph = ({ text }: { text: string }) => (
  <motion.p
    initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 1, ease: "easeOut" }}
    className={`text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light ${cormorant.className}`}
  >
    {text}
  </motion.p>
);

export default function SumireLorePage() {
  return (
    <div className="min-h-screen bg-black md:bg-[#050408] text-white selection:bg-[#8a60c2] selection:text-white overflow-x-hidden scroll-smooth relative z-0">
      
      {/* Фоновые эффекты: Шум и Светлячки */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <FloatingParticles />

      {/* Классическое легкое фиолетовое свечение */}
      <div className="fixed top-[10%] left-[-10%] w-[50vw] h-[50vh] bg-[#8a60c2]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Кнопка назад */}
      <nav className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 flex items-center justify-between pointer-events-none">
        <a 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all font-sans"
        >
          <ArrowLeft size={14} /> Bosh sahifa
        </a>
      </nav>

      {/* Баннер. На мобилке - aspect-[4/3], на ПК - на весь экран. */}
      <header className="relative w-full z-10 flex flex-col md:block mb-10 md:mb-20">
        
        {/* Контейнер картинки */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:min-h-[100dvh] overflow-hidden"
        >
          {/* Идеальное растворение картинки */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 5%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.6) 20%, black 30%, black 40%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 5%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0.6) 20%, black 30%, black 40%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.4) 70%, transparent 100%)'
            }}
          >
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 4%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.3) 14%, rgba(0,0,0,0.6) 20%, black 28%, black 72%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.3) 86%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0.02) 96%, transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.02) 4%, rgba(0,0,0,0.1) 8%, rgba(0,0,0,0.3) 14%, rgba(0,0,0,0.6) 20%, black 28%, black 72%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0.3) 86%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0.02) 96%, transparent 100%)'
              }}
            >
              <Image 
                src={chapterOne.img} 
                alt="Sumire 1-Tom" 
                fill 
                className="object-cover object-center opacity-85 brightness-90 contrast-[1.1]" 
                unoptimized 
                priority
              />
            </div>
          </div>
          
          {/* Оптическое размытие (Blur) по краям */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none backdrop-blur-md"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 40%, black 85%)',
              maskImage: 'radial-gradient(ellipse at center, transparent 40%, black 85%)'
            }}
          />
        </motion.div>

        {/* Заголовок тома */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 text-center px-4 -mt-12 sm:-mt-20 md:m-0 md:absolute md:bottom-20 md:left-0 md:w-full flex flex-col items-center"
        >
          <span className="font-sans text-[#8a60c2] text-xs md:text-sm tracking-[0.4em] uppercase font-bold block mb-3 md:mb-4 drop-shadow-md">
            1 - Bob
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold text-white leading-snug md:leading-tight drop-shadow-lg ${cormorant.className}`}>
            O'z xohishi bilan ko'rinmas
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mt-6 md:mt-10" />
        </motion.div>
      </header>

      {/* Контент главы */}
      <main className="relative z-10 w-full pb-20">
        <div className="max-w-2xl mx-auto px-6 md:px-0 relative z-20">
          {chapterOne.paragraphs.map((text, idx) => (
            <FadeInParagraph key={idx} text={text} />
          ))}
        </div>
      </main>

      {/* Футер */}
      <footer className="relative py-20 md:py-24 border-t border-white/5 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${cormorant.className}`}>Davomi bor...</h3>
          <p className={`text-gray-400 text-xl md:text-2xl mb-10 ${sacramento.className}`}>Sumirening hikoyasini kuzatib boring</p>
          <a 
            href="/bob-2" 
            className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Keyingi bob
          </a>
        </motion.div>
      </footer>

    </div>
  );
}