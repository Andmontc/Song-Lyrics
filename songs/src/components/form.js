import React, {useState} from 'react';


const Form = ({saveLyrics}) => {

	const [search, saveSearch] = useState({
		artist:'',
		song:''
	});

	const [error, saveError] = useState(false);
	const {artist, song} = search
	// leer el contenido de cada input
	const actualizar = e => {
		saveSearch({
			...search,
			[e.target.name]: e.target.value
		})
	}
	//consume apis
	const searchInfo = e => {
		e.preventDefault();

		if (artist.trim() === '' || song.trim() === ''){
			saveError(true);
			return;
		}
		saveError(false);
		saveLyrics(search);
	}

	return ( 
		<div className="bg-info">
			{error ? <p className="alert alert-danger text-center p-2">All fields are required</p> : null}
			<div className="container">
				<div className="row">
					<form
						onSubmit={searchInfo}
						className="col card text-white bg-transparent mb-5 pt-5 pb-2">
							<fieldset>
								<legend className="text-center">Lyrics Searcher</legend>
								<div className="row">
									<div className="col md-6">
										<div className="form-group">
										<label>Artist</label>
										<input
											type="text"
											className="form-control"
											name="artist"
											placeholder="Artist/Band"
											onChange={actualizar}
											value={artist}
										/>
										</div>
									</div>
									<div className="col md-6">
									<div className="form-group">
										<label>Song</label>
										<input
											type="text"
											className="form-control"
											name="song"
											placeholder="Song"
											onChange={actualizar}
											value={song}
										/>
										</div>
									</div>
								</div>
								<button 
									type="submit"
									className="btn btn-primary float-right">
										Search
									</button>
							</fieldset>
						</form>
				</div>
			</div>
		</div>
	 );
}
 
export default Form;