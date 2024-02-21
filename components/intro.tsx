import Image from "next/image";

export default function Intro() {
	return (
		<section>
			<div className="flex items-center justify-center">
				<div>
					<Image
						// src="./public/me.jpg"
						src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Khanh Nguyen"
						width="192"
						height="192"
						quality="95"
						priority={true}
					/>
				</div>
			</div>
		</section>
	);
}
