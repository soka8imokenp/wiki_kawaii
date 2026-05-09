'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// --- SHRIFTLAR ---
import { Cormorant_Garamond, Sacramento } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'] });
const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

// --- 4-BOB MA'LUMOTLARI ---
const chapterFour = {
  paragraphs: [
    "Madaniy festival arafasida maktab doim biroz sehrlidek tuyuladi. Yo'laklar kartonlarga to'lib-toshgan, yarim ochiq xonalar eshiklaridan musiqa parchalari eshitilar, havo esa intiqlik hissidan g'uvullardi.",
    "Biz faollar zalining o'rtasida turib, sahnaga qarardik.",
    "Ustida yorilgan Muhr chizilgan ulkan faner qasr... aqlbovar qilmas darajada ajoyib ko'rinardi. Projektorlar yorug'ida toshlardagi yoriqlar haqiqiydik ko'rinar, to'q ranglar esa biz uzoq vaqt davomida o'ylab topgan o'sha qorong'u fentezi muhitini yaratib turgandi.",
    "— Biz buni uddaladik, — chuqur nafas chiqardi Aoi. Uning yuzida ko'k guashning izi qolib ketgan, sochlari to'zg'igan edi, lekin ko'zlari shunchalik yorqin porlardiki, ular butun zalni elektr tokisiz ham yorita olardi.",
    "— Bir guruh havaskorlar uchun yomon emas, — miyig'ida kuldi Ryu, toza futbolkasining cheti bilan ko'zoynagini artib.",
    "Men ularning biroz orqasida turardim. Barmoqlarimdan hamon akril hidi kelar, uzoq vaqt cho'qqayib o'tirganimdan belim og'rirdi. Men oxirigacha ketmagan mitti qora bo'yoq dog'i bor bo'lgan oddiy, biroz xippa burnimni beixtiyor ishqalab qo'ydim.",
    "— Hey, bollar! — Aoi bizga o'girildi. — Tomga chiqamizmi? Bugun quyosh botishi shunchaki aqldan ozdirarli, biz buni ko'rishimiz shart.",
    "Odatda «qayergadir birga boraylik» degan so'zlar menda zudlik bilan qochish istagini uyg'otardi. Lekin hozir men shunchaki indamay bosh irg'adim va ularning ortidan ergashdim.",
    "Biz gumburlayotgan beton zinalardan ko'tarilib, og'ir temir eshikni itarib ochdik. Shu zahotiyoq yuzimizga salqin kuz shamoli urildi. Osmon to'q binafsharang oltin va to'q qizil rangga aylanib yonardi, shahar uzra cheksiz gumbaz bo'lib yoyilgandi.",
    "Biz to'rli to'siq oldiga keldik. Ryu panjaraga suyandi, Aoi esa yuzini baxtli tarzda shamolga burib turardi. Shamol mening oversize-sviterim ostiga kirayotganini his qilib, men ularning yoniga turdim. Odamlarning «ko'r nuqta»si tufayli bu ikkisi hech qachon ko'rmaydigan uzun oq quloqlarim shamolda xotirjam pirpirardi.",
    "Men pastdagi bu ulkan, shovqinli shaharga qarab, to'satdan bitta muhim narsani anglab yetdim.",
    "Qo'rquv yo'qolgandi.",
    "Meni oxirgi parta orqasiga yashirinishga majbur qiladigan o'sha kelajak oldidagi qo'rquv. Yoshlik deb atalmish bu «tush» tugashi va men boshqalarning hayotini kuzatibgina chetda turib qolishimdan qo'rqish hissi.",
    "\"Bu tush tugaganda nima bo'ladi?\" — deb tez-tez o'ylardim men oldinlari. Endi men javobni bilardim. Hech qanday qo'rqinchli narsa bo'lmaydi.",
    "Chunki kelajak — bu qandaydir ulkan, qo'rqinchli noma'lumlik emas. Bu shunchaki ertangi kun. Ertaga biz o'z pyesamizni o'ynaymiz. Kimdir albatta so'zlarini unutib qo'yadi, karton devor tebranib ketishi mumkin, Aoi esa sahna ortida vahima qiladi. Lekin biz u yerda birga bo'lamiz.",
    "Men sinf sardorining yuz tuzilishiga, keyin esa o'z kalonkasidan taralayotgan qandaydir ohangni sekin xirgoyi qilib turgan Ryuga qaradim.",
    "Ular mening yashirin tog' qishlog'idan kelgan yokay ekanligimni bilishmaydi. Ular mening paxmoq dumimni ko'rishmaydi. Lekin ular \"meni\" ko'rishdi. Hikoyalar o'ylab topishni yaxshi ko'radigan va kitob do'konlaridagi maslahatchilardan o'lgudek qo'rqadigan o'sha haqiqiy Sumireni. Va ular meni shundayligimcha qabul qilishdi.",
    "Ko'kragimda yana o'sha issiqlik yondi. Endi hech qachon yo'qolmasligiga ishonchim komil bo'lgan yorqin, nur sochayotgan tuyg'u. Bo'sh sinfda eshitgan o'sha ovozim esa, o'zimning ovozim bo'lib chiqdi.",
    "Quloqlarim botayotgan quyoshning so'nggi nurlarini tutib olgandek dikkayib turardi.",
    "Men hali ham introvert edim. Men hali ham dam olish kunlarini uyda, bir jild manga o'qib o'tkazishni afzal ko'rardim. Lekin agar bu shovqinli dunyo bir kun kelib yana meni ismim bilan chaqirsa... men boshqa yashirinmayman.",
    "Men so'z beraman."
  ],
  img: '/images/4.png'
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

export default function ChapterFourPage() {
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
          href="/bob-3" 
          className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all font-sans"
        >
          <ArrowLeft size={14} /> 3 - Bob
        </a>
      </nav>

      {/* Баннер */}
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
                src={chapterFour.img} 
                alt="Sumire 4-Bob" 
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
            4 - Bob
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold text-white leading-snug md:leading-tight drop-shadow-lg ${cormorant.className}`}>
            Bizning ufq
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mt-6 md:mt-10" />
        </motion.div>
      </header>

      {/* Контент главы */}
      <main className="relative z-10 w-full pb-20">
        <div className="max-w-2xl mx-auto px-6 md:px-0 relative z-20">
          {chapterFour.paragraphs.map((text, idx) => (
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
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${cormorant.className}`}>Hikoya yakuni</h3>
          <p className={`text-gray-400 text-xl md:text-2xl mb-10 ${sacramento.className}`}>Sumirening sarguzashti o'z nihoyasiga yetdi...</p>
          <a 
            href="/" 
            className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#8a60c2]/20 border border-[#8a60c2]/50 text-white font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#8a60c2] hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(138,96,194,0.3)]"
          >
            Bosh sahifaga qaytish
          </a>
        </motion.div>
      </footer>

    </div>
  );
}