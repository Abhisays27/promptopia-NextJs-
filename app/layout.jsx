
import '@styles/global.css';

export const metadata = {
    title: "Promtopia",
    description:"Discover & share AI prompts"
}

const RootLayout = ({Children}) => {
  return (
   
   <html lang='en'>
    <body>
        <div className="main">
            <div className="gradient"></div>
        </div>

        <main className='app'>
            {Children}

        </main>
    </body>

   </html>
  )
}

export default RootLayout
