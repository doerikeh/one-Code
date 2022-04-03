import React from "react";

export interface RouteDef{
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}