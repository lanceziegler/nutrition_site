import Skills from './components/Skills';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='font-quicksand text-3xl'>Danielle Ziegler</h1>
        <Skills />
      </div>
    </main>
  );
}
