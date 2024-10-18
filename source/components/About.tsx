export default function About() {
  const contents = [
    <>
      <p className="block mb-4">Emil Ruder</p>
      <p className="block mb-4">Emil Ruder, born on March 20, 1914, in Zurich, Switzerland, embarked on his journey into the world of typography and design at a young age. His foundational years were spent in Basel, where he trained as a typesetter from 1929 to 1933. Further honing his skills, Ruder studied in Paris from 1938 to 1939, significantly influencing his later works.</p>
      <p className="block mb-4">A key figure in the Swiss Style movement, Ruder is celebrated for his pioneering approach to typography and design. Swiss Style, emerging in the 1950s, emphasized the use of sans-serif typefaces, a structured grid for page layout, and a harmonious blend of typography and photography. Ruder’s teachings and designs played a pivotal role in shaping this movement, particularly through his innovative use of a nine-square grid and his focus on poster design as a primary medium of communication.</p>
      <p className="block mb-4">Significant collaborations and contributions to design education marked Ruder’s career. Starting in 1942, he began teaching at the Allgemeine Gewerbeschule in Basel and soon became a prominent figure at the Schule für Gestaltung Basel, along with Armin Hofmann. Their collaborative efforts were instrumental in earning the school an international reputation. Ruder’s influence extended beyond the classroom through his work as a writer and editor for Typografische Monatsblätter, a leading trade publication.</p>
      <p className="block mb-4">Ruder’s philosophy was deeply rooted in the belief that typography’s primary purpose was to communicate ideas effectively while emphasising design’s aesthetic aspect. He championed sans-serif typefaces and was committed to the discipline of letterpress typography with a conviction that matched, if not surpassed, that of Jan Tschichold.</p>
      <p className="block">Perhaps Ruder’s most enduring legacy is his book, “Typographie: A Manual for Design.” Published in 1967, this text became a seminal work in the field of graphic design and typography. It encapsulated Ruder’s ideas, methodologies, and holistic approach to design education, blending philosophy, theory, and practical application. The book was instrumental in spreading the influence of the Swiss design.</p>
    </>,
    <>
      <p className="block mb-4">LL Ruder Plakat</p>
      <p className="block mb-4">According to several sources, Emil Ruder’s poster font was developed with students at Allgemeine Gewerbeschule Basel (AGS) in the early 1950s. Only towards the end of the decade, however, the new wood letters were ready for use on the school press. They were widely employed in a class Ruder taught in 1961/62, and started to appear on posters designed by Ruder as well as by Armin Hofmann following 1962. Until the closing of the school’s printshop in 2001, the wooden Ruder-Schrift was primarily available to students.</p>
      <p className="block mb-4">Compared to an earlier condensed poster font which was at hand at the school’s printshop in the 1950’s (and which was in wide use by students), the new design offered a broader range of sizes, from 6 to 48 Cicero (ca. 22 cm). It also came with a number of subtle formal changes to letterforms, most notably on ‘a’, ‘c’, ‘s’, ‘R’ and others, which made the overall appearance of the typeface more straight and more graphic. Compared to all similar shapes which were in frequent use on posters at the time, the formal rigour of Ruder’s letters is outstanding. Avoiding the slightest hint of any calligraphic strokes, Ruder’s letters are particularly clear and severe, and they are strictly aligned in almost every regard. Looking at them from today, they appear as if they were constructed in a grid using modular elements.</p>
      <p className="block mb-4">Knowing of the print shop’s impending closure, long-time typography teacher Hans-Christian Pulver proofed the full set of the 20 Cicero size (around 9 cm) for his personal archive. Almost fifteen years after retirement, with 77 years of age, he started to rework the typeface digitally. He made the shapes slightly more uniform and expanded the glyph set, and he transferred some outstanding features of individual letters to others: The strong diagonal to be found in ‘S’, ‘s’ and ‘2’ was adapted to the ‘a’, and the wide black junction of diagonal and stem in ‘K’ and ‘k’ was taken over for ‘X’ and ‘x’.</p>
      <p className="block">At Lineto, Pulver’s drawings were re-worked and the character set was expanded by Arve Båtevik, adhering to contemporary principles of type design which turned out to perfectly suit Ruder’s early attempts at grid-based design and modular letter-shapes. It is no coincidence that the technologies of digital type allowed to infuse the shapes with new life.</p>
    </>,
        <>
        <p className="block mb-4">Designers</p>
        <p className="block mb-4">Hans-Christian Pulver</p>
        <p className="block mb-4">During his apprenticeship as a typesetter in the early nineteen-sixties, Hans-Christian Pulver (*1941) came under the tutelage of Emil Ruder. He was admitted to Ruder’s advanced class for Typographische Gestaltung in 1964, launching a career as self-employed graphic designer in Switzerland and later Germany. He taught at Werkkunstschule Krefeld (Germany) for several years, and was a guest teacher at the National Institute of Design in Ahmedabad (India) and at Rhode Island School of Design in Providence (USA).</p>
        <p className="block mb-4">Anatole Couteau</p>
        <p className="block mb-4">Holding a BA in graphic design from École des Métiers d’arts et du Design Auguste Renoir, Anatole Couteau (*1997) completed the MA program in typographic design at ESAIG Estienne (2019), in Paris. In his MA thesis Emoji as Typography, he explored the relationship between ideogrammatic languages and typographic design, creating several fonts with unusual emoji shapes. Anatole started to work on LL Ruder Plakat after joining Lineto in 2020. In consultation with Hans-Christian Pulver, and based on Arve Båtevik’s digital interpretation of Emil Ruder’s design, he expanded on the project with a variable version, and created Ruder Plakat Maxi.</p>
        <p className="block mb-4">Arve Båtevik</p>
        <p className="block">After studying at Westerdals School of Communication in Oslo, Arve Båtevik (*1991) received an MA in Art Direction and Type Design from ECAL, where he produced an exhaustive comparative study of the geometric grotesk genre. He joined Lineto in Zurich in 2017, primarily focussing on LL Prisma and LL Supreme. In consultation with Hans-Christian Pulver, he worked on LL Ruder Plakat, later returning to his native Norway where he now runs his own practice with a strong focus on typography and type design. He recently set up Store Norske Skriftkompani, through which he publishes his own typefaces.</p>
      </>,
  ];
  return (
    <div className="flex flex-col xl:flex-row p-4 mt-8 min-h-[50vh]">
      {contents.map((content, index) => (
        <div key={index} className="flex-1 relative">
          <div className={`text-left leading-snug text-sm select-text xl:py-0 ${index === 0 ? 'pb-4 xl:pr-6' : index === contents.length - 1 ? 'pt-4 xl:pl-6' : 'py-4 xl:px-6'}`}>
            {content}
          </div>
          {index < contents.length - 1 && (
            <>
              <div className="xl:hidden h-px w-full border" />
              <div className="hidden xl:block absolute top-0 right-0 w-px h-full border" />
            </>
          )}
        </div>
      ))}
    </div>
  )
}