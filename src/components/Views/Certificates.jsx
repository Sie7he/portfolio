import EmblaCarousel from '../shareds/EmblaCarousel'
import { certificates } from '../../data/certificates'
import '../shareds/embla.css'

const Certificates = () => {


  return (
    <section id="certificates" className="w-full bg-gray-100 py-10"   ref={el => sectionRefs.current['habilidades'] = el}>

<div className="w-full">
<h2 className="text-shadowc p-4 mb-4 lg:text-5xl text-center text-3xl  tracking-widest">
          CERTIFICADOS
        </h2>
      <EmblaCarousel slides={certificates} />
    </div>
    </section>
  )
}

export default Certificates