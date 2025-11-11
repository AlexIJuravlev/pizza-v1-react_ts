import { Content } from '../Content/Content';

interface PizzaOption {
	size: string;
	price: string;
}

interface Pizza {
	id: number;
	name: string;
	photo: string;
	param: any[];
	minPrice?: number;
	ply: string[]
}

export const PizzaAll = ({ arr }: { arr: Pizza[] }) =>
	arr.map(({ id, photo, name, param }: Pizza) => {
		const price = param.flatMap((p) =>
			p.option.map((o: PizzaOption) => parseInt(o.price)),
		);
		const minPrice = Math.min(...price);
		const ply = param.map(({ply}) => ply)

		return <Content key={id} photo={photo} name={name} price={minPrice} ply={ply}  />;
	});
