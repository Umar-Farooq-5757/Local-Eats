import { MoveRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-160 gap-7 px-80">
      <h1 className="font-bold text-8xl font-mono bg-linear-to-r from-[#ea580c] to-[#ffa676] bg-clip-text text-transparent">
        Local Eats
      </h1>
      <p className="text-gray-600 text-center">
        Welcome to Local Eats, the dual-purpose platform designed to bring the
        local food community closer together.
      </p>
      <button className='flex justify-between items-center gap-3 cursor-pointer transition-all text-white font-semibold py-2 px-4 shadow-md hover:shadow-2xl rounded-md bg-linear-to-r from-[#ea580c] to-[#f58041] hover:gap-6'>Get Started <MoveRight/></button>
    </div>
  );
};

export default Home;