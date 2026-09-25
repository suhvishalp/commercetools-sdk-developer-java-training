package com.lifestylehomecorp.extensibility.domain;

/** 7.9 — one LHC requirement mapped to the mechanism that serves it, why, and the task that built it. */
public record DecisionRow(String requirement, String mechanism, String timing, String why, String builtIn,
                          String wrongChoice) {
}
