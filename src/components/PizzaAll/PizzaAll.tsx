import { Content } from '../Content/Content';

interface PizzaOption {
	size: string;
	price: string;
}

interface PizzaAll {
	id: number;
	name: string;
	photo: string;
	param: any[];
	minPrice?: number;
}

export const PizzaAll = ({ arr }: { arr: PizzaAll[] }) =>
	arr.map(({ id, photo, name, param }: PizzaAll) => {
		const price = param.flatMap((p) =>
			p.option.map((o: PizzaOption) => parseInt(o.price)),
		);
		const minPrice = Math.min(...price);

		
		return <Content key={id} photo={photo} name={name} price={minPrice} param={param}  />;
	});
