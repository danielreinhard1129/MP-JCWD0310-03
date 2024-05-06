import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-600 font-bold ">MINPRO</h1>
      <h1 className="text-blue-600 font-bold ">Hello World!!!</h1>
      <h1 className="text-red-500 font-bold">Haloo</h1>
      <Button>Test</Button>
      <Button>Test2222</Button>

      
    </div>
  );
}
