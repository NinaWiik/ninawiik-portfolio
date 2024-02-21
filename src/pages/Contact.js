export default function Contact() {
  return (
    <div className='container mx-auto max-w-3xl'>
    <div className='max-w-3xl mx-6  bg-white p-8 rounded shadow-lg'>
    <h1 className="text-6xl my-8">CONTACT</h1>

      {/* Mailto link */}
      <div className='mb-6'>
          <p className='text-lg font-semibold mb-2'>Er det noe du lurer på eller ønsker å booke en photoshoot?</p>
          <p className='text-lg font-semibold mb-2'>Send meg en mail, eller hvis det er lettere, så kontakt meg på instagram: {' '}
              <a href="https://www.instagram.com/ninawiik/" target="_blank" rel="noopener noreferrer">
                 @ninawiik
            </a></p>
          <p className="mt-6">
        <a href='mailto:hei@ninawiik.no' className='text-blue-500 hover:underline font-bold text-xl'>
          hei@ninawiik.no
            </a>
            </p>
        </div>
      </div>
      </div>
  )
}