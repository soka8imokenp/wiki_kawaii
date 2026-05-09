'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// --- SHRIFTLAR ---
import { Cormorant_Garamond, Sacramento } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'] });
const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

// --- 3-BOB MA'LUMOTLARI ---
const chapterThree = {
  paragraphs: [
    "O'sha kundan boshlab hayotim sezdirmasdan odatiy, xavfsiz izidan chiqib ketdi.",
    "Agar kimdir bir oy oldin menga ixtiyoriy ravishda darsdan keyin qolib, sinfdoshlarim davrasida vaqt o'tkazishimni aytganida, men u odamga fantastika yozishni maslahat bergan bo'lardim. Lekin reallik ancha g'alatiroq narsa bo'lib chiqdi.",
    "Faollar zali eski parket, PVA yelimi va yangi akril bo'yoq hidiga to'lgandi. Linoleumni iflos qilmaslik uchun polga eski gazetalar to'shab chiqdik, va endi bu joy tartibsiz ustaxonani eslatardi.",
    "Men o'zimning sevimli, o'lchamsiz sport shimimda cho'qqaygancha o'tirib, ingichka mo'yqalam bilan \"Muhrli qasr\"imizning karton g'ishtlariga ehtiyotkorlik bilan yoriqlar chizardim. Mening ijtimoiy batareyam ideal bo'lishdan hali yiroq edi. Butun sinf yig'ilganda, men hamon boshqalarning orqasiga yashirinar va indamay turaverardim. Lekin bu yerda, faqat Aoi, uyqusiragan Ryu va art-klubdagi yana bir nechta bolalar bo'lgan yarim bo'sh zalda, men o'zimni... xotirjam his qilardim.",
    "Bu yerda sipo suhbatlar qurish shart emas edi. Shunchaki yonma-yon o'tirib, Ryuning portativ kalonkasidan taralayotgan lo-fi hip-hopni eshitib, birgalikda bitta ishni qilish mumkin edi.",
    "— Xo'sh, rassomlar va ssenaristlar, mo'yqalamlarni chetga qo'yamiz! — zal eshiklari taraqlab ochildi va ostonada Aoi paydo bo'ldi. Uning qo'llarida g'olibona tarzda uchta karton quti bor edi. — Men kechki ovqat olib keldim!",
    "Qornim xiyonatkorona qurillab ketdi.",
    "Biz to'g'ridan-to'g'ri gazetalar ustida aylana bo'lib o'tirdik. Kimdir qog'oz stakanlar va kola olib keldi. Men e'tiborni o'zimga ortiqcha tortmaslikka harakat qilib va erigan pishloqni shimimga tomizib qo'ymaslikni o'ylab, ehtiyotkorlik bilan bir bo'lak pitsani oldim.",
    "— Bilasizlarmi, — Aoi bir tishlab, mamnuniyat bilan ko'zlarini qisib qo'ydi, — biz endi boshlaganimizda, barbod bo'lamiz deb o'ylagandim. Lekin kecha ssenariyni rollarga bo'lib o'qiganimizda... Sumire, sening dialoglaring — bu shunchaki dahshatli darajada ajoyib. Ayniqsa, yovuz qahramon u-siz dunyo u uchun hech narsani anglatmasligini aytgan joyi. Men yig'lab yuborishimga oz qoldi!",
    "Kolaga tikilib qoldim.",
    "Yuzim neon chiroqlaridek bir zumda lovullab ketdi. Yon daftarda jimgina matn yozish — boshqa narsa, tirik odamlar senga qarab turganda ulardan maqtov eshitish — butunlay boshqa narsa.",
    "— B-bu... shunchaki klishe... — pichirladim men, qizarib ketgan yuzimni yashirish uchun koftamning yoqasini balandroq tortishga urinib.",
    "O'z bo'lagini xotirjamlik bilan chaynab o'tirgan Ryu to'satdan menga qaradi-da, kulimsirab qo'ydi.",
    "— Sumire, senda bu yerda... — u barmog'ini yuzi atrofida noaniq aylantirdi. — Bo'yoq tegib qolibdi.",
    "Men qotib qoldim. Ko'zlarimni qisib, dahshat bilan burnimning eng uchida qora akrilning yorqin, yog'li dog'i borligini tushunib yetdim. Aftidan, chalg'igan paytimda unga bexosdan tegib ketganman.",
    "Vahima!",
    "— Voy! — men bo'yoqni yanada ko'proq chaplab, burnimni shoshilinch yengim bilan ishqalay boshladim. Mening ichki ovozim yana qichqirdi: \"SHARMARANDALIK! Sen masxarabozga o'xshab qolding! Hozirning o'zida gazetalar tagiga ko'milib ol!\"",
    "Lekin bolalar ustimdan kulishning o'rniga, shunchaki mehribonlik bilan tabassum qilishdi.",
    "— Tegma, — dedi Ryu miyig'ida kulib. — Bu chinakam ijodkorning jangovar bo'yog'i. Senga yarashyapti.",
    "— To'ppa-to'g'ri! — uni qo'llab-quvvatladi Aoi. — Endi sen rasman bizning art-guruhimizning bir qismisan!",
    "Men burnimni ishqalashni to'xtatdim. Qo'llarimni tushirdim.",
    "Zalda issiq edi. Pitsa va bo'yoq hidi anqirdi. Ular menga qandaydir g'alati, indamas qiz yoki ko'rinmas odamdek emas. Ular menga o'z odamlaridek qarashardi.",
    "Odatda charchoq yoki qo'rquvdan tushib turadigan uzun quloqlarim endi musiqa ritmiga mos ravishda xotirjam tebranardi.",
    "Odamlarda o'sha g'alati \"ko'r nuqta\" borligi naqadar yaxshi. Bo'lmasa ular hozir polda ular bilan birga o'tirgan bu g'alati yokay-qizning qanchalik aqlbovar qilmas, g'alati darajada baxtli ekanini ko'rgan bo'lishardi.",
    "Men uzoq vaqt ichida birinchi marta o'zimga javoban samimiy, garchi juda uyatchang bo'lsa-da, tabassum qilishga ruxsat berdim.",
    "— Rahmat... — dedim sekin. Va bu safar ovozim ham qaltiramadi."
  ],
  img: '/images/3.webp'
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

export default function ChapterThreePage() {
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
          href="/bob-2" 
          className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all font-sans"
        >
          <ArrowLeft size={14} /> 2 - Bob
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
                src={chapterThree.img} 
                alt="Sumire 3-Bob" 
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
            3 - Bob
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold text-white leading-snug md:leading-tight drop-shadow-lg ${cormorant.className}`}>
            Bo'yoq va issiq pitsaning hidi
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mt-6 md:mt-10" />
        </motion.div>
      </header>

      {/* Контент главы */}
      <main className="relative z-10 w-full pb-20">
        <div className="max-w-2xl mx-auto px-6 md:px-0 relative z-20">
          {chapterThree.paragraphs.map((text, idx) => (
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
            href="/bob-4" 
            className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Keyingi bob
          </a>
        </motion.div>
      </footer>

    </div>
  );
}