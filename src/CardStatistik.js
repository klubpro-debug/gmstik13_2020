import axios from "axios";
import "./CardStatistik.css";

import React, { Component } from "react";

export default class CardStatistik extends Component {
	state = {
		statistiks: [],
	};

	componentDidMount() {
		axios.get(`https://indonesia-covid-19.mathdro.id/api`).then((res) => {
			const statistiks = res.data.data;
			this.setState({ statistiks });
		});
	}

	render() {
		return (
			<div className="statistik">
				<span className="statistik__intro">Statistik Covid-19 di Indonesia</span>
				<div className="statistik__container">
					<div className="statistik__card__content">
						<span className="statistik__card__number">1</span>
						<span className="statistik__card__title">Perawatan</span>
					</div>
					<div className="statistik__card__content">
						<span className="statistik__card__number">2</span>
						<span className="statistik__card__title">Sembuh</span>
					</div>
					<div className="statistik__card__content">
						<span className="statistik__card__number">3</span>
						<span className="statistik__card__title">Meninggal</span>
					</div>
					<div className="statistik__card__content">
						<span className="statistik__card__number">4</span>
						<span className="statistik__card__title">Jumlah Kasus</span>
					</div>
				</div>
			</div>
		);
	}
}

/* <span>{this.state.statistiks.sembuh}</span>
<span>{this.state.statistiks.perawatan}</span>
<span>{this.state.statistiks.jumlahKasuss}</span> */
