
import './App.css'
import { memSet } from './assets'
import { Flex } from 'antd'
import { ImageCard } from './components/image-card'

function App() {

  return (
    <>
     <Flex>
      {memSet ? memSet.map((mem) => (
        <ImageCard 
        size={200}
        src={mem}
        >
        </ImageCard>
      )) : <div>Очень жаль</div>} 
     </Flex>
     
    </>
  )
}

export default App
