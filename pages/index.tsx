import Image from 'next/image';

export default function Home() {
  return (
    <section className='mainBanner'>
      <div className='flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row'>
        <h1 className='text-3xl'> Serum Skin Care</h1>
        <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 '>
          <Image
            src='/img/serum-1.png' objectFit='cover' alt='Picture of Serum' layout='fill' priority
          />
        </div>
        <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 '>
          <Image
            src="/img/serum-2.png" objectFit="cover" alt='Picture of Serum' layout='fill' priority
          />
        </div>
        <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 '>
          <Image
            src="/img/serum-3.png" objectFit="cover" alt="Picture of Serum" layout="fill" priority
          />
        </div>
      </div>
    </section>
  )
}