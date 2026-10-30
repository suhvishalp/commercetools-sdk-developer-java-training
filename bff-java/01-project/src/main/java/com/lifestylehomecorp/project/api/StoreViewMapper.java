package com.lifestylehomecorp.project.api;

import com.lifestylehomecorp.project.api.dto.StoreContextView;
import com.lifestylehomecorp.project.api.dto.StoreView;
import com.lifestylehomecorp.project.domain.StoreContext;
import com.lifestylehomecorp.project.domain.StoreSummary;
import org.mapstruct.Mapper;

/**
 * Maps store domain records to their wire view models — the course's ONE MapStruct reference.
 *
 * <p>MapStruct generates the implementation at compile time ({@code StoreViewMapperImpl} under
 * {@code target/generated-sources/annotations}) and registers it as a Spring bean, so the controller
 * injects it. The component names line up one-to-one, which is exactly the case where a generated
 * mapper beats a hand-written one: no code to maintain, a compile error when a field is added on one
 * side only. Every other mapper in the course stays hand-written on purpose — the SDK → domain mapping
 * in the application layer is the boundary participants must be able to see and reason about.
 */
@Mapper(componentModel = "spring")
public interface StoreViewMapper {

    StoreView toView(StoreSummary s);

    StoreContextView toView(StoreContext c);
}
