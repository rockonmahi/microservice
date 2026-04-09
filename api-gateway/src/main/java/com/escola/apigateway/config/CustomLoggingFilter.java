package com.escola.apigateway.config;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class CustomLoggingFilter implements GlobalFilter, Ordered {

    private static final Logger logger = LoggerFactory.getLogger(CustomLoggingFilter.class);

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        // PRE-FILTER LOGIC: Executes before the request goes to the microservice
        String path = exchange.getRequest().getPath().toString();
        String method = exchange.getRequest().getMethod().name();

        logger.info("Incoming Request: {} {}", method, path);

        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
            // POST-FILTER LOGIC: Executes after the microservice responds
            logger.info("Outgoing Response Status: {}", exchange.getResponse().getStatusCode());
        }));
    }

    @Override
    public int getOrder() {
        // Defines execution priority. Lower values (like -1) run earlier.
        return -1;
    }
}
