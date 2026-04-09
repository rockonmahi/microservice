package com.escola.apigateway.config;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;

@Component
public class MyConfigurableFilter extends AbstractGatewayFilterFactory<MyConfigurableFilter.Config> {

    public MyConfigurableFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            // Logic specific to routes defined in application.yml
            return chain.filter(exchange);
        };
    }

    public static class Config {
    }
}
