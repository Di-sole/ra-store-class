import './App.css';
import ShopItemClass from './components/ShopItem/ShopItemClass';
import ShopItemModel from './components/ShopItem/ShopItemModel';

export default function App() {
	const item = new ShopItemModel({
		brand: 'Tiger of Sweden',
		title: 'Leonard coat',
		description: 'Minimalistic coat in cotton-blend',
		descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
		price: 399,
		currency: '£'
	});

  return (
		<div className="container">
			<div className="background-element">
			</div>
			<div className="highlight-window">
				<div className='highlight-overlay'></div>
			</div>
			<div className="window">
				<ShopItemClass item={item} />
			</div>
		</div>
	)
}