import Skills from './components/Skills';
import FancyButton from './components/FancyButton';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='font-quicksand text-3xl'>Danielle Ziegler</h1>
        <Skills />
        <div className='mt-10'>
          <FancyButton />
        </div>
      </div>
    </main>
  );
}
