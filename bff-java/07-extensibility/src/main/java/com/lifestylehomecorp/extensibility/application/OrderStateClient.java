package com.lifestylehomecorp.extensibility.application;

/**
 * 7.4 — how the consumer moves an order: through the BFF's <b>own</b> {@code PUT /api/orders/{orderNumber}/state}
 * (Session 6's guarded state machine), over HTTP. Module independence: {@code extensibility} never imports
 * {@code order}; and this is the same seam Session 8's Connect Event app will call from outside the BFF.
 */
public interface OrderStateClient {

    /** The outcome of one transition call. */
    record Result(int status, String body) {
        public boolean ok() {
            return status >= 200 && status < 300;
        }

        /**
         * A 409 means the state machine REFUSED the transition — which is not the same as "already
         * done". Conflating the two is how an event handler acknowledges a message whose work never
         * happened: the silent failure mode that is hardest to notice and worst to debug. The caller
         * must establish "already in the target state" by reading the order, not by reading a 409.
         */
        public boolean refused() {
            return status == 409;
        }
    }

    Result transition(String orderNumber, String stateKey);
}
