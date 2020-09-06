import axios from "axios";
import "./CardTotalKasus.css";

import React, { Component } from "react";

export default class CardTotalKasus extends Component {
	state = {
		results: [],
	};

	componentDidMount() {
		axios
			.get(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
			.then((res) => {
				console.log(res);
				const results = res.data.data.slice(0, 3).map((result) => {
					return result;
				});
				this.setState({ results });
			});
	}

	render() {
		return (
			<div className="container">
				<div className="judul">
					<span className="totalKasus">Total Kasus</span>
					<span className="selengkapnya">Selengkapnya</span>
				</div>
				<div className="scroll">
					<div className="card">
						{this.state.results.map((result) => (
							<div className="card__list" key={result.provinsi}>
								<span className="card__header">{result.provinsi}</span>
								<div className="card__content">
									<div id="positif" className="card__content__list">
										<span>Positif</span>
										<img
											src="../assets/sad-u6e.png"
											alt="Positif"
											className="card__icon"
										/>
										<span className="card__number">{result.kasusPosi}</span>
										<span>Orang</span>
									</div>
									<div id="meninggal" className="card__content__list">
										<span>Meninggal</span>
										<img
											src="../assets/emoji-LWx.png"
											alt="Meninggal"
											className="card__icon"
										/>
										<span className="card__number">{result.kasusSemb}</span>
										<span>Orang</span>
									</div>
									<div id="sembuh" className="card__content__list">
										<span>Sembuh</span>
										<img
											src="../assets/happy-ipM.png"
											alt="Sembuh"
											className="card__icon"
										/>
										<span className="card__number">{result.kasusMeni}</span>
										<span>Orang</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
