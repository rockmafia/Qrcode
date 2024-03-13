import qrocde from './assets/qr-code.png'
import './App.css'

function App() {


  return (
    <>
     <div className='center'>
      <div className='border'>
        <img src={qrocde} className='qrcode-img'/>
      </div>
      <div className='Text'>
      <h2 className='Header'>Improve your front-end skills by building projects</h2>
      <p className='Paragrapt'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
     </div>
    </>
  )
}

export default App
