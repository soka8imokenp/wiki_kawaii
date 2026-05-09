'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import Image from 'next/image';

// --- ИЗМЕНЕНИЕ: Супер-элегантные шрифты ---
import { Cormorant_Garamond, Sacramento } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'] });
const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

// --- ДАННЫЕ ГЛАВЫ ---
const chapterZero = {
  paragraphs: [
    "Mening ismim Sumire. Men o'n besh yoshdaman, yuqori sinfning birinchi kursida o'qiyman, qulay oversize-sviterlarni, ko'k choyni va manga o'qishni yaxshi ko'raman. Ha, aytgancha… tepa sochim orasidan ikkita uzun oq quyon quloqlari chiqib turadi, orqa tomonimda esa paxmoq dumim yashiringan.",
    "Ha, eng haqiqiy....",
    "Aslida, mening hayotim qandaydir shiddatli shahar fentezisi syujetiga aylanishi kerak edi. Orqamdan allaqachon maxsus xizmatlar, olimlar yoki hech bo'lmaganda kamerali muxbirlar quvishlari kerak edi. Lekin, ma'lum bo'lishicha, insoniyatda bitta qiziq \"bug\" bor ekan — idrokdagi ulkan ko'r nuqta. Men sochlarimni yoyib olib, odamga to'la metro vagonida ketsam ham, odamlar menga xuddi ko'rmagandek qarayverishadi. Ularning miyasi xuddi shunday deydi: \"Aha, oq quloqlar. Balki kospleydir. Yoki optik illyuziya. Yaxshisi, kreditim haqida o'ylay\".",
    "Tog'lar orasida yashiringan qishlog'imiz oqsoqollari bizga doim shunday derdilar: \"Asosiy Qoida — hech qachon odamlarga kimligingizni aytmang!\". Nimaga? Hech kim eslolmaydi. \"Ota-bobolarimiz taqiqlagan, demak mumkin emas\" degan gap bor. Shaxsan menga bu juda ma'qul. To'g'risini aytsam, men uchun ortiqcha og'iz ochishning o'zi qo'rqinchli.",
    "Chunki bu dunyodagi eng katta dushmanim — yovuz yokay ovchilari emas. Mening eng asosiy dushmanim — bu kitob do'konidagi maslahatchi.",
    "Ular to'satdan oldimga quvnoq tabassum bilan kelib, \"Sizga yordam bera olamanmi?\" deb so'rashganda, mening ijtimoiy batareyam dahshatli qisirlash bilan nolga tushadi. Tashqaridan men, ehtimol, juda sirli, sovuq va xotirjam nigohli zo'r o'quvchi qizdek ko'rinarman. Lekin ayni shu paytda ichimda havo hujumidan ogohlantiruvchi sirena chalinayotgan bo'ladi.",
    "Men tishlarimni g'ijirlata boshlayman, atrofdagilarga ko'rinmaydigan dumim stressdan dirijabl kattaligidek shishib ketadi, miyamda esa faqat bitta vahimali o'y charx uradi: \"A-A-A-A, NIMA DEB JAVOB BERAY?! 'Yo'q, rahmat' deymi? Birdaniga bu juda qo'pol eshitilsa va u xafa bo'lib qolsachi?! Agar 'ha' desam, GAPLASHISHGA to'g'ri keladi! Iltimos, ey osmon, hoziroq mayda atomlarga bo'linib, yer yutib yuboraqolsin!\"",
    "Shuning uchun mening ideal kunim juda oddiy. Maktabdan omon qaytish (iloji boricha hech kim doskaga chiqarmasligi kerak), uyga yugurib kirib, eshikni hamma qulflardan qulflash, chuqur nafas olish... va nihoyat o'zimga qaytish. Bir choynak choy damlab, yumshoq yotoqqa o'zini otish va sevimli manganing yangi bobini ochish.",
    "Faqat o'sha yerda, chizilgan sahifalar orasidagina o'zimni haqiqatdan xotirjam his qilaman. 2D-personajlar sendan ob-havo haqida zerikarli suhbat qurishni talab qilmaydi. Va eng asosiysi, qandaydir zo'r syujet burilishidan quyon duming xursandlikdan dir-dir titrasa ham, ular bunga umuman e'tibor berishmaydi.",
    "Xullas, bu mening hikoyam. Uni shunchaki o'z holiga qo'yishlarini judayam xohlaydigan bitta oy ruhining hikoyasi… Voy. Menimcha, siz buni juda uzoq o'qib yubordingiz. Iltimos, menga bunday qaramang, hozir yana vahimaga tushishni boshlayman!.."
  ],
  img: '/images/0.webp'
};

// ============================================================
// ВАУ-ЭФФЕКТ: Парящие лунные светлячки (Particles)
// ============================================================
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, duration: number }>>([]);

  useEffect(() => {
    // Генерируем 20 случайных светлячков
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Позиция по ширине %
      y: Math.random() * 100, // Позиция по высоте %
      size: Math.random() * 3 + 1, // Размер от 1px до 4px
      duration: Math.random() * 10 + 10, // Длительность анимации от 10с до 20с
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
    <div className="min-h-screen bg-black md:bg-[#050408] text-white selection:bg-[#8a60c2] selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* Фоновые эффекты: Шум, Свечения и Светлячки */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="fixed top-[10%] left-[-10%] w-[50vw] h-[50vh] bg-[#8a60c2]/10 rounded-full blur-[120px] pointer-events-none" />
      <FloatingParticles />

      {/* Кнопка назад */}
      <nav className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 flex items-center justify-between pointer-events-none">
        <a 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all font-sans"
        >
          <ArrowLeft size={14} /> KawaiiUZ
        </a>
      </nav>

      {/* Шапка (Hero Section) */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex flex-col items-center w-full"
        >
          {/* Логотип */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="relative w-20 h-20 md:w-28 md:h-28 mb-6 md:mb-8"
          >
            <Image 
              src="/images/logo.webp" 
              alt="Sumire Logo" 
              fill 
              className="object-contain" 
              unoptimized 
            />
          </motion.div>

          <h1 className={`text-6xl md:text-[160px] font-bold tracking-widest text-white mb-0 leading-none drop-shadow-[0_0_30px_rgba(138,96,194,0.4)] ${cormorant.className}`}>
            SUMIRE
          </h1>
          <p className={`text-4xl md:text-7xl text-[#c4a6eb] mt-0 md:mt-[-25px] drop-shadow-lg ${sacramento.className}`}>
            Sukunatdagi ovoz
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 opacity-40"
        >
          <ChevronDown size={30} />
        </motion.div>
      </header>

      {/* Контент главы */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 pb-20">
        
        {/* Заголовок тома */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-sans text-[#8a60c2] text-xs md:text-sm tracking-[0.4em] uppercase font-bold block mb-4 md:mb-6">
            0 - Tom
          </span>
          <h2 className={`text-3xl md:text-5xl font-bold text-white leading-snug md:leading-tight px-4 ${cormorant.className}`}>
            Sumirening kundaligi:<br className="hidden md:block" /> Paxmoq introvertning iqrori
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-8 md:mt-10" />
        </motion.div>

        {/* Текст (Абзацы) */}
        <div className="px-2 md:px-0">
          {chapterZero.paragraphs.map((text, idx) => (
            <FadeInParagraph key={idx} text={text} />
          ))}
        </div>

        {/* Картинка в конце главы с фотошопными фильтрами */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mt-20 md:mt-24 flex justify-center w-full"
        >
          <div className="relative w-full aspect-[4/5] md:w-[500px]">
            <Image 
              src={chapterZero.img} 
              alt="Sumire 0-Tom" 
              fill 
              className="object-contain brightness-90 saturate-75 contrast-125" 
              unoptimized 
            />
          </div>
        </motion.div>
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
  href="/bob-1" 
  className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
>
  1-Bobni o'qish
</a>
        </motion.div>
      </footer>

    </div>
  );
}