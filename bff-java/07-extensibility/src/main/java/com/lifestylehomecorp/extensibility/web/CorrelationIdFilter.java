package com.lifestylehomecorp.extensibility.web;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.MDC;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

/**
 * Trainer-provided intake plumbing (Session 7, pre-built): <b>correlate the request</b>. The platform sends an
 * {@code X-Correlation-ID} with every Extension call; we put it in the logging context (MDC key
 * {@code correlationId}) for the duration of the request and echo it back, so a failed cart write in
 * Merchant Center can be traced to the exact handler invocation in our log. Applies to {@code /api/extensions/**}.
 */
@Component
@Order(5)
public class CorrelationIdFilter extends OncePerRequestFilter {

    public static final String HEADER = "X-Correlation-ID";
    public static final String MDC_KEY = "correlationId";

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return !request.getRequestURI().startsWith(ExtensionSecretFilter.PATH_PREFIX);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {
        String id = request.getHeader(HEADER);
        if (id == null || id.isBlank()) {
            id = "local-" + UUID.randomUUID();
        }
        MDC.put(MDC_KEY, id);
        try {
            response.setHeader(HEADER, id);
            chain.doFilter(request, response);
        } finally {
            MDC.remove(MDC_KEY);
        }
    }
}
