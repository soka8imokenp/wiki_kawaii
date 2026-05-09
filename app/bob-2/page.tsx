'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// --- SHRIFTLAR ---
import { Cormorant_Garamond, Sacramento } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'] });
const sacramento = Sacramento({ subsets: ['latin'], weight: ['400'] });

// --- 2-BOB MA'LUMOTLARI ---
const chapterTwo = {
  paragraphs: [
    "Soat besh yarimni ko'rsatardi. Oltin rang kuz quyoshi yarmigacha bo'shab qolgan sinfni quyuq to'q sariq nurga to'ldirar, havoda sekin raqsga tushayotgan chang zarralarini yoritib turardi.",
    "Men qalamdonimni eshitirmaslikka harakat qilib, sekin sumkamni yig'ishtirardim. Nindzyalar uchun ideal reja: darsliklarni tashlash, kapyushonni kiyish va yo'lakda izsiz g'oyib bo'lish. Ammo ketishimga bitta kichik detal xalaqit berardi.",
    "Deraza oldida birlashtirilgan partalarda ikki kishi o'tirardi: bizning charchamas sinf sardorimiz Aoi va art-klubning doim uyqusirab yuradigan a'zosi Ryu. Ularning oldida g'ijimlangan qog'ozlar tog'i yotardi.",
    "— Bu haqiqiy falokat, — Aoi past ovozda ingrab, boshini partaga qo'ydi. — Bizning yovuz qahramonimiz mutlaqo jonsiz chiqmoqda. Umuman, unga qirollikni vayron qilish nimaga kerak o'zi? Chunki u... yovuzmi? Bu juda zerikarli! Tomoshabinlar o'ninchi daqiqadayoq uxlab qolishadi.",
    "— Balki, u shunchaki soliqlarni yomon ko'rar? — xotirjamlik bilan taklif qildi Ryu bloknotiga qalamda chizgilar chizarkan.",
    "— Masalan, men ham ularni yoqtirmayman.",
    "— Ryu, bizda g'amgin fentezi, buxgalteriya emas! Bizga drama kerak! Bizga ziddiyat kerak!",
    "Men sumkamning zanjirini ham tortmasdan o'z shkafim oldida qotib qoldim.",
    "Mening sönen va fentezi novellalarning yuzlab tomlari bilan mashq qildirgan miyam shu zahoti ideal yechimni taqdim etdi. \"U qirollikni hokimiyat uchun vayron qilmoqchi emas,\" — deb o'yladim men. — \"U o'zi uchun qadrli bo'lgan kimnidir qutqarish uchun qasr ostida yashiringan Muhrni yo'q qilmoqchi. Dunyo uchun u — mahluq. O'zi uchun esa — xaloskor. Bu kulrang axloqni yaratadi va bosh qahramon tanlashiga to'g'ri keladi: burchmi yoki hamdardlik.\"",
    "Bu janrning klassikasi edi. Zalda o'tirganlarning nafasini ichiga yuttiradigan rad etib bo'lmas usul. Yechim yuzada turardi.",
    "Men asta-sekin sumkamni yelkamga otdim. Shunchaki uyga bor, Sumire. Hozir eshikdan chiqasan, choy damlaysan, manga o'qiysan va bu kun tugaydi.",
    "Men eshik tomon qadam tashladim.",
    "Krossovkam ostidagi yog'och taxta sukunatda xiyonatkorona g'ijirlab ketdi.",
    "Aoi erinchoqlik bilan boshini burib menga qaradi.",
    "— O, Sumire, sen hali ham shu yerdamisan? — zaif jilmayib qo'ydi u. — Kechirasan, biz bu yerda biroz qizishib ketyapmiz.",
    "Mana u. Shunchaki bosh irg'ab, zo'raki uzr so'ragandek tabassum qilib qochib ketishim uchun ideal imkoniyatim. Katta sviterim ostidagi paxmoq dumim to'qqizinchi darajali vahimani bildirib, mayda titroq bilan titray boshlagandi. Mening ichki radarim: \"XAVF! IJTIMOIY ALOQA!\" deb baqirardi.",
    "Ammo men ertalab meni qamrab olgan o'sha yurakni siquvchi g'amgin tuyg'uni esladim. Men yo'l chetida turganda hayot yonimdan o'tib ketayotgandek tuyg'uni.",
    "Quloqlarimda sinfning sukunati jaranglardi. Va bu sukunat orqali men to'satdan uni eshitdim — o'zimning ichimda, zaif, zo'rg'a eshitiladigan ovozni. Bu dunyoning bir qismi bo'lishni juda xohlayotgan ovozni. O'sha chorlovni.",
    "Men sumkamning tasmasiga xuddi qutqaruv chambaragini ushlagandek ikki qo'lim bilan yopishib oldim. Sekin, xuddi tortishish kuchini yengib o'tayotgandek, ularga o'girildim.",
    "— A... — ovozim xiyonatkorona qaltirab chiqdi. Men yuzlarim yonib ketayotganini his qilib yo'taldim va yuzimning yarmini keng yoqa ortiga yashirishga urindim. — Agar... agar u shunchaki yovuz bo'lmasa-chi?",
    "Ryu chizishdan to'xtadi. Aoi partadan biroz ko'tarildi. Ular to'g'ri menga qarab turishardi.",
    "— Qanday qilib? — qayta so'radi sinf sardori biroz qoshlarini chimirib, ammo hech qanday g'azabsiz.",
    "— A-agar qasr ostida... Muhr bo'lsa, — men faqat tuflimga qaragan holda tez-tez gapirardim. — Va u yovuz qahramonning yaqin kishisidan hayot kuchini so'rayotgan bo'lsa. Muhrni yo'q qilish uchun qasrni vayron qilish kerak. Ritsarlar uchun u yovuz. L-lekin aslida... u shunchaki o'z oilasini qutqarishga harakat qilyapti. Shunda finalda qahramonlar aslida kim haq ekanligini hal qilishlariga to'g'ri keladi.",
    "Men hozir hushimdan ketib qoladigandek his qilib jim bo'lib qoldim. Sukunat men uchun umrboddek tuyuldi. \"Men ahmoqona gap aytdim. Xudoyim, qanday oddiy va eskirgan narsani valdiradim-a. Qochish kerak, zudlik bilan maktabni o'zgartirish kerak, boshqa shaharga ko'chib o'tish kerak...\"",
    "— Sumire... — Aoining ovozi qandaydir g'alati yangradi.",
    "Men tavakkal qilib ko'zlarimni ko'tardim. Aoi katta-katta ochilgan ko'zlari bilan menga qarab turardi. Ryu qalamini sekin chetga surib qo'ydi.",
    "— Bu... — Ryu ko'zoynagini to'g'rilab qo'ydi. — Bu shunchaki daxshat-ku. Men hozirdan uning sovutlari dizaynini ko'ryapman. U bu urushdan charchagandek, biroz eskirganroq bo'lishi kerak.",
    "— Sumire, axir bu dahocha g'oya-ku! — Aoi partadan sakrab turib ketdi, uning yuzi shunday yorqin zavq bilan porlab ketdiki, men ko'zlarimni yumib olgim keldi. — Qanday qilib o'zimiz shuni o'ylab topmadik-a?! Eshit, taxt zalidagi dialoglarni qanday yozamiz? Senda g'oyalar bormi?",
    "Hozirgacha charchoq yoki qo'rquvdan shalpayib tushgan quyon quloqlarim hayrat va quvonchdan birdaniga dikkayib qoldi. Ko'kragimda qandaydir g'alati, men uchun mutlaqo yangi bo'lgan, qitiqlaydigan issiqlik tarqaldi.",
    "Men hali ham shkafga berkinishni xohlardim. Tizzalarim hamon titrardi. Lekin ularning yonib turgan ko'zlariga qarab, men ishonchsizlik bilan ularning partasi yoniga bordim va qo'shni stulning chetiga o'tirdim.",
    "— N-nu... — men sumkamdan yon daftarimni ehtiyotkorlik bilan oldim. — Agar biz sahnani quyosh botayotgan paytda qilsak, u shunday deyishi mumkin edi...",
    "Bu oqshom men uyga vaqtida ketmadim. Va g'alati bo'lsa-da, men bundan xursand ham edim."
  ],
  img: '/images/2.webp'
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

export default function ChapterTwoPage() {
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
          href="/bob-1" 
          className="pointer-events-auto flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all font-sans"
        >
          <ArrowLeft size={14} /> 1 - Bob
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
                src={chapterTwo.img} 
                alt="Sumire 2-Bob" 
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
            2 - Bob
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold text-white leading-snug md:leading-tight drop-shadow-lg ${cormorant.className}`}>
            Sukunatga qadam
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mt-6 md:mt-10" />
        </motion.div>
      </header>

      {/* Контент главы */}
      <main className="relative z-10 w-full pb-20">
        <div className="max-w-2xl mx-auto px-6 md:px-0 relative z-20">
          {chapterTwo.paragraphs.map((text, idx) => (
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
            href="/bob-3" 
            className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Keyingi bob
          </a>
        </motion.div>
      </footer>

    </div>
  );
}