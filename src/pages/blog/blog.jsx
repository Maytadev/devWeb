import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import SingleCard from '../../components/card/single-card';
import LigisticTop from '../../components/logistic_top/LogisticTop';

const data = [
  {
    id: 1,
    title: 'Polo Manga Corta',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882972696_1.jpg',
    author: {
      name: 'Bearcliff',
      image: '/images/logo_bearcliff.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 2,
    title: 'Jean Algodón Hombre Basement',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882966100_1.jpg',
    author: {
      name: 'Basement',
      image: '/images/logo_basement.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 3,
    title: 'Polo Mango Corta 100% Algodón',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882970691_7.jpg',
    author: {
      name: 'Ecko',
      image: '/images/logo_ecko.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 1,
    title: 'Polo Manga Corta',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882972696_1.jpg',
    author: {
      name: 'Bearcliff',
      image: '/images/logo_bearcliff.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 2,
    title: 'Jean Algodón Hombre Basement',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882966100_1.jpg',
    author: {
      name: 'Basement',
      image: '/images/logo_basement.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 3,
    title: 'Polo Mango Corta 100% Algodón',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882970691_7.jpg',
    author: {
      name: 'Ecko',
      image: '/images/logo_ecko.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 1,
    title: 'Polo Manga Corta',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882972696_1.jpg',
    author: {
      name: 'Bearcliff',
      image: '/images/logo_bearcliff.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 1,
    title: 'Polo Manga Corta',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882972696_1.jpg',
    author: {
      name: 'Bearcliff',
      image: '/images/logo_bearcliff.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
  {
    id: 1,
    title: 'Polo Manga Corta',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
    image: '/images/882972696_1.jpg',
    author: {
      name: 'Bearcliff',
      image: '/images/logo_bearcliff.jpg',
      designation: 'Voluptatibus veritatis',
    },
    tags: ['Moda Hombre'],
    publishDate: '21/04/2024',
  },
];

export default function Blog() {
  return (
    <>

      <Breadcrumb
        pageName="Gamarra Online"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci, debitis deleniti qui provident quae odio recusandae."
      />
            <LigisticTop/>


      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {data.map((item) => (
              <div key={item.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleCard item={item} />
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="wow fadeInUp -mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Anterior
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Siguiente
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
