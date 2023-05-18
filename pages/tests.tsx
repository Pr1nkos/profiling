import NavbarRoute from "../components/Navbar"
import Contact from "../components/footer"

export default function Home() {
  return (
    <>
      <NavbarRoute />
      <div className='bg-gradient-to-bl from-green-200 to-purple-200'>
        <p id='font-common'>Тесты</p>
      </div>
      <Contact />
    </>
  )
}
