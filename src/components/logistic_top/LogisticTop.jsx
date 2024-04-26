import { RiSecurePaymentFill, RiHeartFill, RiCoinsLine, RiMapPin2Fill } from 'react-icons/ri';

export default function LogisticTop() {
  const technologies = [
    {
      name: 'SATISFACCIÓN 100%',
      description: 'Envío de Opciones y Devoluciones',
      icon: <RiHeartFill size="2.5rem" color="#01abec" />,
    },

    {
      name: 'PAGOS SEGUROS',
      description: 'Opción de Pago CONTRAENTREGA',
      icon: <RiSecurePaymentFill size="2.5rem" color="#01abec" />,
    },
    {
      name: 'EL MEJOR PRECIO',
      description: 'SOLO Trato directo con el fabricante',
      icon: <RiCoinsLine size="2.5rem" color="#01abec" />,
    },
    {
      name: 'ENVIÓS A LIMA Y PROVINCIAS',
      description: 'A través de DINSIDES y Gamarra GO',
      icon: <RiMapPin2Fill size="2.5rem" color="#01abec" />,
    },
  ];
  return (
    <div className="p-5 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ">
        {technologies.map((item, index) => {
          return (
            <div className="border p-5 rounded-md dark:border-zinc-800	" key={index}>
              <div key={index} className="flex items-center">
                <div className="flex">
                  <div className="p-2 w-12 h-12 rounded">{item.icon}</div>
                </div>
                <div>
                  <div className="text-md font-semibold mt-2 p-0 dark:text-white text-ellipsis">{item.name}</div>
                  <div className="text-sm text-[#839199] text-ellipsis">{item.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
