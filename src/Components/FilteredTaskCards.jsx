import TimeAgo from './TimeAgo';
import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';

dayjs.extend(utc);

function FilteredTaskCards({ tasks }) {
  return(
    <>
       <div className="bg-Darkred max-w-md 
           w-full p-10 rounded-md shadow-inner hover:shadow-lg shadow-black hover:shadow-black">
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">Problema: {tasks.title}</h1>
                </header>
                <p className="text-slate-300">Descripcion del problema: {tasks.description}</p>
                <strong>Tipo de equipo: {tasks.dispositive}</strong>
                <p> Publicado hace: <TimeAgo date={tasks.date}/></p>
        </div>
    </>
  );
};

export default FilteredTaskCards;