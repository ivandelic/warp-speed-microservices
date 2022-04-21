package com.ivandelic.prototype.warp.model;

import io.micronaut.core.annotation.Introspected;

@Introspected
public class SearchResult {
	
	private final long habitableStars;
	private final long habitablePlanets;
	private long time;
	
	public SearchResult(long habitableStars, long habitablePlanets) {
		this.habitableStars = habitableStars;
		this.habitablePlanets = habitablePlanets;
	}

	public long getHabitableStars() {
		return habitableStars;
	}

	public long getHabitablePlanets() {
		return habitablePlanets;
	}
	
	public long getTime() {
		return time;
	}

	public void setTime(long time) {
		this.time = time;
	}
}
