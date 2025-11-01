import { useEffect, useState } from 'react';
import { Categories, Content, Header, Sort } from './components';
import './scss/app.scss';

interface Pizza {
	id: number,
	name: string,
	photo: string,
	param: any[],
	minPrice?: number
}

interface PizzaOption {
	size: string,
	price: string
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
							{data.map(({id, photo, name, param})=>{
								const price = param.flatMap(p => p.option.map((o : PizzaOption) => parseInt(o.price)))
								const minPrice = Math.min(...price)
								console.log(minPrice);
								
								return <Content key={id} photo={photo} name={name} price={minPrice}  />
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
