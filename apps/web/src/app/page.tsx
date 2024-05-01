import AccordionPage from '@/components/AccordionPage';
import Discovery from '@/components/Discovery';
import Jumbotron from '@/components/Jumbotron';
import Testi from '@/components/Testi';

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Discovery />
      <Testi />
      <AccordionPage />
    </div>
  );
}
