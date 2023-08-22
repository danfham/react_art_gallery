import {useState, useEffect} from 'react'
import Gallery from './components/Gallery'
import ButtonBar from './components/ButtonsBar'

function App(){
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
const handleIterate = (e) => {
  setArtId(artId + Number(e.target.value))
}


  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

  return (
    <div>
      <Gallery artist = {data.artistDisplayName} objectImg = {data.primaryImageSmall} />
      <ButtonBar handleIterate={handleIterate} />
    </div>

  )

}  

export default App;
