package com.ivandelic.prototype.warp;

import io.micronaut.runtime.Micronaut;

public class Application {

    public static void main(String[] args) {
        Micronaut.build(args).eagerInitSingletons(true).mainClass(Application.class).start();
    }
}