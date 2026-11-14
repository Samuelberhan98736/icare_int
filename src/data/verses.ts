// Verse of the Day pool. One verse is shown per day, cycling through the list
// (see VerseOfTheDay.astro). Add, remove, or reorder freely.
// Amharic: 1954 Amharic Bible. English: King James Version.
// TODO: have the pastor proofread the Amharic text.

export interface Verse {
  am: string;
  amRef: string;
  en: string;
  enRef: string;
}

export const verses: Verse[] = [
  {
    am: 'እግዚአብሔር አንድያ ልጁን እስኪሰጥ ድረስ ዓለሙን እንዲሁ ወዶአልና፥ በእርሱ የሚያምን ሁሉ የዘላለም ሕይወት እንዲኖረው እንጂ እንዳይጠፋ።',
    amRef: 'ዮሐንስ 3፥16',
    en: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
    enRef: 'John 3:16',
  },
  {
    am: 'እግዚአብሔር እረኛዬ ነው፤ የሚያሳጣኝ የለም።',
    amRef: 'መዝሙር 23፥1',
    en: 'The Lord is my shepherd; I shall not want.',
    enRef: 'Psalm 23:1',
  },
  {
    am: 'ኃይልን በሚሰጠኝ በክርስቶስ ሁሉን እችላለሁ።',
    amRef: 'ፊልጵስዩስ 4፥13',
    en: 'I can do all things through Christ which strengtheneth me.',
    enRef: 'Philippians 4:13',
  },
  {
    am: 'በፍጹም ልብህ በእግዚአብሔር ታመን፥ በራስህ ማስተዋል አትደገፍ።',
    amRef: 'ምሳሌ 3፥5',
    en: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding.',
    enRef: 'Proverbs 3:5',
  },
  {
    am: 'እናንተ ደካሞች ሸክማችሁ የከበደ ሁሉ፥ ወደ እኔ ኑ፥ እኔም አሳርፋችኋለሁ።',
    amRef: 'ማቴዎስ 11፥28',
    en: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    enRef: 'Matthew 11:28',
  },
  {
    am: 'እግዚአብሔርን የሚጠባበቁ ግን ኃይላቸውን ያድሳሉ፤ እንደ ንስር በክንፍ ይወጣሉ፤ ይሮጣሉ አይታክቱም፤ ይሄዳሉ አይደክሙም።',
    amRef: 'ኢሳይያስ 40፥31',
    en: 'But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
    enRef: 'Isaiah 40:31',
  },
  {
    am: 'ለእናንተ የማስባትን አሳብ እኔ አውቃለሁ፥ ይላል እግዚአብሔር፤ ፍጻሜና ተስፋ እሰጣችሁ ዘንድ የሰላም አሳብ ነው እንጂ የክፉ አይደለም።',
    amRef: 'ኤርምያስ 29፥11',
    en: 'For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.',
    enRef: 'Jeremiah 29:11',
  },
  {
    am: 'እግዚአብሔርንም ለሚወዱት እንደ አሳቡም ለተጠሩት ነገር ሁሉ ለበጎ እንዲደረግ እናውቃለን።',
    amRef: 'ሮሜ 8፥28',
    en: 'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
    enRef: 'Romans 8:28',
  },
  {
    am: 'በምትሄድበት ሁሉ አምላክህ እግዚአብሔር ከአንተ ጋር ነውና አይዞህ፥ በርታ፤ አትፍራ፥ አትደንግጥም ብዬ አላዘዝሁህምን?',
    amRef: 'ኢያሱ 1፥9',
    en: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.',
    enRef: 'Joshua 1:9',
  },
  {
    am: 'አምላካችን መጠጊያችንና ኃይላችን፥ ባገኘን በታላቅ መከራም ረዳታችን ነው።',
    amRef: 'መዝሙር 46፥1',
    en: 'God is our refuge and strength, a very present help in trouble.',
    enRef: 'Psalm 46:1',
  },
  {
    am: 'ሕግህ ለእግሬ መብራት ለመንገዴም ብርሃን ነው።',
    amRef: 'መዝሙር 119፥105',
    en: 'Thy word is a lamp unto my feet, and a light unto my path.',
    enRef: 'Psalm 119:105',
  },
  {
    am: 'ነገር ግን አስቀድማችሁ የእግዚአብሔርን መንግሥት ጽድቁንም ፈልጉ፥ ይህም ሁሉ ይጨመርላችኋል።',
    amRef: 'ማቴዎስ 6፥33',
    en: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
    enRef: 'Matthew 6:33',
  },
  {
    am: 'እኔ ከአንተ ጋር ነኝና አትፍራ፤ አምላክህ ነኝና አትደንግጥ፤ አበረታሃለሁ እረዳህማለሁ፥ በጽድቄም ቀኝ እጅ እደግፍሃለሁ።',
    amRef: 'ኢሳይያስ 41፥10',
    en: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
    enRef: 'Isaiah 41:10',
  },
  {
    am: 'እኔ መንገድና እውነት ሕይወትም ነኝ፤ በእኔ በቀር ወደ አብ የሚመጣ የለም።',
    amRef: 'ዮሐንስ 14፥6',
    en: 'I am the way, the truth, and the life: no man cometh unto the Father, but by me.',
    enRef: 'John 14:6',
  },
  {
    am: 'በተስፋ ደስ ይበላችሁ፤ በመከራ ታገሡ፤ በጸሎት ጽኑ።',
    amRef: 'ሮሜ 12፥12',
    en: 'Rejoicing in hope; patient in tribulation; continuing instant in prayer.',
    enRef: 'Romans 12:12',
  },
  {
    am: 'ስለዚህ ማንም በክርስቶስ ቢሆን አዲስ ፍጥረት ነው፤ አሮጌው ነገር አልፎአል፤ እነሆ፥ ሁሉም አዲስ ሆኖአል።',
    amRef: '2ኛ ቆሮንቶስ 5፥17',
    en: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
    enRef: '2 Corinthians 5:17',
  },
  {
    am: 'በነገር ሁሉ በጸሎትና በምልጃ ከምስጋና ጋር በእግዚአብሔር ዘንድ ልመናችሁን አስታውቁ እንጂ በአንዳች አትጨነቁ።',
    amRef: 'ፊልጵስዩስ 4፥6',
    en: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.',
    enRef: 'Philippians 4:6',
  },
  {
    am: 'እግዚአብሔር የሠራት ቀን ይህች ናት፤ በእርስዋ ሐሤትን እናድርግ ደስም ይበለን።',
    amRef: 'መዝሙር 118፥24',
    en: 'This is the day which the Lord hath made; we will rejoice and be glad in it.',
    enRef: 'Psalm 118:24',
  },
  {
    am: 'ኢየሱስ ክርስቶስ ትናንትና ዛሬ እስከ ለዘላለምም ያው ነው።',
    amRef: 'ዕብራውያን 13፥8',
    en: 'Jesus Christ the same yesterday, and to day, and for ever.',
    enRef: 'Hebrews 13:8',
  },
  {
    am: 'እግዚአብሔር ይባርክህ ይጠብቅህም።',
    amRef: 'ዘኍልቍ 6፥24',
    en: 'The Lord bless thee, and keep thee.',
    enRef: 'Numbers 6:24',
  },
  {
    am: 'በእግዚአብሔር ደስ ይበልህ፥ የልብህንም መሻት ይሰጥሃል።',
    amRef: 'መዝሙር 37፥4',
    en: 'Delight thyself also in the Lord; and he shall give thee the desires of thine heart.',
    enRef: 'Psalm 37:4',
  },
  {
    am: 'እርሱ አስቀድሞ ወዶናልና እኛ እንወደዋለን።',
    amRef: '1ኛ ዮሐንስ 4፥19',
    en: 'We love him, because he first loved us.',
    enRef: '1 John 4:19',
  },
  {
    am: 'ዓይኖቼን ወደ ተራሮች አነሣሁ፤ ረዳቴ ከወዴት ይመጣል? ረዳቴ ሰማይንና ምድርን ከሠራ ከእግዚአብሔር ዘንድ ነው።',
    amRef: 'መዝሙር 121፥1-2',
    en: 'I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the Lord, which made heaven and earth.',
    enRef: 'Psalm 121:1–2',
  },
  {
    am: 'እውነትንም ታውቃላችሁ፥ እውነትም አርነት ያወጣችኋል።',
    amRef: 'ዮሐንስ 8፥32',
    en: 'And ye shall know the truth, and the truth shall make you free.',
    enRef: 'John 8:32',
  },
  {
    am: 'እናንተ የዓለም ብርሃን ናችሁ።',
    amRef: 'ማቴዎስ 5፥14',
    en: 'Ye are the light of the world.',
    enRef: 'Matthew 5:14',
  },
  {
    am: 'እግዚአብሔር ቸር እንደ ሆነ ቅመሱ እዩም፤ በእርሱ የሚታመን ሰው ብፁዕ ነው።',
    amRef: 'መዝሙር 34፥8',
    en: 'O taste and see that the Lord is good: blessed is the man that trusteth in him.',
    enRef: 'Psalm 34:8',
  },
  {
    am: 'ፍቅር ይታገሣል፥ ቸርነትንም ያደርጋል፤ ፍቅር አይቀናም፤ ፍቅር አይመካም፥ አይታበይም።',
    amRef: '1ኛ ቆሮንቶስ 13፥4',
    en: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up.',
    enRef: '1 Corinthians 13:4',
  },
];
