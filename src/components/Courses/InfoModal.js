/* eslint-disable react/jsx-key */
import React from "react"
import reactDom from "react-dom"
import { useSelector, useDispatch } from "react-redux"
import { AiOutlineClose } from "react-icons/ai"
import { toggleInfoModal  } from "../../actions"
import { OVERLAY_STYLE } from "../../styles/styles"

const CoursePage = () => {

  const dispatch = useDispatch()
  const infoModalIsClosed = useSelector(state => state.infoModalIsClosed)

  return reactDom.createPortal (
    <>
      {infoModalIsClosed ? ("") : <div style={OVERLAY_STYLE}>
        <button className="absolute md:top-[24px] top-[88px] md:right-12 right-2 text-white" onClick={() => dispatch(toggleInfoModal(infoModalIsClosed))}>
          <AiOutlineClose className="h-10 w-10 hover:bg-gray-400 text-white"></AiOutlineClose>
        </button>
        <div className="md:w-[calc(100%_-_20rem)] md:left-[17rem] md:top-20 flex-grow absolute top-36 max-h-screen bottom-20 border-solid border-white border-[1px] w-screen bg-black overflow-y-auto scrollbar-thin  scrollbar-thumb-white scrollbar-track-black">
          <p className="px-2 py-4 text-xl text-white">
                  Lorem ipsum dolor sit amet, ut brute sonet deterruisset vix, mei id aeque aliquip. Nulla discere mnesarchum ea sed, no dictas deseruisse reprimique eum. Ne tamquam labitur epicuri vix, et nibh probo democritum usu. Denique fastidii insolens cu eum.<br></br><br></br>
                  Eos falli decore et, duis dicat sapientem ea vix, postulant vulputate argumentum id qui. Nostro everti quaestio vis in, partem docendi maiestatis vix no. Qui suscipit senserit abhorreant no, officiis qualisque sea ex. Eos te mundi iuvaret principes, cu tollit inimicus constituto sea. Sed tempor fabulas te, aperiri perfecto at vim. Ea vel facer integre deserunt, ad clita admodum ponderum vim. At pro idque blandit scribentur.<br></br><br></br>
                  Ea errem malorum quo, mel constituam disputationi reprehendunt ei, cu ridens vituperata nec. Pri primis noluisse an, quem utinam vocent ne ius. Id dolores eloquentiam nec, eum liber erant quidam ei, eum adipiscing definitiones no. Ius mollis periculis no, te eos deserunt voluptatibus. Vix in dicta viderer. Ea usu falli congue assueverit.<br></br><br></br>
                  Tale referrentur vix ex. Quot constituto sit eu, an enim eripuit philosophia est, pro tritani accusata mediocrem no. An sed vide fugit, illum scripta laoreet vix ei. Vix ex fierent indoctum contentiones.<br></br><br></br>
                  Eu sit minim prompta eripuit, cu illud aeque percipit qui. Diceret civibus vel ad, veri repudiare eam ne, no duo tation fastidii persequeris. Eu mei tritani quaestio, dicit denique ea vis, nec id veritus sadipscing. Vim elit sapientem et. Ei modo utroque qui, at essent antiopam deseruisse est, autem impetus ex est.<br></br><br></br>
                  At dolorem admodum delectus eos. Quo ad dissentias definitionem, te zril ancillae mei. An qui veri probo torquatos, eros probo abhorreant ex his, usu antiopam signiferumque ea. Illum vivendo epicuri pri eu, vis ne facete intellegam. His eu sint oratio, mei ut odio repudiare, cu qui case constituam dissentiunt. Vel ne enim rebum, zril dolorem mel in.<br></br><br></br>
                  Ad duo posidonium contentiones consectetuer, eam posse salutandi consulatu in. Alii doctus ne est. Nec alia duis praesent ei, consul aperiri interesset te his. Mei ne fierent platonem conceptam, augue utroque neglegentur an quo. No mei nisl virtute consectetuer, in mei alia definitionem, ea mea diceret offendit. Ius magna saperet epicurei ut.<br></br><br></br>
                  Odio fuisset antiopam cu mei, diam moderatius per no, appetere assentior ius ad. Ut nam modus dicat. Te cum minim tritani. Summo quaerendum vim te. In graece possim euismod eam, sumo virtute gubergren ei quo. Nec sonet vivendum te.<br></br><br></br>
          </p>
        </div>
      </div>
      }
    </>,
    document.getElementById("infoModal")
  )
}


export default CoursePage