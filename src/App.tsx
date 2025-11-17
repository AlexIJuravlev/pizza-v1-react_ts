import { useEffect, useState } from 'react';
import { Categories, Header, Sort, PizzaAll  } from './components';
import './scss/app.scss';

interface Pizza {
	id: number;
	name: string;
	photo: string;
	param: any[];
	minPrice?: number;
	ply: string[]
}



function App() {
	const [data, setData] = useState<Pizza[]>([]);

	const URL_PIZZA = 'http://localhost:3000/pizza';

	useEffect(() => {
		fetch(URL_PIZZA)
			.then((res) => res.json())
			.then((res) => setData(res));
	}, []);

	return (
		<div className='App'>
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<div className='container'>
						<div className='content__top'>
							<Categories />
							<Sort />
						</div>
						<h2 className='content__title'>Все пиццы</h2>
						<div className='content__items'>
							<PizzaAll arr={data}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
