import RuderAnimation from '@/components/Intro'
import Play from '@/components/Play'
import Style from '@/components/Style'
import Glyphs from '@/components/Glyphs'
import About from '@/components/About'
import Basel from '@/components/Basel'

export default function Home() {
  return (
    <div> 
      <div id="intro"><RuderAnimation /></div>
      <div id="play"><Play /></div>
      <div id="style"><Style /></div>
      <div id="glyphs"><Glyphs /></div>
      <div id="about"><About /></div>
      <Basel />
    </div>
  )
}