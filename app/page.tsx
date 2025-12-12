import { Button } from '@/components/ui/button';
import Navbar from '@/components/blocks/navbar';

export default function Home() {
	return (
		<div>
			<Navbar/>
			<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
				<p>Work In Progress (9/12/25)</p>
				<Button variant="default">Button</Button>
				<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
					<polygon points="10,0 20,20 0,20" style={{ fill: '#FFF' }}/>
				</svg>
			</div>
		</div>
	);
}
