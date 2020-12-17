import React from 'react';

const Artist = ({infoartist}) => {

	if(Object.keys(infoartist).length === 0){ 
		return null;
	}
	const {strArtistThumb, strGenre, strBiographyEN } = infoartist;

	return ( 
		<div className="card border-light">
			<div className="card-header bg-primary text-light font-weight-bold">
				Info Artist/Band
			</div>
			<div className="card-body">
				<img src={strArtistThumb} alt="Logo Artist" />
				<p className="card-text">Genre: {strGenre}</p>
				<h2 className="card-text">Biography:</h2>
				<p className="card-text">{strBiographyEN}</p>
				<p className="card-text">
				 <a href={`https://${infoartist.strFacebook}`} target="_blank" rel="noopener noreferrer">
   				 <i className="fab fa-facebook"></i>
				 </a>
				 <a href={`https://${infoartist.strTwitter}`} target="_blank" rel="noopener noreferrer">
    			 <i className="fab fa-twitter"></i>
				 </a>
				 <a href={`${infoartist.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
    			 <i className="fab fa-lastfm"></i>
				 </a>
				</p>
			</div>
		</div>
	 );
}
 
export default Artist;