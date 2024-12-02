import Image from 'next/image';

export default function Home() {
  const menu = ['타이핑 테스트', '키 스트로크 연습', '고급'];
  const menus = () => {
    return menu.map((item, index) => (
      <li className='p-2 flex relative center cursor-pointer' key={index}>
        <a>{item}</a>
      </li>
    ));
  };
  return (
    <>
      <header className='flex h-[60] px-10 w-full center'>
        <div className='logo flex center'>
          <a href='/' className='flex items-center'>
            <Image className='block' src='/typing_logo.png' alt='Logo' width={50} height={50} />
            <span className='font-bold text-2xl'>Typing Speed Test</span>
          </a>
        </div>
        <div className='flex-1 menu ml-10 items-center h-full'>
          <ul className='flex min-w-[300px] h-full items-center font-600 list-none'>{menus()}</ul>
        </div>
        <div className='flex items-center'>
          <span className='mr-2 items-center'>한국어</span>
        </div>
      </header>

      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
          <Image className='dark:invert' src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
          <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
            <li className='mb-2'>
              Get started by editing{' '}
              <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>app/page.tsx</code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className='flex gap-4 items-center flex-col sm:flex-row'>aaaaaaaaaaa</div>
        </main>
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>asdfasdf</footer>
      </div>
    </>
  );
}
