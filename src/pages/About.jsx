import React from "react";
import Secheader from "./common/Secondaryheader";



const Tcards = (props) => {
	return (

		<figure className="figure col-md-3 text-center">
			<img src={props.timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
			  <figcaption className="figure-caption text-dark">{props.ttitle}</figcaption>
		</figure>
	);
};

const About = () => {
	return (
		<>

		<Secheader 
			sectitle="Sobre nosotros" 
			secdesc="Lorem Ipsum is simply random text." 
		/>

		<section>
			<div className="container mx-auto py-5 col-lg-10 col-xl-9">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">Quienes somos...</p>
					<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
		</section>

		<section className="bg-light">
			<div className="container row py-5 m-auto col-lg-10 col-xl-9">
				<p className="display-6 text-center mb-4">Nuesta Historia</p>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
			</div>
		</section>

		
		
		</>
	);
};

export default About;