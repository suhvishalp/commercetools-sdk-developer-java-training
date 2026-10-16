package com.lifestylehomecorp.platform.config;

import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

/** What can this BFF's secret do — and what will fail for lack of a scope. */
class ScopeAuditTest {

    @Test
    void manageProjectIsFlaggedAndImpliesEverything() {
        ScopeAudit.Report r = ScopeAudit.analyse(Set.of("manage_project", "manage_api_clients"));
        assertThat(r.overPrivileged()).containsExactly("manage_api_clients", "manage_project");
        assertThat(r.missingBySession()).isEmpty();
    }

    @Test
    void aLeastPrivilegeRuntimeClientIsClean() {
        Set<String> all = new HashSet<>();
        ScopeAudit.RUNTIME_SCOPES.values().forEach(all::addAll);
        ScopeAudit.Report r = ScopeAudit.analyse(all);
        assertThat(r.overPrivileged()).isEmpty();
        assertThat(r.missingBySession()).isEmpty();
    }

    @Test
    void reportsTheSessionsThatWillFail() {
        Set<String> s13 = new HashSet<>(ScopeAudit.RUNTIME_SCOPES.get("Sessions 1-3"));
        ScopeAudit.Report r = ScopeAudit.analyse(s13);
        assertThat(r.missingBySession()).containsKeys("Session 4", "Session 5", "Session 6", "Session 7")
                .doesNotContainKey("Sessions 1-3");
    }

    @Test
    void manageImpliesView() {
        assertThat(ScopeAudit.implied("view_products", Set.of("manage_products"))).isTrue();
        assertThat(ScopeAudit.implied("view_products", Set.of("view_orders"))).isFalse();
    }
}
