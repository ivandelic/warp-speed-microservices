package com.ivandelic.prototype.warp.configuration;

import io.micronaut.context.annotation.ConfigurationProperties;

@ConfigurationProperties("warp")
public class WarpConfig {
	private double planetMinEsi;
	private String universeFilename;
	private String universeMode;
	private double refMassMin;
	private double refMassMax;
	private double refTempMin;
	private double refTempMax;

	public double getPlanetMinEsi() {
		return planetMinEsi;
	}

	public String getUniverseFilename() {
		return universeFilename;
	}

	public String getUniverseMode() {
		return universeMode;
	}

	public double getRefMassMin() {
		return refMassMin;
	}

	public double getRefMassMax() {
		return refMassMax;
	}

	public double getRefTempMin() {
		return refTempMin;
	}

	public double getRefTempMax() {
		return refTempMax;
	}

	public void setPlanetMinEsi(double planetMinEsi) {
		this.planetMinEsi = planetMinEsi;
	}

	public void setUniverseFilename(String universeFilename) {
		this.universeFilename = universeFilename;
	}

	public void setUniverseMode(String universeMode) {
		this.universeMode = universeMode;
	}

	public void setRefMassMin(double refMassMin) {
		this.refMassMin = refMassMin;
	}

	public void setRefMassMax(double refMassMax) {
		this.refMassMax = refMassMax;
	}

	public void setRefTempMin(double refTempMin) {
		this.refTempMin = refTempMin;
	}

	public void setRefTempMax(double refTempMax) {
		this.refTempMax = refTempMax;
	}
}
