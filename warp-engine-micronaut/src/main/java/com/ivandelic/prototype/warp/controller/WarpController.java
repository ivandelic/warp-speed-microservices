package com.ivandelic.prototype.warp.controller;


import com.ivandelic.prototype.warp.configuration.WarpConfig;
import com.ivandelic.prototype.warp.model.SearchResult;
import com.ivandelic.prototype.warp.service.UniverseService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.QueryValue;

@Controller("/universe")
public class WarpController {
    
    private final static Logger log = LoggerFactory.getLogger(WarpController.class);
	
    private final UniverseService universeService;
    private final WarpConfig warpConfig;

    public WarpController(UniverseService universeService, WarpConfig warpConfig) {
        this.universeService = universeService;
        this.warpConfig = warpConfig;
    }

    @Get("/traverse")
    public SearchResult findHabitableDemo(
			@Nullable @QueryValue Double planetMinEsi,
    		@Nullable @QueryValue Double refMassMin,
    		@Nullable @QueryValue Double refMassMax,
    		@Nullable @QueryValue Double refTempMin,
    		@Nullable @QueryValue Double refTempMax) {
    	
    	if (planetMinEsi == null)
    		planetMinEsi = warpConfig.getPlanetMinEsi();
    	if (refMassMin == null)
    		refMassMin = warpConfig.getRefMassMin();
    	if (refMassMax == null)
    		refMassMax = warpConfig.getRefMassMax();
    	if (refTempMin == null)
    		refTempMin = warpConfig.getRefTempMin();
    	if (refTempMax == null)
    		refTempMax = warpConfig.getRefTempMax();
    	
    	long t1 = System.currentTimeMillis();
    	SearchResult result = universeService.traverseUniverse(universeService.getUniverse(), planetMinEsi, refMassMin, refMassMax, refTempMin, refTempMax);
    	long t2 = System.currentTimeMillis();
    	long tx = t2 - t1;
        result.setTime(tx);
    	
    	log.info(String.format("Counted Time %d", tx));
    	
    	return result;
    }
    
}
