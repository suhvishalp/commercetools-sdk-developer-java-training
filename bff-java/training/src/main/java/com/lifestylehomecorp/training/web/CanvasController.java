package com.lifestylehomecorp.training.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Serves Commerce Canvas from this BFF. The built bundle lives in the training module's static resources
 * ({@code META-INF/resources/canvas/}, produced by {@code commerce-canvas/build-bundle.sh}); Spring Boot
 * serves its files automatically, this controller only turns the bare {@code /canvas} path into the
 * bundle's {@code index.html}. Same origin as the training API, so no proxy, no CORS, and the shopper
 * cookie is shared with the storefront's calls as before.
 */
@Controller
public class CanvasController {

    @GetMapping({"/canvas", "/canvas/"})
    public String canvas() {
        return "forward:/canvas/index.html";
    }
}
